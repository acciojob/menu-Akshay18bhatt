import React from "react";


const DisplayMenu= ({toHave})=>{
    console.log(toHave);

    return(
       <div className="displayMenu">
            {toHave.map((item)=>{
               return( <div key={item.id} className="itemDiv">
                    <div><img src={item.img} alt="food"></img></div>
                    <div>
                        <div className="namePrice">
                            <h2>{item.title}</h2>
                            <h2>$ {item.price}</h2>
                        </div>
                        <div><p>{item.desc}</p></div>
                    </div>
               </div>)
        })}
       </div>
    )
}

export default DisplayMenu