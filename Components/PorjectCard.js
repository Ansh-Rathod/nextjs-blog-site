export default function PorjectCard({ project }) {
  return (
    <div className="blog-container">
      <img src={project.image} alt="" className="materialboxed img" />
      <div style={{ height: "16px" }}></div>

      <p className="date">{project.date}</p>
      <div style={{ height: "10px" }}></div>

      <h4>{project.name + " - " + project.madeWith}</h4>
      <div style={{ height: "10px" }}></div>

      <p>{project.description}</p>
      <div style={{ height: "10px" }}></div>

      <a href={project.url} target="_blank" className="btn btn-primary">
        Visit Github
      </a>
    </div>
  );
}
