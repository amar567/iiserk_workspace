import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './homepage/home.js'
import './App.css';
import Navbar from './navbar/navbar.js';
import Sidebar from './sidebar/sidebar.js';

function App() {
  return (
    <BrowserRouter>
			<div className="App">
        
        <div className={'pageContainer'}>

          <Sidebar username={'Amardeepsingh'}></Sidebar>

          <div className={'rightside'}>
            <div className='nav'>
              <Navbar/>
            </div>
            <div className={'rightBottom'}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/course" component={null} />
                <Route exact path="/util" component={null} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
