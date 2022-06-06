<template>
    <div class="home">
        <div class="card">
            <router-link to="/">
                <div class="detail"></div>
            </router-link>
        </div>
        <form @submit.prevent="SearchMovies()" class="search">
            <input type="text" placeholder="What are you looking for?" v-model="search" />
            <input type="submit" value="Search" />
        </form>
        <div class="movies-list">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <router-link :to="'/movie/' + movie.id" class="movie-link">
                    <div class="product-image">
                        <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster" />
                    </div>
                    <div class="detail">
                        <p class="year">{{ movie.release_date }}</p>
                        <h3>{{ movie.title }}</h3>
                    </div>
                </router-link>
            </div>
        </div>

        <MyFooter />
    </div>
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js';
import Slider from './Slider.vue';
import MyButton from './MyButton.vue';

import MyFooter from './MyFooter.vue';
export default {
    components: {
        Slider,
        MyButton,

        MyFooter,
    },
    data() {
        const search = ref('');
        const movies = ref([]);
        const SearchMovies = () => {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&query=${search.value}&page=1&include_adult=false`,
            )
                .then((response) => response.json())
                .then((data) => {
                    movies.value = data.results;

                    search.value = '';
                });
        };

        return {
            search,
            movies,
            SearchMovies,
        };
    },
};
</script>

<style lang="scss">
.home {
    .card {
        position: relative;

        .img {
            display: block;
            width: 100%;
            height: 500px;
            object-fit: cover;

            position: relative;
            z-index: 0;
        }

        .detail {
        }
    }
    .search {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 100px;
        input {
            display: block;

            border: none;
            outline: none;
            background: none;

            &[type='text'] {
                width: 100%;
                color: #fff;
                background-color: var(--primary-color);
                font-size: 20px;
                padding: 10px 16px;
                border-radius: 8px;
                margin-bottom: 15px;
                transition: 0.4s;

                &::placeholder {
                    color: #f3f3f3;
                }

                &:focus {
                    box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
                }
            }

            &[type='submit'] {
                width: 100%;
                max-width: 300px;
                background-color: #42b883;
                padding: 16px;
                border-radius: 8px;
                color: #fff;
                font-size: 20px;
                text-transform: uppercase;
                transition: 0.4s;
                &:hover {
                    opacity: 0.6;
                    transition: opacity ease-in 0.2s;
                    cursor: pointer;
                }
                &:active {
                    background-color: #3b8070;
                }
            }
        }
    }
    .movies-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 100px;

        .movie {
            max-width: 33.33333%;
            flex: 1 1 33.33333%;
            padding: 16px 8px;

            .movie-link {
                display: flex;
                border-radius: 50px;
                flex-direction: column;
                height: 100%;

                .product-image {
                    position: relative;
                    display: block;

                    img {
                        border-top-left-radius: 20px;
                        border-top-right-radius: 20px;
                        display: block;
                        width: 100%;
                        height: 275px;
                        object-fit: cover;
                    }

                    .type {
                        position: absolute;
                        padding: 8px 16px;
                        background-color: #42b883;
                        color: #fff;
                        bottom: 16px;
                        left: 0px;
                        text-transform: capitalize;
                    }
                }

                .detail {
                    background-color: var(--primary-color);
                    padding: 16px 8px;
                    flex: 1 1 100%;
                    border-radius: 0px 0px 20px 20px;

                    .year {
                        color: #aaa;
                        font-size: 14px;
                    }

                    h3 {
                        color: #fff;
                        font-weight: 600;
                        font-size: 18px;
                    }
                }
            }
        }
    }
}
</style>
