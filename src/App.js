import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './views/Home';
import CompanyDetail from './views/CompanyDetail';
import CompanyList from './views/CompanyList';
import ComunityList from './views/ComunityList';
import ComunityDetail from './views/ComunityDetail';
import EducationList from './views/EducationList';
import EducationDetail from './views/EducationDetail';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/companies">
                <CompanyList/>
              </Route>
              <Route exact path="/companies/:companyId">
                <CompanyDetail/>
              </Route>
              <Route exact path="/communities">
                <ComunityList/>
              </Route>
              <Route exact path="/communities/:communityId">
                <ComunityDetail/>
              </Route>
              <Route exact path="/educations">
                <EducationList/>
              </Route>
              <Route exact path="/educations/:educationId">
                <EducationDetail/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
