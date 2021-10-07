import Head from "next/head";
import Blogs from "../Components/Blogs";
import PorjectCard from "../Components/PorjectCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React, { useRef } from "react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home({ posts }) {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  var projects = [
    {
      name: "Tiktok video scroller",
      madeWith: "Flutter",
      date: "5 september 2021",
      description:
        "Real short video app with firebase and pixels API.Where you can create a short video with pixels' stock videos and also merge your audio.",
      url: "https://github.com/Ansh-Rathod/Flutter-Tiktok-Videos",
      image:
        "https://images.unsplash.com/photo-1551232865-e24823b9e922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      name: "Marvel Comic Web app",
      madeWith: "Python Flask",
      date: "12 december 2020",
      description:
        "Marvel's Super-hero comics and characters information made in python flask with marvel devloper api.",
      url: "https://github.com/Ansh-Rathod/marvel-api",
      image:
        "https://images.unsplash.com/photo-1568833450751-fba3c6b2d129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "SupHeroDb",
      madeWith: "Flutter",
      date: "12 august 2021",
      description:
        "Simple Superheros information app with animations and local database.",
      url: "https://github.com/Ansh-Rathod/Flutter-SuperHERO-app",
      image:
        "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "MovieDb",
      madeWith: "Flutter",
      date: "13 July 2021",
      description:
        "Find The Latest trending and upcoming movies and tv shows with MovieDB app.",
      url: "https://github.com/Ansh-Rathod/Flutter-Bloc-MovieDB-App",
      image:
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80",
    },
    {
      name: "Sponacular",
      madeWith: "Flutter",
      date: "25 May 2021",
      description:
        "A Recipe app with spoonacular API.App includes 5,0000+ recipes.cost breakdown per servings.",
      url: "https://github.com/Ansh-Rathod/Flutter-Bloc-Recipe-app",
      image:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "Quizer",
      madeWith: "Flutter",
      date: "12 jun 2021",
      description: "Quizer Open Trivia app with opentdb api.",
      url: "https://github.com/Ansh-Rathod/Flutter-Quizer-App",
      image:
        "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "Animalia",
      madeWith: "Flutter",
      date: "16 june 2021",
      description:
        "Discover cute, wild, and weird animals using the Animalia app.",
      url: "https://github.com/Ansh-Rathod/Flutter-bloc-Animalia",
      image:
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <Head>
        <meta property="og:title" content="Ansh Rathod's Blog" />
        <meta
          property="og:description"
          content="A Blog about flutter app development
And Web dev's resources."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
        <title>Ansh Rathod's Blog</title>
      </Head>

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <h5 className="navbar-brand p-0 m-0 text-light">
            Ansh Rathod's Blog
          </h5>
          <div className="row p-3">
            <a
              href="https://twitter.com/appiirathod"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square fa-2x text-light"></i>
            </a>
            <div style={{ width: "20px" }}></div>
            <a
              href="https://www.linkedin.com/in/ansh-rathod-478a81210/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x text-light"></i>
            </a>
            <div style={{ width: "20px" }}></div>

            <a
              href="https://github.com/Ansh-Rathod"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-2x text-light"></i>
            </a>
          </div>
        </div>
      </nav>
      <div className="main bg-primary">
        <div className="landing">
          <div
            style={{ minHeight: "70vh" }}
            className="container d-flex flex-column align-items-center text-center h-80 justify-content-center"
          >
            <h1 className="text-light mt-3">
              Ansh Rathod's <strong className="text-secondary">Blog</strong>
            </h1>

            <h3 className="text-light" style={{ maxWidth: "500px" }}>
              <small>
                Hey there, This is Ansh Rathod a Flutter and web developer. This
                site is a Blog about flutter development And Web dev's
                resources.
              </small>
            </h3>

            <br />

            <button className="btn btn-dark" onClick={executeScroll}>
              Let's Read
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light" ref={myRef}>
        <div className="container">
          <br />
          <br />
          <h1 className="text-center text-dark">Latest Blog Posts</h1>

          <p
            className="text-center mx-auto p-3 text-dark"
            style={{ maxWidth: "700px", fontSize: "1.5rem" }}
          >
            Find Out All Available Blog Post for flutter and web technologies.
          </p>
          <br />
          <br />
          <Blogs posts={posts} />
          <br />
          <br />
          <center>
            <button className="btn btn-dark mx-auto"> See All</button>
          </center>
          <br />
          <br />
        </div>
      </div>
      <div className="bg-grey">
        <div className="container">
          <br />
          <br />
          <h1 className="text-center text-light">Projects</h1>

          <p
            className="text-center mx-auto p-3"
            style={{ maxWidth: "700px", fontSize: "1.5rem" }}
          >
            I've worked with multiple technologies as a developer to develop &
            maintain my projects.
          </p>
          <br />
          <br />
          <div className="row">
            {projects.map((project) => (
              <PorjectCard project={project} key={project.name} />
            ))}
          </div>
          <br />
          <br />
        </div>

        <div className="bg-light">
          <div className="container">
            <br />
            <br />
            <h1>
              <h1 className="text-primary">Get In Touch</h1>
            </h1>

            <p className="text-dark" style={{ fontSize: "1.5rem" }}>
              To notify About upcoming blog post updates.
            </p>

            <div className="row p-3">
              <a
                href="https://twitter.com/appiirathod"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter-square fa-3x text-primary"></i>
              </a>
              <div style={{ width: "20px" }}></div>
              <a
                href="https://www.linkedin.com/in/ansh-rathod-478a81210/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin fa-3x text-primary"></i>
              </a>
              <div style={{ width: "20px" }}></div>

              <a
                href="https://github.com/Ansh-Rathod"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square fa-3x text-primary"></i>
              </a>
            </div>
            <hr />

            <div className="container text-center text-dark">
              &copy; 2021 Ansh Rathod's blog. All rights reserved.
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownMetaData = fs.readFileSync(path.join("posts", file));

    const { data: frontmatter } = matter(markdownMetaData);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
