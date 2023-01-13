import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [note, addNote] = useState([]);

    function addItem(note) {
        addNote(prevItem => [...prevItem, note])
    }

    function deleteItem(id) {
        addNote(note.filter((note, index) => index !== id))
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addItem} />
            {note.map((note, index) => <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteItem}
            />)}
            <Footer />
        </div>
    );
}

export default App;
