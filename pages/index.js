import Head from "next/head";
import Blogs from "../Components/Blogs";
import PorjectCard from "../Components/PorjectCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useEffect } from "react";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}

export default function Home({ posts }) {
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
  ];

  useEffect(() => {
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content="Ansh Rathod's Blog" />
        <meta
          property="og:description"
          content="A Blog about flutter development
And Web dev's resources."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
        <title>Ansh Rathod's Blog</title>
      </Head>

      <div className="scroll-container">
        <div className="navabr-slide">
          {/* <ul id="slide-out" className="sidenav">
            <li />
            <li>
              <a href="#!"></a>
            </li>
            <li>
              <a href="#!">Second Link</a>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Subheader</a>
            </li>
            <li>
              <a className="waves-effect" href="#!">
                Third Link With Waves
              </a>
            </li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i class="fas fa-bars fa-2x"></i>
          </a> */}
        </div>
        <section>
          <div className="Background">
            <div className="overlay">
              <div className="container center-tag">
                <div className="color-back">
                  <h2>Ansh Rathod's Blog</h2>
                </div>

                <br />

                <h1>
                  A BLog about flutter development
                  <br />
                  And Web dev's resources.
                </h1>
                <br />

                <a href="#" className="waves-effect waves-light btn btn-large">
                  See All
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Background">
            <div className="overlay">
              <div className="container center-tag">
                <div className="color-back" style={{ margin: "10px" }}>
                  <h2>Latest Blogs</h2>
                </div>
                <Blogs posts={posts} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Background">
            <div className="overlay">
              <div className="container center-tag">
                <div className="color-back" style={{ margin: "10px" }}>
                  <h2>My Projects</h2>
                </div>
                <div className="row-element">
                  {projects.map((project) => (
                    <PorjectCard project={project} key={project.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Background">
            <div className="overlay">
              <div className="container center-tag">
                <div className="color-back">
                  <h2>Get In Touch</h2>
                </div>

                <br />

                <h1>
                  Notify for every blogs, projects and resources that will help
                  to development make easy.
                </h1>
                <br />
                <div className="raw">
                  <a href="https://twitter.com/appiirathod" target="_blank">
                    <i className="fab fa-twitter-square fa-3x"></i>
                  </a>
                  <div style={{ width: "20px" }}></div>
                  <a
                    href="https://www.linkedin.com/in/ansh-rathod-478a81210/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                  <div style={{ width: "20px" }}></div>

                  <a href="https://github.com/Ansh-Rathod" target="_blank">
                    <i className="fab fa-github-square fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
