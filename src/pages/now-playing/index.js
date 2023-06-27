import { useInfiniteScrollQuery } from "hooks/queries/use-infinite-query";
import useInfinityScrollHooks from "hooks/use-infinity-scroll";
import styled from "styled-components";
const NowPalying = () => {
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteScrollQuery("now_playing");

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
			<S.Title>현재 상영작</S.Title>
			{result.map(movie => (
				<div>{movie.title}</div>
			))}
			<div className="loader" ref={observerRef}>
				{isFetchingNextPage && hasNextPage ? "Loading..." : null}
			</div>
		</S.Container>
	);
};

export default NowPalying;

const Container = styled.div`
	padding: 3rem 40px;
`;

const Title = styled.p`
	font-size: 24px;
	font-weight: bold;
`;

const S = {
	Container,
	Title,
};
