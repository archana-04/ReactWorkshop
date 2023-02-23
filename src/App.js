import "./App.css";
import Nav from "./components/toDo/Nav";
import Forms from "./components/toDo/Forms";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="p-4">
        <Forms></Forms>
      </div>
      <div className="absolute right-0 bottom-0 p-5">
        <h1 className="text-2xl font-bold text-green-600">
          <span className="text-red-600">ARCHANA</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
