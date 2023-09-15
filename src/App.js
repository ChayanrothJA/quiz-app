import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import './App.css'

export const DataConText = createContext()

function App() {
  const [appState, setAppState] = useState("menu")
  const [score,setScore] = useState(0)
  return (
      <DataConText.Provider value={{appState,setAppState,score,setScore}}>
        <div className='App'> 
          <h1>Web Development Quiz</h1>
            {appState === "menu" && <Menu/>} {/*พิมพ์ตรงนี้จะ import ให้อัตโนมัติ */}
            {appState === "quiz" && <Quiz/>} {/*พิมพ์ตรงนี้จะ import ให้อัตโนมัติ */}
            {appState === "score" && <Score/>} {/*พิมพ์ตรงนี้จะ import ให้อัตโนมัติ */}
        </div>
      </DataConText.Provider>
    );
}

export default App;
