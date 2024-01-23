import React from "react";
import MenuData from "./MenuData";

const Buttons= ({text,setToHave})=>{

    function provideMenu(){
        // console.log(e.target.innerText);
        // let buttonText= e.target.innerText.trim().toLowerCase();
        // console.log(buttonText);

        // if(buttonText==="all"){
            setToHave([...MenuData]);
        // }
        
    }
    function provideBreakfast(){
        let breakfastMenu= MenuData.filter((menu)=>{
                    if(menu.category==="breakfast"){
                        return menu;
                    }
        })
        setToHave([...breakfastMenu]);
    }
    function provideLunch(){

        let lunchMenu= MenuData.filter((menu)=>{
                    if(menu.category==="lunch"){
                        return menu;
                    }
        })
        setToHave([...lunchMenu]);

    }
    function provideShakes(){
        let shakesMenu= MenuData.filter((menu)=>{
                    if(menu.category==="shakes"){
                        return menu;
                    }
        })
        setToHave(shakesMenu);
    }
    return(
        <div className="button">
            <button onClick={provideMenu} >All</button>
            <button  data-test-id="menu-item-breakfast" onClick={provideBreakfast} >Breakfast</button>
            <button  data-test-id="menu-item-lunch" onClick={provideLunch} >Lunch</button>
            <button  data-test-id="menu-item-shakes" onClick={provideShakes} >Shakes</button>
        </div>
    )
}

export default Buttons



// else if(buttonText==="breakfast"){

//     let breakfastMenu= MenuData.filter((menu)=>{
//         if(menu.category==="breakfast"){
//             return menu;
//         }
//     })
//     setToHave([...breakfastMenu]);
// }
// else if(buttonText==="lunch"){
//     let lunchMenu= MenuData.filter((menu)=>{
//         if(menu.category==="lunch"){
//             return menu;
//         }
//     })
//     setToHave([...lunchMenu]);
// }
// else{
//     let shakesMenu= MenuData.filter((menu)=>{
//         if(menu.category==="shakes"){
//             return menu;
//         }
//     })
//     setToHave(shakesMenu);
// }