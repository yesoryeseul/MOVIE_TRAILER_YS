import MovieList from "components/movie-list";
import { useGetMovies } from "hooks/queries/use-query";
import styled from "styled-components";

const Popular = () => {
	let popularMovie;
	const getPopularMovie = useGetMovies.ListMovie("popular");

	console.log("getPopularMovie", getPopularMovie);

	if (!getPopularMovie.data) popularMovie = [];
	else {
		popularMovie = getPopularMovie.data.data.results;
	}

	return (
		<div>
			<p>요즘 가장 인기있는 영화</p>
			<S.GridCotainer>
				{popularMovie && <MovieList movies={popularMovie} />}
			</S.GridCotainer>
		</div>
	);
};

export default Popular;

const GridCotainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
`;

const S = {
	GridCotainer,
};
