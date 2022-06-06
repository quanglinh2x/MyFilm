export const GET_MOVIE_SLIDER = (state, movies) => {
    state.movieslider = movies;
};
export const GET_MOVIE_LIST = (state, payload) => {
    state.movielist = payload;
};
export const GET_MOVIE_LIST_COMING = (state, payload) => {
    state.movielistcoming = payload;
};
export const GET_ALL = (state, payload) => {
    state.all = payload.results;
    state.page = payload.page;
};
export const GET_MORE = (state, payload) => {
    state.more = payload.results;
};
