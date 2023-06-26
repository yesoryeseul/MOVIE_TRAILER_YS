import OneMovie from "components/one-movie";

// movie-list
const MovieList = ({ movies }) => {
	return (
		<>
			{movies.map(movie => (
				<OneMovie movie={movie} />
			))}
		</>
	);
};

export default MovieList;
