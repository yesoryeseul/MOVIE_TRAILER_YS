import MovieList from "components/movie-list";
import { useInfiniteScrollQuery } from "hooks/queries/use-infinite-query";
import useInfinityScrollHooks from "hooks/use-infinity-scroll";
import styled from "styled-components";

const MovieInfinity = ({ endpoint, title }) => {
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteScrollQuery(endpoint);

	const { observerRef } = useInfinityScrollHooks(fetchNextPage, hasNextPage);

	if (!data || !data.pages) return null;
	const result = data.pages.flatMap(page => page.data.results);
	console.log(result);

	if (isLoading) {
		return null;
	}

	if (typeof data === "undefined") return <div>로딩중</div>;

	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.GridCotainer>
				<MovieList movies={result} />
			</S.GridCotainer>
			<div className="loader" ref={observerRef}>
				{isFetchingNextPage && hasNextPage ? "Loading..." : null}
			</div>
		</S.Container>
	);
};

export default MovieInfinity;

const Container = styled.div`
	margin: 0 auto;
	padding-top: 60px;
	padding-left: 254px;
`;

const Title = styled.p`
	font-size: 24px;
	font-weight: bold;
	margin: 60px 0 30px 0;
`;

const GridCotainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
`;

const S = {
	Container,
	Title,
	GridCotainer,
};
