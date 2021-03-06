import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./components/main/main";
import UploadPage from './components/uploadpage/uploadpage';
import "./app.scss";


class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}  />
          <Route path="/upload" component={UploadPage} />
          <Route path="/videos/:id" component={Main}  />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
// <Redirect from="/home" to="/" />
//Anything that does goes on all pages goes outside of the Switch but inside the Router