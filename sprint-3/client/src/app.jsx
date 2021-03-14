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





/*

export default function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact render={() => <Main currentId="1af0jruup5gu"/>}/>
          <Route path='/upload' exact component={UploadPage}/>
          <Route path='/:id' exact render={(routerProps) => <Main currentId={routerProps.match.params.id}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

//console.log('Client .env ', process.env.REACT_APP_URL,);

*/

/*
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

/*
 
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/video/:id"
            render={props => {
              return <Main {...props} />;
            }}
          />
          <Route path="/upload" exact component={UploadPage} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
*/