import React from 'react'

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={handleClick}
        className="note-delete">
        X
      </button>
    </div>
  )
}

export default Note