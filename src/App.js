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

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const blog = useSelector((state) => state.blog);
  const header = useSelector((state) => state.header);
  const projects = useSelector((state) => state.projects);

  console.log(
    "%cDEVELOPER PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/hhhrrrttt222111/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  // console.log = console.warn = console.error = () => {};

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
