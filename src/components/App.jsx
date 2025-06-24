import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import Input from "./Input";
import { ThemeProvider } from "../ThemeContext";
import Masonry from 'react-masonry-css';

function App(){
    const [savedNotes] = useState(localStorage.getItem('notes-app'))
    const [notes, setNotes] = useState(
        savedNotes ? JSON.parse(savedNotes) : []
        )
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        localStorage.setItem("notes-app", JSON.stringify(notes))
    }, [notes]);

    function onSubmit(newNote){
        const noteWithId = { ...newNote, id: Date.now() + Math.random() };
        setNotes(prev => [...prev, noteWithId]);
    }

    function handelDelete(id){
        setNotes(prev => prev.filter(item => item.id !== id));
    }

    // Masonry breakpoints
    const breakpointColumnsObj = {
      default: 4,
      1200: 3,
      900: 2,
      600: 1
    };

    // Sort notes based on sortOrder
    const sortedNotes = [...notes];
    if (sortOrder === 'latest') {
      sortedNotes.reverse();
    }

    return(
        <ThemeProvider>
            <Header/>
            <div className="notes-form-row">
              <Input onAdd = {onSubmit}/>
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="notes-filter-dropdown"
                aria-label="Sort notes"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
            {notes.length === 0 ? 
                <div className="message">
                    <img src="../../no-results.png"/>
                    <br/>
                    <h3>No notes</h3>
                </div>
                :
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="notes-masonry"
                  columnClassName="notes-masonry-column"
                >
                    {sortedNotes.map((item)=>(
                        <Note
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            desc={item.desc}
                            gradient={item.gradient}
                            onDlt={handelDelete}
                        />
                    ))}
                </Masonry>
            }
            <Footer/>
        </ThemeProvider>
    );
}
export default App;