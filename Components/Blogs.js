import Post from "./Post";

export default function Blogs({ posts }) {
  var newPosts = posts.slice(0, 4);
  return (
    <div className="row">
      {newPosts.map((post, index) => (
        <Post post={post} key={post.frontmatter.title} />
      ))}
    </div>
  );
}
