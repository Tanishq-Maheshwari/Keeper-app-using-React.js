import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newnote, setNote] = useState([]);

  function handleClick(event, title, content) {
    setNote((prevValue) => {
      return [...prevValue, { title: title, content: content }];
    });
    event.preventDefault();
  }

  function handleDelete(id) {
    setNote((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea buttonClick={handleClick} />
      {newnote.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteButton={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
