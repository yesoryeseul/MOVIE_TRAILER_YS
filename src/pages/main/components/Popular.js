import MovieList from "components/movie-list";
import { useGetMovies } from "hooks/queries/use-query";
import styled from "styled-components";

const Popular = ({ changeLanguage, onChangeLanguage }) => {
	let popularMovie;
	// const getPopularMovie = useGetMovies.ListMovie("popular");
	const getPopularMovie = useGetMovies.ListMovie("popular", {}, changeLanguage);

	console.log("getPopularMovie", getPopularMovie);

	if (!getPopularMovie.data) popularMovie = [];
	else {
		popularMovie = getPopularMovie.data.data.results;
	}

	return (
		<div style={{ maxWidth: "1080px", margin: "0 auto" }}>
			<S.Title>홈</S.Title>
			<p style={{ marginBottom: "20px" }}>요즘 가장 인기있는 영화</p>
			<select value={changeLanguage} onChange={onChangeLanguage}>
				<option value="ko-KR">한국어</option>
				<option value="en-US">English</option>
			</select>
			<S.GridCotainer>
				{popularMovie && <MovieList movies={popularMovie} />}
			</S.GridCotainer>
		</div>
	);
};

export default Popular;

const GridCotainer = styled.div`
	width: 1080px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
`;

const Title = styled.p`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;

const S = {
	GridCotainer,
	Title,
};
