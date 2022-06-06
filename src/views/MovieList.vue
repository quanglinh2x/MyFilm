<template>
    <div class="toprate">
        <div class="head">
            <h1>Top Rate</h1>

            <router-link :to="'/movie/'"> <MyButton class="wrapper text" :text="'View More'"></MyButton> </router-link>
        </div>
        <div class="movie-toprate">
            <Swiper :grabCursor="true" :spaceBetween="10" :slidesPerView="'auto'">
                <SwiperSlide v-for="item in list" class="movie-item" :key="item.id"
                    ><div
                        class="card"
                        :style="{
                            'background-image': `url(http://image.tmdb.org/t/p/original/${item.poster_path})`,
                        }"
                    >
                        <div class="btns">
                            <router-link :to="'/movie/' + item.id" class="movie-link"
                                ><Mybutton class="wrapper rounded btn">Watch now</Mybutton>
                            </router-link>
                        </div>
                    </div>
                    <h3 class="title">{{ item.title || item.name }}</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <div class="toprate">
        <div class="head">
            <h1>Up Coming</h1>
            <router-link :to="'/movie/'"> <MyButton class="wrapper text" :text="'View More'"></MyButton> </router-link>
        </div>
        <div class="movie-toprate">
            <Swiper :grabCursor="true" :spaceBetween="10" :slidesPerView="'auto'">
                <SwiperSlide v-for="item in listComing" class="movie-item" :key="item.id"
                    ><div
                        class="card"
                        :style="{
                            'background-image': `url(http://image.tmdb.org/t/p/original/${item.poster_path})`,
                        }"
                    >
                        <div class="btns">
                            <router-link :to="'/movie/' + item.id" class="movie-link"
                                ><Mybutton class="wrapper rounded btn">Watch now</Mybutton></router-link
                            >
                        </div>
                    </div>
                    <h3 class="title">{{ item.title || item.name }}</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import store from '@/store';
import MyButton from './MyButton.vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
        MyButton,
    },
    created() {
        store.dispatch('getMovieList');
        store.dispatch('getMovieListComing');
    },
    computed: {
        list() {
            return store.state.movielist;
        },
        listComing() {
            return store.state.movielistcoming;
        },
    },
};
</script>

<style lang="scss">
.head {
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    color: #fff;
    h1 {
        font-size: 24px;
    }
}
.movie-toprate {
    position: relative;
    padding: 0 100px;
    .movie-item {
        width: 20% !important;
    }
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
</style>
