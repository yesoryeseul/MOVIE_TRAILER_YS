// oneMovie
const OneMovie = ({ movie }) => {
	const imgUrl = "https://image.tmdb.org/t/p/w200";
	return (
		<div>
			{movie.poster_path ? (
				<img src={`${imgUrl}${movie.poster_path}`} />
			) : (
				<p>no image</p>
			)}
		</div>
	);
};

export default OneMovie;
