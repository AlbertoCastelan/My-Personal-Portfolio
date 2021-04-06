import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/skills" component={Skills}>
            <Skills/>
          </Route>
          <Route path="/projects" component={Projects}>
            <Projects/>
          </Route>
          <Route path="/experience" component={Experience}>
            <Experience/>
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact/>
          </Route>
          <Route path="/" exact component={Home}>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
