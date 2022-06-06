<template>
    <div class="movie-page">
        <div class="movie-page__header" :style="{ 'background-image': 'url(' + image + ')' }">
            <div class="name">
                <h2>Movie List</h2>
            </div>
        </div>
        <div class="section">
            <div class="movie-grid">
                <div v-for="item in movies" :key="item.id">
                    <div
                        class="card"
                        :style="{
                            'background-image': `url(http://image.tmdb.org/t/p/original/${item.poster_path})`,
                        }"
                    >
                        <div class="btns">
                            <router-link :to="'/movie/' + item.id" class="movie-link"
                                ><MyButton class="wrapper rounded btn" :text="'Watch now'"></MyButton>
                            </router-link>
                        </div>
                    </div>

                    <h3>{{ item.title || item.name }}</h3>
                </div>
            </div>
        </div>
        <div class="loadmore" :class="selectedPage < 4 ? '' : 'hide'">
            <MyButton
                class="text wrapper"
                @click="selectedPage < 4 ? handleButton() : ''"
                :text="'Load More'"
            ></MyButton>
        </div>
        <MyFooter />
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
import MyFooter from './MyFooter.vue';
import store from '@/store';
import image from './footer.jpg';
import { mapState, mapActions } from 'vuex';
import axios from 'axios';
import env from '@/env.js';
export default {
    components: {
        MyButton,
        MyFooter,
    },
    data() {
        return {
            image: image,

            selectedPage: 2,
        };
    },
    created() {
        store.dispatch('getAll');
    },

    computed: {
        movies() {
            return store.state.all;
        },
        page() {
            return store.state.page;
        },
        ...mapState({
            all: 'all',
            page: 'page',
        }),
    },
    methods: {
        showMore: function () {
            this.selectedPage++;
        },
        handleButton: function () {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.apikey}&language=en-US&sort_by=created_at.asc&page=${this.selectedPage}`,
                )
                .then((response) => {
                    const data = response.data.results;

                    data.map((item) => {
                        this.movies.push(item);
                    });

                    this.showMore();

                    console.log(this.movies);
                });
        },
    },
};
</script>

<style lang="scss">
.hide {
    display: none;
}
.movie-page {
    &__header {
        padding: 8rem 0 2rem;
        text-align: center;
        margin-bottom: 2rem;
        position: relative;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        .name {
            display: flex;
            position: relative;
            z-index: 99;
            justify-content: center;

            h2 {
                color: white;
                font-size: 30px;
            }
        }
    }
    &__header :after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
    .section {
        padding: 20px 100px;
        .movie-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            grid-gap: 20px;
            gap: 20px;
            margin-bottom: 3rem;
            .card {
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                padding-top: 140%;
                border-radius: 30px;
                margin-bottom: 1rem;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: background-color 0.3s ease;
                }
                &:hover:before {
                    background-color: rgba(0, 0, 0, 0.65);
                }
                .btns {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: transform 0.3s ease;
                }

                &:hover .btns {
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            h3 {
                color: #fff;
                text-align: center;
                font-size: 14px;
                position: relative;
            }
        }
    }
    .loadmore {
        text-align: center;
    }
}
</style>
