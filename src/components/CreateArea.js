import React from 'react'

import { useState } from 'react'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNote((prevNote) => {
      if (name === "title") {
        return {
          title: value,
          content: prevNote.content
        }
      } else if (name === "content") {
        return {
          title: prevNote.title,
          content: value
        }
      };
    });
  }

  const submitNote = (e) => {
    setNote({
      title: "",
      content: ""
    })
    props.onAdd(note);
    e.preventDefault();
  }

  /*const [text, searchText] = useState("");
  const handleText = e => {
    searchText(e.target.value);

  }*/

  return (
    <>
      <aside className="app-controls">
        <button onClick={submitNote} className="add-btn">+ New Note</button>
        <input
          //value={text}
          //onChange={handleText}
          type="text"
          id=""
          placeholder='Type here to search...'
          className="search"
        />
      </aside>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          className="title"
          name="title"
          placeholder='Title'
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          name="content"
          id="" cols="30" rows="12">
        </textarea>
        <span className="note-delete">
          X
        </span>
      </form>
    </>
  )
}

export default CreateArea