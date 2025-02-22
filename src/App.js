import "./App.css";

import React, { useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
// import { Route,Routes,BrowserRouter } from "react-router-dom";

const App = () => {

  const apiKey = "387eb108d2f849a4af3561635e0dfecd";
  const [progress, setProgress] = useState(0); 

  return (
      <div>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Navbar />
        <News pageSize={9} country="in" apiKey={apiKey} setProgress={setProgress}/>
        {/* <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route exact path="/">element={<News key="general" pageSize={5} country="in" category="general"/>}</Route> 
            <Route exact path="/business">element={<News key="business" pageSize={5} country="in" category="business"/>}</Route> 
            <Route exact path="/entertainment">element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}</Route> 
            <Route exact path="/general">element={<News key="general" pageSize={5} country="in" category="general"/>}</Route> 
            <Route exact path="/health">element={<News key="health" pageSize={5} country="in" category="health"/>}</Route> 
            <Route exact path="/science">element={<News key="science" pageSize={5} country="in" category="science"/>}</Route> 
            <Route exact path="/sports">element={<News key="sports" pageSize={5} country="in" category="sports"/>}</Route> 
            <Route exact path="/technology">element={<News key="technology" pageSize={5} country="in" category="technology"/>}</Route> 
          </Routes>
          </BrowserRouter> */}
      </div>
    );
}

export default App;