import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Box, Button, Modal } from "@mui/material";

const PRESET_GRADIENTS = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
];

function Input(props){
    const [isTyping, setIsType] = useState(false)
    const [input, setInput] = useState({
        name:"",
        desc:"",
        gradient: PRESET_GRADIENTS[0]
    })
    const [customGradient, setCustomGradient] = useState("");
    const [showGradientModal, setShowGradientModal] = useState(false);

    function handleChange( event ){
        const {name, value} = event.target
        setInput(prev=> ({
            ...prev,
            [name] : value
        }))
    }
    function handleGradientChange(gradient) {
        setInput(prev => ({ ...prev, gradient }));
        setCustomGradient("");
        setShowGradientModal(false);
    }
    function handleCustomGradientChange(e) {
        setCustomGradient(e.target.value);
        setInput(prev => ({ ...prev, gradient: e.target.value }));
    }
    function handleClick(e){
        e.preventDefault();
        props.onAdd(input)
        setInput({
            name:"",
            desc:"",
            gradient: PRESET_GRADIENTS[0]
        })
        setCustomGradient("");
        setIsType(false);
    }
    function expand(){
        setIsType(true);
    }
    return(
        <div>
            <form className="create-note">
                <input hidden={!isTyping} type="text" name="name" value={input.name} onChange={handleChange} placeholder="Title goes here"/>
                <textarea onClick={expand} rows={isTyping ? 3 :1} type="text" name="desc" value={input.desc} onChange={handleChange} placeholder="add a note"/>
                {isTyping && (
                  <div style={{display: 'flex', alignItems: 'center', gap: 8, marginTop: 8}}>
                    <button
                      type="button"
                      className="paint-btn"
                      title="Choose gradient background"
                      onClick={() => setShowGradientModal(true)}
                      style={{padding: 6, borderRadius: '50%', border: 'none', background: input.gradient, color: '#222', cursor: 'pointer', marginRight: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
                    >
                    </button>
                    <span style={{fontSize: '0.95em', color: 'var(--text-secondary)'}}></span>
                  </div>
                )}
                <button onClick={handleClick} className={isTyping ? "add" : "hide"} disabled={input.name === "" && input.desc ==="" ? true : false } >
                    <AddIcon/>
                </button>
            </form>
            <Modal
              open={showGradientModal}
              onClose={() => setShowGradientModal(false)}
              aria-labelledby="gradient-modal-title"
              aria-describedby="gradient-modal-desc"
            >
              <Box className="gradient-modal-box">
                <h3 id="gradient-modal-title" style={{marginBottom: 12}}>Choose a Gradient</h3>
                <div className="gradient-picker">
                  <div className="preset-gradients">
                    {PRESET_GRADIENTS.map((g, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={input.gradient === g ? "gradient-btn selected" : "gradient-btn"}
                        style={{ background: g }}
                        onClick={() => handleGradientChange(g)}
                        aria-label={`Choose gradient ${idx+1}`}
                      />
                    ))}
                  </div>
                  <label className="custom-gradient-label">
                    Custom CSS Gradient:
                    <input
                      type="text"
                      className="custom-gradient-input"
                      placeholder="e.g. linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
                      value={customGradient}
                      onChange={handleCustomGradientChange}
                      style={{marginTop: 4, marginBottom: 4}}
                    />
                    <div
                      className="custom-gradient-preview"
                      style={{
                        background: customGradient || input.gradient,
                        minHeight: 24,
                        borderRadius: 6,
                        marginTop: 4,
                        border: '1px solid #ccc',
                        width: '100%',
                      }}
                    />
                  </label>
                </div>
                <Button onClick={() => setShowGradientModal(false)} style={{marginTop: 16}}>Close</Button>
              </Box>
            </Modal>
        </div>
    )
}
export default Input;