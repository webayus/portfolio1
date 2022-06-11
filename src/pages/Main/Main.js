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
import { headerData } from "../../data/headerData";

import { useSelector } from "react-redux";

function Main() {
  const about = useSelector((state) => state.about);
  const blog = useSelector((state) => state.blog);
  const achievement = useSelector((state) => state.achievement);
  const contacts = useSelector((state) => state.contacts);

  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
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
      <Education />
      <Skills />
      <Experience />
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
