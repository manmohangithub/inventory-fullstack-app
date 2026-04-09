from flask import Flask, request, jsonify
import mysql.connector
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME"),
    port=int(os.getenv("DB_PORT", 3306))
)

cursor = db.cursor(dictionary=True)

@app.route('/search', methods=['GET'])
def search():
    q = request.args.get('q', '')
    query = "SELECT * FROM inventory WHERE LOWER(product_name) LIKE %s"
    cursor.execute(query, ('%' + q.lower() + '%',))
    return jsonify(cursor.fetchall())

@app.route('/supplier', methods=['POST'])
def supplier():
    data = request.json
    cursor.execute("INSERT INTO suppliers(name, city) VALUES(%s,%s)",
                   (data['name'], data['city']))
    db.commit()
    return jsonify({"message":"Supplier added"})

@app.route('/inventory', methods=['POST'])
def inventory():
    data = request.json
    cursor.execute("INSERT INTO inventory(supplier_id,product_name,category,quantity,price) VALUES(%s,%s,%s,%s,%s)",
                   (data['supplier_id'], data['product_name'], data['category'], data['quantity'], data['price']))
    db.commit()
    return jsonify({"message":"Inventory added"})

@app.route('/inventory', methods=['GET'])
def get_inventory():
    cursor.execute("SELECT * FROM inventory")
    return jsonify(cursor.fetchall())

app.run(debug=True)
