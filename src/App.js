import React, { useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import { useSelector, useDispatch } from "react-redux";

import theme from "./theme/theme";

import LoadingPage from "./pages/Loading/LoadingPage";

//services
import PortfolioService from "./services/portfolio";

//actions
import { save as aboutSave } from "./reducers/about/aboutSlice";
import { save as achievementSave } from "./reducers/achievement/achievementSlice";
import { save as blogSave } from "./reducers/blog/blogSlice";
import { save as contactsSave } from "./reducers/contacts/contactsSlice";
import { save as educationSave } from "./reducers/education/educationSlice";
import { save as experienceSave } from "./reducers/experience/experienceSlice";
import { save as headerSave } from "./reducers/header/headerSlice";
import { save as projectsSave } from "./reducers/projects/projectsSlice";
import { save as servicesSave } from "./reducers/services/servicesSlice";
import { save as skillsSave } from "./reducers/skills/skillsSlice";
import { save as socialsSave } from "./reducers/socials/socialsSlice";
import { save as testimonialsSave } from "./reducers/testimonials/testimonialsSlice";

import "./App.css";

const Main = React.lazy(() => import("./pages/Main/Main"));
const BlogPage = React.lazy(() => import("./pages/Blog/BlogPage"));
const ProjectPage = React.lazy(() => import("./pages/Project/ProjectPage"));

function App() {
  const [loading, setLoading] = React.useState(true);
  const { setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog);
  const header = useSelector((state) => state.header);
  const projects = useSelector((state) => state.projects);

  React.useEffect(() => {
    PortfolioService.get()
      .then((res) => {
        dispatch(aboutSave(res.data.about));
        dispatch(achievementSave(res.data.achievement));
        dispatch(blogSave(res.data.blog));
        dispatch(contactsSave(res.data.contacts));
        dispatch(educationSave(res.data.education));
        dispatch(experienceSave(res.data.experience));
        dispatch(headerSave(res.data.header));
        dispatch(projectsSave(res.data.projects));
        dispatch(servicesSave(res.data.services));
        dispatch(skillsSave(res.data.skills));
        dispatch(socialsSave(res.data.socials));
        dispatch(testimonialsSave(res.data.testimonials));
        setTheme(
          theme[Object.keys(theme).find((key) => key.includes(res.data.theme))]
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch,setTheme]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
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
              <ProjectPage
                projectsData={projects.data}
                headerData={header.data}
              />
            </Route>

            <Redirect to="/" />
          </Switch>
        </Router>
        <BackToTop />
      </div>
    </Suspense>
  );
}

export default App;
