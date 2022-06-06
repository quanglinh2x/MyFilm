<template>
    <div class="home">
        <div class="card">
            <router-link to="/">
                <div class="detail">
                    <Slider />
                </div>
            </router-link>
        </div>
        <div class="movies"><MovieList /></div>
        <MyFooter />
    </div>
</template>

<script>
import Slider from './Slider.vue';
import MyButton from './MyButton.vue';
import MovieList from './MovieList.vue';
import MyFooter from './MyFooter.vue';
export default {
    components: {
        Slider,
        MyButton,
        MovieList,
        MyFooter,
    },
};
</script>
<style lang="scss">
@import './home.scss';
</style>
