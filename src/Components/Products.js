import React, { useState } from "react";
 
const Products = (props) => {
 const [items, setItems] = useState([
   { pCode: 1, pName: "Apple" },
   { pCode: 2, pName: "Banana" },
   { pCode: 3, pName: "Grapes" },
   { pCode: 4, pName: "Oranges" }
 ]);

 const productItem=(items.map((elem,index)=>(
    <div key={index}>
        <ul>
            <li>
            {elem.pName}
            </li>
        
        </ul>
        
    </div>
)))
 
    return(
        props.isAdmin?productItem:
        <p>No Contents</p>
        
            
           
        
    
    
)}
 



export default Products