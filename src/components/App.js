{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, {useState} from "react";
import MenuData from "./MenuData";
import DisplayMenu from "./DisplayMenu";
import "../styles/App.css";


const App =()=>{

    const [allDishes, setAllDishes]= useState([]);
    const [breakfast, setBreakfast]= useState([]);
    const [lunch, setLunch]= useState([]);
    const [shakes, setShakes]= useState([]);



    function allDishesFn(){
        setLunch([]);
        setBreakfast([]);
        setShakes([]);
        setAllDishes(MenuData);
    }
    function lunchFn(){
        setAllDishes([]);
        setBreakfast([]);
        setShakes([]);
       let lunchArr= MenuData.filter(dish=>{
            if(dish.category==="lunch"){
                return dish;
            }
       });
       setLunch(lunchArr);
    }
    function shakesFn(){
        setAllDishes([]);
        setBreakfast([]);
        setLunch([]);
       let shakesArr= MenuData.filter(dish=>{
            if(dish.category==="shakes"){
                return dish;
            }
       });
       setShakes(shakesArr);
    }
    function breakfastFn(){
        setAllDishes([]);
        setLunch([]);
        setShakes([]);
       let breakfastArr= MenuData.filter(dish=>{
            if(dish.category==="breakfast"){
                return dish;
            }
       });
       setBreakfast(breakfastArr);
       console.log(breakfastArr);
    }

    return(
        <div id="main">
            <div>
                <h1>Our Menu</h1>
            </div>
            <div>
                <button onClick={allDishesFn}>All</button>
                <button onClick={breakfastFn} key="#filter-btn-1">Breakfast</button>
                <button onClick={lunchFn}  key="#filter-btn-2">Lunch</button>
                <button onClick={shakesFn}  key="#filter-btn-3">Shakes</button>
            </div>


            <div>
                <DisplayMenu showMenu={allDishes}/>
            </div>
            <div data-test-id="menu-item-breakfast">
                <DisplayMenu showMenu={breakfast}/>
            </div>
            <div data-test-id="menu-item-lunch">
                <DisplayMenu showMenu={lunch}/>
            </div>
            <div data-test-id="menu-item-shakes">
                <DisplayMenu showMenu={shakes}/>
            </div>
            
        </div>
    )
}

export default App