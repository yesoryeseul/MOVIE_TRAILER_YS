import { useQuery } from "@tanstack/react-query";
import { MovieApi } from "apis/MovieApi";
import { QUERYKEY } from "consts/querykey";

export const useGetMovies = {
	ListMovie: endpoint => {
		return useQuery([QUERYKEY.MOVIE_LIST], () =>
			MovieApi.getMovieList(endpoint),
		);
	},
};
