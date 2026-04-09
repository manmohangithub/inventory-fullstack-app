import { useState } from 'react'

const BASE_URL = "https://inventory-fullstack-app-production.up.railway.app"

export default function App(){
 const [name,setName]=useState('')
 const [city,setCity]=useState('')
 const [product,setProduct]=useState('')
 const [category,setCategory]=useState('')
 const [price,setPrice]=useState('')
 const [qty,setQty]=useState('')
 const [supplierId,setSupplierId]=useState('')
 const [search,setSearch]=useState('')
 const [results,setResults]=useState([])

 const addSupplier=async()=>{
  const res = await fetch(`${BASE_URL}/supplier`,{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({name,city})
  })
  const data = await res.json()
  alert(data.message || "Supplier added")
 }

 const addInventory=async()=>{
  const res = await fetch(`${BASE_URL}/inventory`,{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({
     supplier_id:Number(supplierId),
     product_name:product,
     category,
     quantity:Number(qty),
     price:Number(price)
   })
  })
  const data = await res.json()
  alert(data.message || "Inventory added")
 }

 const doSearch=async()=>{
  const res=await fetch(`${BASE_URL}/search?q=${search}`)
  const data=await res.json()
  setResults(data)
 }

 return(
  <div>
   <h2>Add Supplier</h2>
   <input placeholder="Name" onChange={e=>setName(e.target.value)} />
   <input placeholder="City" onChange={e=>setCity(e.target.value)} />
   <button onClick={addSupplier}>Add Supplier</button>

   <h2>Add Inventory</h2>
   <input placeholder="Supplier ID" onChange={e=>setSupplierId(e.target.value)} />
   <input placeholder="Product" onChange={e=>setProduct(e.target.value)} />
   <input placeholder="Category" onChange={e=>setCategory(e.target.value)} />
   <input placeholder="Qty" onChange={e=>setQty(e.target.value)} />
   <input placeholder="Price" onChange={e=>setPrice(e.target.value)} />
   <button onClick={addInventory}>Add Inventory</button>

   <h2>Search</h2>
   <input onChange={e=>setSearch(e.target.value)} />
   <button onClick={doSearch}>Search</button>

   {results.map(r=>(
    <div key={r.id}>
     <h3>{r.product_name}</h3>
     <p>{r.category}</p>
     <p>₹{r.price}</p>
    </div>
   ))}
  </div>
 )
}