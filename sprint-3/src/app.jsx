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
          <Route path="/" exact  render={() => <Main currentId="1af0jruup5gu"/>} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/videos/:id" render={(routerProps) => <Main currentId={routerProps.match.params.id}/>}  />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
