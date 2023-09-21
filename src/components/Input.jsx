import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function Input(props){
    const [isTyping, setIsType] = useState(false)
    const [input, setInput] = useState({
        name:"",
        desc:""
    })
    function handleChange( event ){
        // extracting name and values
        const {name, value} = event.target
        setInput(prev=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }
    function handleClick(e){
        e.preventDefault();
        //passing a input thru a func
        props.onAdd(input)
        setInput({
            name:"",
            desc:""
        })
    }
    function expand(){
        setIsType(true);
    }
    return(
        <div>
            <form className="create-note">
                <input hidden={!isTyping} type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name of the note"/>
                <textarea onClick={expand} rows={isTyping ? 3 :1} type="text" name="desc" value={input.desc} onChange={handleChange} placeholder="Take a note ..."/>
                <Zoom in={isTyping}>
                    <Fab disabled={input.name === "" && input.desc ==="" ? true : false } onClick={handleClick}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
               
            </form>
        </div>
        
    )
}
export default Input;