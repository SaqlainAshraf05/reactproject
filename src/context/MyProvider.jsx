import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const MyContext = createContext();
const MyProvider = (props)=>{
    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [result, setResult] = useState("");

    const addPlayerHandler = (name)=>{ 
         setPlayers((prevState) => ([ 
            ...prevState,
            name
        ]));
    };
      const removePlayerHandler = (idx) =>{
      let newArray = [...players]
      newArray.splice(idx, 1)

      setPlayers(newArray)
    };
    const nextHandler = ()=> {
      if (players.length<2){
        toast.error(" Sorry! You Need More Than One Player", {
          position: "top-left",
          autoClose:5000,
        })
      } else {
        setStage(2)
      }
    }
    const generateLoser = ()=> {
      let result = players[Math.floor(Math.random()*players.length)]
      setResult(result)
    }
    const resetGameHandler = ()=> {
      setStage(1)
      setPlayers([])
      setResult('')
    }
    return (<> 
         <MyContext.Provider 
         value={{
            //STATE
            stage:stage,
            players:players,
            result:result,
            addPlayer: addPlayerHandler,
            removePlayer : removePlayerHandler,        
            next : nextHandler,
            generateLoser : generateLoser,
            resetGame : resetGameHandler
         }}
         > 
           {props.children}
         </MyContext.Provider>
         <ToastContainer />
    </>);
};
export { MyContext, MyProvider };