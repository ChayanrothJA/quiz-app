import { useContext } from "react";
import { DataConText } from "./../App";
import QuestionsData from "../data/QuestionsData";


const Score = ()=>{
    const {score,setAppState,setScore} = useContext(DataConText)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    return(
        <div className="score">
            <h1>สรุปผลคะเเนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำเเบบสอบถามอีกครั้ง</button>
        </div>
    )
}

export default Score;