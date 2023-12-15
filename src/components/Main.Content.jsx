import Number from "./number";
import Button from "./button";
import { useState } from "react";

function MainContent() {
        const [counter, setCounter] = useState(0)

      



    return (
    <div >
        <div className="container">
            <Number counter={counter}/>
            <Button counter={counter} setCounter={setCounter}/>
        </div>
    </div>
    );
}

export default MainContent;