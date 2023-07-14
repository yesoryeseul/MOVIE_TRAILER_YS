import { useQuery } from "@tanstack/react-query";
import { MovieApi } from "apis/MovieApi";
import { QUERYKEY } from "consts/querykey";

export const useGetMovies = {
	ListMovie: (endpoint, params, language) => {
		return useQuery([QUERYKEY.MOVIE_LIST, language], () =>
			MovieApi.getMovieList(endpoint, params, language),
		);
	},
};
