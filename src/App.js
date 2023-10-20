import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./pages/scanner/Scanner";
import Form from "./pages/form/Form";
import Errormodal from "./components/Errormodal";
import { getServers } from "./apis/api";

function App() {
  const [iserror, setIsError] = React.useState("");

  const errormodalHandler = () => {
    setIsError("");
  };

  React.useEffect(() => {
    checkServer();
  }, []);

  const checkServer = async () => {
    try {
      const res = await getServers();
      if (res.status !== 200) {
        setIsError("Server Might be down");
      }
    } catch (err) {
      setIsError("Server is down");
    }
  };

  const goterror = (error) => {
    setIsError(error);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form error={goterror} />} ></Route>
          <Route exact path="/scanner" element={<Scanner />}></Route>
        </Routes>
      </Router>
      {iserror && <Errormodal error={iserror} close={errormodalHandler} />}
    </div>
  );
}

export default App;
