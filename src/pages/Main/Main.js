import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";

import { useSelector } from "react-redux";

function Main() {
  const about = useSelector((state) => state.about);
  const blog = useSelector((state) => state.blog);
  const achievement = useSelector((state) => state.achievement);
  const contacts = useSelector((state) => state.contacts);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);
  const header = useSelector((state) => state.header);

  return (
    <div>
      <Helmet>
        <title>{header.data.name} - Porfolio</title>
      </Helmet>

      <Navbar
        about={about.visible}
        education={true}
        services={true}
        contacts={contacts.visible}
        blog={blog.visible}
      />
      <Landing />
      {about.visible ? <About aboutData={about.data} /> : null}
      {education.visible ? <Education educationData={education.data} /> : null}
      <Skills />
      {experience.visible ? <Experience experienceData={experience.data} /> : null}
      <Projects />
      {achievement.visible ? (
        <Achievement achievementData={achievement.data} />
      ) : null}
      <Services />
      <Testimonials />
      {blog.visible ? <Blog blogData={blog.data} /> : null}
      {contacts.visible ? <Contacts /> : null}
      <Footer />
    </div>
  );
}

export default Main;
