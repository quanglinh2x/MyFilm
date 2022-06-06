import env from '@/env.js';
import axios from 'axios';
export const getMovieSlider = (context) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${env.apikey}&language=en-US`).then((response) => {
        context.commit('GET_MOVIE_SLIDER', response.data.results.slice(0, 4));
        const data = response.data.results.slice(0, 4);
        return data;
    });
};
export const getMovieList = (context) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${env.apikey}&language=en-US`).then((response) => {
        context.commit('GET_MOVIE_LIST', response.data.results);
        const data = response.data.results;

        return data;
    });
};
export const getMovieListComing = (context) => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${env.apikey}&language=en-US`).then((response) => {
        context.commit('GET_MOVIE_LIST_COMING', response.data.results);
        const data = response.data.results;

        return data;
    });
};
export const getAll = (context) => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.apikey}&language=en-US&sort_by=created_at.asc&page=${context.state.page}`,
        )
        .then((response) => {
            context.commit('GET_ALL', response.data);
            const data = response.data;

            return data;
        });
};
export const getMore = (context) => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${
                env.apikey
            }&language=en-US&sort_by=created_at.asc&page=${context.state.page + 1}`,
        )
        .then((response) => {
            context.commit('GET_MORE', response.data);
            const data = response.data;

            return data;
        });
};
