import { axiosInstance } from "./@core";

export const MovieApi = {
	// /movie/endpoint
	getMovieList(endpoint, params, language) {
		return axiosInstance.get(`/movie/${endpoint}`, {
			params: { ...params, language },
		});
	},
	getInfinityMovieList(endpoint, params) {
		return axiosInstance.get(`/movie/${endpoint}`, {
			params,
		});
	},
};
