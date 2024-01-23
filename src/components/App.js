{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, {useState} from "react";
import Heading from "./Heading";
import Buttons from "./Buttons";
import DisplayMenu from "./DisplayMenu";
import MenuData from "./MenuData";
import "../styles/App.css";


const App =()=>{

    const [toHave,setToHave] = useState(MenuData);
    // const data= JSON.stringify(toHave);

    return(
        <div>
            <Heading />
            <div className="button">
                <Buttons text="All" setToHave={setToHave} />
                <Buttons text="Breakfast" setToHave={setToHave} />
                <Buttons text="Lunch" setToHave={setToHave} />
                <Buttons text="Shakes" setToHave={setToHave} />
            </div>
            {/* <div>{data}</div> */}
            <DisplayMenu toHave={toHave}/>
        </div>
    )
}

export default App