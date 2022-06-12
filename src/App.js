import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import { useSelector } from "react-redux";

import theme from "./theme/theme"

import "./App.css";

function App() {
  const { setTheme } = useContext(ThemeContext);

  const blog = useSelector((state) => state.blog);
  const header = useSelector((state) => state.header);
  const projects = useSelector((state) => state.projects);

  // test theme change
  React.useEffect(()=>{
    setInterval(()=>{
      setTheme(theme[Object.keys(theme)[Math.floor(Math.random() * Object.keys(theme).length | 0)]])
    },1000)
  },[setTheme])

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          {blog.visible ? (
            <Route path="/blog" exact>
              <BlogPage blogData={blog.data} headerData={header.data} />
            </Route>
          ) : null}
          <Route path="/projects" exact>
            <ProjectPage projectsData={projects.data} headerData={header.data} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
