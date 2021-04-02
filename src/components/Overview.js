import React from "react"


function Overview(props) {

    const lists = props.list.map((item, index) => {

const itemNumber = index + 1

        return  <div><li>{itemNumber} {item}</li> <button onClick={() => props.handleClick(item)}>delete</button></div>   
           

       
    })


       

    return (
        
        <div>
          
        

    <h1> {lists}</h1>
    
    
     

        </div>
    )
}

export default Overview