import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newText, setText] = useState("");
  const [newTitle, setTitle] = useState("");
  const [isClicked, setClick] = useState(false);
  // const [newNote,setNote]=useState({});

  function handleChange(event) {
    const newEntry = event.target.value;
    const name = event.target.name;
    if (name === "title") {
      setTitle(newEntry);
    } else if (name === "content") {
      setText(newEntry);
    }
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            placeholder="Title"
            value={newTitle}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={newText}
          onClick={() => {
            setClick((prevValue) => {
              return !prevValue;
            });
          }}
          onChange={handleChange}
        />
        {isClicked && (
          <Zoom in={true}>
            <Fab
              onClick={(event) => {
                props.buttonClick(event, newTitle, newText);
                setText("");
                setTitle("");
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
