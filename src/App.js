import './App.css';
import Main from './components/Main.js';
import Auth from './components/Auth.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="*">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
