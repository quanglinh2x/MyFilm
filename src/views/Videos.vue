<template>
    <div class="videos">
        <div class="videos__item" v-for="video in videos" :key="video.id">
            <div class="videos__item-name">{{ video.name }}</div>
            <iframe
                class="videos__item-video"
                :src="'https://www.youtube.com/embed/' + video.key"
                width="100%"
            ></iframe>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
export default {
    name: 'Videos',
    setup() {
        const videos = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=${env.apikey}&language=en-US`)
                .then((response) => response.json())
                .then((data) => {
                    videos.value = data.results.slice(0, 4);
                    console.log(videos.value);
                });
        });

        return {
            videos,
        };
    },
};
</script>

<style lang="scss">
.videos {
    margin-top: 20px;
    padding: 0 2rem;
    &__item {
        margin-bottom: 20px;
        &-name {
            margin-bottom: 20px;
            color: #fff;
        }
        &-video {
            border: 0;
            height: 500px;
        }
    }
}
</style>
