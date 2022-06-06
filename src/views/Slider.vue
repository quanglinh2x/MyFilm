<template>
    <Swiper :grabCursor="true" :spaceBetween="0" :slidesPerView="1">
        <SwiperSlide
            v-for="item in slider"
            v-slot="{ isActive }"
            class="slider"
            :key="item.id"
            :style="{
                'background-image': `url(http://image.tmdb.org/t/p/original/${item.backdrop_path})`,
            }"
        >
            <div class="slider__item" :class="isActive ? 'active' : ''">
                <div class="slider__item-info">
                    <h2 class="title">{{ item.title }}</h2>
                    <p class="overview">{{ item.overview }}</p>
                    <div class="btns">
                        <router-link :to="'/movie/' + item.id" class="movie-link"
                            ><Button class="wrapper primary btn">Watch now</Button></router-link
                        >
                    </div>
                </div>
                <div class="slider__item-img">
                    <img :src="'http://image.tmdb.org/t/p/w500/' + item.poster_path" alt="" />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import store from '@/store';
import MyButton from './MyButton';
export default {
    components: {
        Swiper,
        SwiperSlide,
        MyButton,
    },

    created() {
        store.dispatch('getMovieSlider');
    },
    computed: {
        slider() {
            return store.state.movieslider;
        },
    },
};
</script>

<style lang="scss">
.slider {
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    height: 700px;
    padding: 100px 0;
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
    &__item {
        display: flex;
        height: 100%;
        &-info {
            width: 60%;
            padding: 0 100px;
            position: relative;
            .title {
                font-size: 30px;
                font-weight: 700;
                line-height: 1;
            }
            .overview {
                font-weight: 700;
            }
            .btns,
            .title,
            .overview {
                opacity: 0;
                transform: translateY(-100px);
                transition: transform 0.5s ease, opacity 0.5s ease;
            }
            .title {
                color: white;
                font-size: 2rem;
                font-weight: 700;
                line-height: 1;
            }
            .overview {
                margin-top: 30px;
                color: white;
            }
            .btns {
                margin-top: 30px;
            }
        }
        &-img {
            flex: 1 1;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            margin-left: 100px;
            margin-right: 100px;
            img {
                width: 310px;

                border-radius: 20px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
                transform: scale(0);
                transition: transform 0.7s ease;
            }
        }
    }
    &__item.active > &__item-info {
        .btns,
        .title,
        .overview {
            opacity: 1;
            transform: translateY(0);
        }

        .title {
            transition-delay: 0.3s, 0.3s;
        }

        .overview {
            transition-delay: 0.6s, 0.6s;
        }

        .btns {
            transition-delay: 0.9s, 0.9s;
        }
    }
    &__item.active > &__item-img {
        img {
            transform: scale(1);
        }
    }
}
</style>
