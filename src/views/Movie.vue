<template>
    <div class="movie-detail">
        <p>{{ movie.Year }}</p>
        <div class="movie-item">
            <div
                class="movie-item__img"
                :style="{
                    'background-image': `url(http://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                }"
                alt="Movie Poster"
            ></div>
        </div>
        <div class="category">
            <h2 class="category__title">{{ movie.title }}</h2>
            <div class="category__genre">
                <div class="category__genre-item" v-for="genre in movie.genres" :key="genre.id">
                    {{ genre.name }}
                </div>
            </div>
            <p class="category__overview">{{ movie.overview }}</p>
            <Casts />
        </div>
    </div>
    <div class="container">
        <div class="section mb-3">
            <Videos />
        </div>
    </div>
    <MyFooter />
</template>

<script>
import MyFooter from './MyFooter';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
import Casts from './Casts.vue';
import Videos from './Videos.vue';
export default {
    components: { Casts, Videos, MyFooter },
    setup() {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US`)
                .then((response) => response.json())
                .then((data) => {
                    movie.value = data;
                });
        });

        return {
            movie,
        };
    },
};
</script>

<style lang="scss">
.movie-detail {
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    position: relative;
    padding: 0 2rem;
    .movie-item {
        flex: 1 1;
        &__img {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 30px;
            width: 100%;
            padding-top: 130%;
        }
    }
    .category {
        width: 70%;
        padding-left: 2rem;
        position: relative;
        &__title {
            font-size: 1.6rem;
            line-height: 1;
            margin-bottom: 20px;
        }
        &__genre {
            display: flex;
            margin-bottom: 20px;
            &-item {
                padding: 0.5rem 1.5rem;
                border: 2px solid #fff;
                border-radius: 30px;
                font-size: 0.8rem;
                font-weight: 600;
                background-color: #0f0f0f;
            }
            &-item + &-item {
                margin-left: 10px;
            }
        }
        &__genre > * ~ * {
            margin-left: 0.5rem;
        }
        &__overview {
            margin-bottom: 20px;
            font-size: 16px;
        }
    }
}
</style>
