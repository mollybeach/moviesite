import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/main/main";
import UploadPage from './components/uploadpage/uploadpage';
import "./app.scss";
import Header from "./components/header/header";

export default function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/videos/:id" component={Main} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

