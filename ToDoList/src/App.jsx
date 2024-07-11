import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleChange(event) {
    setTask(event.target.value);
  }
  function addItem() {
    if (!editMode) {
      setItems((prev) => {
        return [...prev, task];
      });
      setTask("");
    } else {
      let newItems = [...items];
      newItems[currentIndex] = task;
      setItems(newItems);

      setTask("");
      setEditMode(false);
    }
  }
  function edit(index) {
    setTask(items[index]);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function deleteItem(index) {
    setItems(
      items.filter((item, i) => {
        return i !== index;
      })
    );
  }

  return (
    <>

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom:'5px' }}>
        <TextField
          id="outlined-basic"
          label="Add Item"
          variant="outlined"
          value={task}
          onChange={handleChange}
          placeholder="Add Item"
          color="secondary"
        />

        {/* <input value={task} onChange={handleChange} placeholder="Add Item" /> */}
        <Button
          onClick={addItem}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          {editMode ? "Edit" : "Add"}
        </Button>
      </Box>

      <ol>
        {items.map((item, index) => (
          <li key={index}>
          <Box sx={{ display: "flex", justifyContent: 'center', gap: '5px', marginBottom: '5px' }}>
              <Typography variant="body1" gutterBottom>
                {item}
              </Typography>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => edit(index)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteItem(index)}
              >
                Delete
              </Button>
            </Box>
          </li>
        ))}
      </ol>

    </>
  );
}

export default App;
