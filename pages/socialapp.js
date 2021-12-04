export default function socialapp({ data, type }) {
	if (type === 'up') {
		return (
			<div>
				<div className="container d-flex flex-column justify-content-center align-items-center">
					<br />
					<br />
					<br />
					<img
						src="blog_2/depositphotos_83057730-stock-illustration-p-letter-monogram-logo-removebg-preview.png"
						alt=""
						style={{ height: '70px', width: '70px', backgroundColor: '#000' }}
					/>
					<br />
					<h1>PHOTOARC</h1>
					<br />
					<div className="card" style={{ maxWidth: '300px' }}>
						<img
							className="card-img-top"
							src={data.results[0].avatar_url}
							alt="Card image cap"
							style={{ height: '300px', width: '300px' }}
						/>
						<div className="card-body">
							<h3>{data.results[0].name}</h3>
							<p>{data.results[0].bio}</p>
							<p>
								<b>{data.results[0].followers_count}</b> followers |{' '}
								<b>{data.results[0].following_count}</b> following
							</p>
							<b>To View full Profile Download App from below link.</b>
						</div>
					</div>
					<br />
					<p>
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app"
							target="_blank"
							className="btn btn-primary"
						>
							Go to Github
						</a>
						{'          '}
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app/releases/download/v1.0.0/app-armeabi-v7a-release.apk"
							className="btn btn-success text-dark"
						>
							Download Andorid app{' '}
						</a>
					</p>
					<br />
					<br />
					<br /> <br />
					<br />
					<br />
				</div>
			</div>
		)
	} else if (type === 'post') {
		return (
			<div>
				<div className="container d-flex flex-column justify-content-center align-items-center">
					<br />
					<br />
					<br />
					<img
						src="blog_2/depositphotos_83057730-stock-illustration-p-letter-monogram-logo-removebg-preview.png"
						alt=""
						style={{ height: '70px', width: '70px', backgroundColor: '#000' }}
					/>
					<br />
					<h1>PHOTOARC</h1>
					<br />
					<div className="card" style={{ maxWidth: '300px' }}>
						<div className="row " style={{ padding: '20px' }}>
							<img
								src={data.results[0].avatar_url}
								alt="profile page"
								style={{
									height: '50px',
									padding: '5px',
									width: '50px',
									objectFit: 'cover',
								}}
							/>
							<div style={{ paddingLeft: '10px' }}>
								post by {data.results[0].name}
								<br />
								{data.results[0].username}
							</div>
						</div>
						<img
							className="card-img-top"
							src={data.results[0].post_image_url}
							alt="Card image cap"
							style={{ height: '300px', width: '300px', objectFit: 'cover' }}
						/>
						<div className="card-body">
							<p>{data.results[0].caption}</p>
							<p>
								<b>{data.results[0].likes.length}</b> likes
							</p>
							<b>To comment and like Download App from below link.</b>
						</div>
					</div>
					<br />
					<p>
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app"
							target="_blank"
							className="btn btn-primary"
						>
							Go to Github
						</a>
						{'          '}
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app/releases/download/v1.0.0/app-armeabi-v7a-release.apk"
							className="btn btn-success text-dark"
						>
							Download Andorid app{' '}
						</a>
					</p>
					<br />
					<br />
					<br /> <br />
					<br />
					<br />
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<div
					className="container d-flex flex-column justify-content-center align-items-center"
					style={{ height: '100vh' }}
				>
					<img
						src="blog_2/depositphotos_83057730-stock-illustration-p-letter-monogram-logo-removebg-preview.png"
						alt=""
						style={{ height: '70px', width: '70px', backgroundColor: '#000' }}
					/>
					<br />
					<h1>PHOTOARC</h1>
					<div style={{ maxWidth: '300px' }}>
						<p align="center">
							(Full-stack) Fully functional social media app (Instagram clone)
							written in flutter and dart with backend node.js and Postgres SQL.
						</p>
					</div>
					<p>
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app"
							target="_blank"
							className="btn btn-primary"
						>
							Go to Github
						</a>
						{'          '}
						<a
							href="https://github.com/Ansh-Rathod/Flutter-Photoarc-app/releases/download/v1.0.0/app-armeabi-v7a-release.apk"
							className="btn btn-success text-dark"
						>
							Download Andorid app{' '}
						</a>
					</p>
				</div>
			</div>
		)
	}
}

export async function getServerSideProps({ query }) {
	const type = query.type
	console.log(query)
	if (type === 'up') {
		const userId = query.userId.replace(/\d/g, '').toLowerCase()

		const res = await fetch(
			`https://ancient-depths-01185.herokuapp.com/api/v1/user/${userId}`
		)
		const data = await res.json()
		console.log(data)
		return {
			props: {
				data,
				type,
			},
		}
	} else if (type === 'post') {
		const post_uid = query.post_user_id.replace(/\d/g, '').toLowerCase()
		const post_id = query.post_id
		const url =
			'https://ancient-depths-01185.herokuapp.com/api/v1/post/one_post/' +
			post_uid +
			'?post_id=' +
			post_id
		const res = await fetch(url)
		const data = await res.json()
		console.log(data)
		return {
			props: {
				data,
				type,
			},
		}
	}
	return {
		props: {
			type: 'un',
		},
	}
}
