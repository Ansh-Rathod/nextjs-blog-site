import Link from "next/link";
export default function Post({ post }) {
  return (
    <div className="blog-container">
      <br />
      <img
        src={post.frontmatter.cover_image}
        alt=""
        className="materialboxed img"
      />
      <div style={{ height: "20px" }}></div>

      <p className="date"> {post.frontmatter.date}</p>

      <div style={{ height: "20px" }}></div>

      <h4>{post.frontmatter.title}</h4>
      <div style={{ height: "10px" }}></div>

      <div style={{ height: "10px" }}></div>

      <a href={`/blog/${post.slug}`} passHref target="_blank" rel="noreferrer">
        <p className="btn">Read more</p>
      </a>
    </div>
  );
}
