import React from "react";


const DisplayMenu= ({showMenu})=>{


    return(
        <div>
                    {showMenu.map(dish=>{
                        return( <div key={dish.id}>
                            <div>
                                <img src={dish.img}></img>
                            </div>
                            <div>
                                <div>
                                    <h2>{dish.title}</h2>
                                    <h3>$ {dish.price}</h3>
                                </div>
                                <div>{dish.desc}</div>
                            </div>
                        </div>)
                    })}
                                

        </div>
    )
}

export default DisplayMenu;