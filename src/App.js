import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
    } else if (name && isEditing) {
    } else {
      const newList = { id: new Date().getTime().toString(), title: name };
      setList([...List, newList]);
      setName("");
    }
  };
  return (
    <>
      <div className="section-center">
        <form className="grocery-form" onSubmit={{ handleSubmit }}>
          {alert.show && <Alert />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </div>
          </div>
        </form>
        <div className="grocery-conatiner">
          <List items={List} />
        </div>
        <button className="clear-btn">clear items</button>
      </div>
    </>
  );
}

export default App;
