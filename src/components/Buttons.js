import React from "react";
import MenuData from "./MenuData";

const Buttons= ({text,setToHave})=>{

    function provideMenu(e){
        // console.log(e.target.innerText);
        let buttonText= e.target.innerText.trim().toLowerCase();
        // console.log(buttonText);

        if(buttonText==="all"){
            setToHave([...MenuData]);
        }
        else if(buttonText==="breakfast"){

            let breakfastMenu= MenuData.filter((menu)=>{
                if(menu.category==="breakfast"){
                    return menu;
                }
            })
            setToHave([...breakfastMenu]);
        }
        else if(buttonText==="lunch"){
            let lunchMenu= MenuData.filter((menu)=>{
                if(menu.category==="lunch"){
                    return menu;
                }
            })
            setToHave([...lunchMenu]);
        }
        else{
            let shakesMenu= MenuData.filter((menu)=>{
                if(menu.category==="shakes"){
                    return menu;
                }
            })
            setToHave(shakesMenu);
        }
    }
    return(
        <button onClick={provideMenu} >{text}</button>
    )
}

export default Buttons