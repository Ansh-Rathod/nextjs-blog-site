import Post from "./Post";

export default function Blogs({ posts }) {
  return (
    <div className="row-element">
      {posts.map((post, index) => (
        <Post post={post} key={post.frontmatter.title} />
      ))}
    </div>
  );
}
