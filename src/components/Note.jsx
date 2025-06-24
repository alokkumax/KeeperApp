import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
function Note(props){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    return(
        <div
          className="note"
          style={{ background: props.gradient || undefined }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <button className={ isHovering ? "cross" : "hidden"} onClick={()=>props.onDlt(props.id)}>
                <ClearIcon/>
            </button>
        </div>
    );
}
export default Note;