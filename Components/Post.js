export default function Post({ post }) {
	return (
		<div className="col col-sm-6 col-md-4 col-lg-3 mb-3">
			<div
				className="card shadow rounded"
				style={{ minHeight: '100%', border: '0' }}
			>
				<img
					src={post.frontmatter.cover_image}
					alt=""
					className="img-responsive"
				/>
				<div className="card-body">
					<p className="badge-primary badge">{post.frontmatter.date}</p>
					<br />

					<h5>{post.frontmatter.title}</h5>
					<br />
				</div>
				<div className="card-footer bg-primary">
					<a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">
						<div className="btn bg-success text-light">Read full</div>
					</a>
				</div>
			</div>
		</div>
	)
}
