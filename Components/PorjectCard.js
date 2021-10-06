export default function PorjectCard({ project }) {
  return (
    <div className="col col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <img
          src={project.image}
          alt=""
          className="img-responsive"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="badge badge-primary">{project.date}</p>

          <h5>{project.name + " - " + project.madeWith}</h5>

          <p>{project.description}</p>
        </div>
        <div className="card-footer bg-primary">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            Visit Github
          </a>
        </div>
      </div>
    </div>
  );
}
