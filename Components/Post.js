import Link from "next/link";
export default function Post({ post }) {
  return (
    <div className="blog-container">
      <p className="chip">{post.frontmatter.tags}</p>
      <br />
      <img
        src={post.frontmatter.cover_image}
        alt=""
        className="materialboxed img"
      />
      <div style={{ height: "16px" }}></div>

      <p className="date"> {post.frontmatter.date}</p>

      <div style={{ height: "10px" }}></div>

      <h4>{post.frontmatter.title}</h4>
      <div style={{ height: "10px" }}></div>

      <div style={{ height: "10px" }}></div>

      <Link href={`/blog/${post.slug}`} passHref>
        <p className="btn">Read more</p>
      </Link>
    </div>
  );
}
