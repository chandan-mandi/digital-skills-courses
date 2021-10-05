import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Eror from './components/Eror/Eror';
import { createContext, useEffect, useState } from 'react';

export const coursesContext = createContext('ring');

function App() {
  const [courses, setCourses] = useState([]);

    // data load from database
    useEffect(() => {
        fetch('./servicesdb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
  return (
    <coursesContext.Provider value={courses}>
      <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Eror></Eror>
          </Route>
        </Switch>
      </Router>
    </div>
    </coursesContext.Provider>
  );
}

export default App;
