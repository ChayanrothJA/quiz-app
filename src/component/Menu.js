import { useContext } from "react";
import { DataConText } from "../App";

const Menu = ()=>{
    const {setAppState} = useContext(DataConText)
    return(
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={()=> setAppState("quiz")}>เริ่มทำเเบบทดสอบ</button>
        </div>
    )
}

export default Menu;