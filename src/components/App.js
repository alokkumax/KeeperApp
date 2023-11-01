import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
  
import Input from "./Input";
  
  function App(){
      const [savedNotes] = useState(localStorage.getItem('notes-app'))
      const [notes, setNotes] = useState(
          savedNotes ? JSON.parse(savedNotes) : []
          )
  
      useEffect(() => {
          localStorage.setItem("notes-app", JSON.stringify(notes))
      }, [notes]);
  
      function onSubmit(newNote){
          //getting notes from INPUT to APP
          setNotes(prev =>{
              return [...prev, newNote]
          })
      }
  
      function handelDelete(id){
          console.log(id + " Deleted!!!");
          setNotes(prev=>{
              return prev.filter((item,index)=>{
                  return index !== id;
              })
          })
      }
      return(
          <>
              <Header/>
              <Input onAdd = {onSubmit}/>
                <div className="drop">
                {   notes.length === 0 ? 
                    <div className="message">
                        {/* <img src="../../no-results.png"/> */}
                        {/* <br/> */}
                        <h3>No notes</h3>
                    </div>
                    :
                   
                    notes.map((item,index)=>(
                        <Note
                        key ={index}
                        id={index}
                        name = {item.name}
                        desc = {item.desc}
                        onDlt = {handelDelete}
                    />
                    
                ))}
                </div>
              
             
              {/* <Footer/> */}
          </>
      );
  }
  export default App;
