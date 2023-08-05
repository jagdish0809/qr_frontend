import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./pages/scanner/Scanner";
import Form from "./pages/form/Form";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/scanner" element={<Scanner />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
