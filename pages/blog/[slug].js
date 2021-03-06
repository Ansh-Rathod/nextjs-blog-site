import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={cover_image} />
      </Head>

      <div className="container" style={{ maxWidth: "768px" }}>
        <br />
        <br />
        <br />
        <h1>{title}</h1>
        <br />
        <div className="badge badge-primary">Posted on {date}</div>

        <br />
        <br />
        <img
          src={cover_image}
          alt="Image not Found"
          className="image-responsive"
          style={{ width: "100%" }}
        />
        <br />

        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <br />
        <div className="row p-3">
          <a
            href="https://twitter.com/appiirathod"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square fa-3x text-light"></i>
          </a>
          <div style={{ width: "20px" }}></div>
          <a
            href="https://www.linkedin.com/in/ansh-rathod-478a81210/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-3x text-light"></i>
          </a>
          <div style={{ width: "20px" }}></div>

          <a
            href="https://github.com/Ansh-Rathod"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square fa-3x text-light"></i>
          </a>
        </div>
        <br />
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownMetaData = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownMetaData);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
