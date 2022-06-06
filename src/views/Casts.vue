<template>
    <div class="casts">
        <div class="casts__header"><h2>Casts</h2></div>
        <div class="casts-list">
            <div v-for="cast in casts" :key="cast.id" class="casts-list-item">
                <div class="casts-list-item__info">
                    <div
                        class="casts-list-item__info__img"
                        :style="{
                            'background-image': `url(http://image.tmdb.org/t/p/w500/${cast.profile_path})`,
                        }"
                        alt="Movie Poster"
                    ></div>

                    <p class="casts-list__name">{{ cast.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
export default {
    setup() {
        const casts = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${env.apikey}&language=en-US`)
                .then((response) => response.json())
                .then((data) => {
                    casts.value = data.cast.slice(0, 5);
                });
        });

        return {
            casts,
        };
    },
};
</script>

<style lang="scss">
.casts {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        grid-gap: 10px;
        gap: 10px;
        margin-bottom: 20px;
        &-item {
            &__info {
                &__img {
                    padding-top: 160px;
                    background-size: cover;
                    margin-bottom: 0.5rem;
                }
            }
        }
        &__name {
            font-size: 10px;
        }
    }
}
</style>
