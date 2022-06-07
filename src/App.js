import { useState } from 'react'
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';


function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    //console.log(note);
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  {/*}const searchNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index === text;
      })
    })
  }*/}

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />

      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;

