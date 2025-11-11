import { useContext } from "react";
import { MyContext } from "../context/MyProvider";

const StageTwo = () => {
    const context = useContext(MyContext)
    return <>
    <div className="result_wrapper">
        <h3>The Losser is:</h3>
        {context.result}
    </div>
    <div className="action_button" onClick={()=> context.resetGame()}>Start Over</div>
    <div className="action_button btn_2" onClick={()=> context.generateLoser()}>Get New Losser</div>
    </>
};

export default StageTwo;