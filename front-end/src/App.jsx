import "./App.css";
import plusIcon from "../public/sitcky-note-plus.png";
import deleteIcon from "../public/sticky-note-delete.png";

function App() {
  return (
    <>
      <div className="note-button-container">
        <button className="note-button add-note-button">
          <img src={plusIcon}></img>
        </button>
        <button className="note-button remove-note-button">
          <img src={deleteIcon}></img>
        </button>
      </div>
    </>
  );
}

export default App;
