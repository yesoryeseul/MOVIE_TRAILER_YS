import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieApi } from "apis/MovieApi";
import { QUERYKEY } from "consts/querykey";

// 10페이지까지 무한 스크롤로 넘기기
export const useInfiniteScrollQuery = endpoint => {
	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		[QUERYKEY.MOVIE_LIST],
		({ pageParam = 1 }) =>
			MovieApi.getMovieList(endpoint, {
				page: pageParam,
			}),
		{
			getNextPageParam: (lastPage, pages) => {
				const currentPage = pages.length;
				return currentPage < 10 ? currentPage + 1 : undefined;
			},
		},
	);

	return {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	};
};
