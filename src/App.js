import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './homepage/home.js'
import './App.css';
import Navbar from './navbar/navbar.js';

function App() {
  return (
    <BrowserRouter>
			<div className="App">
        
        <div className={'pageContainer'}>

          <Navbar username={'Amardeepsingh'}></Navbar>

        </div>

				<Switch>
          {/* <Route path="/" component={home} /> */}
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
