<template>
    <div class="footer" :style="{ 'background-image': 'url(' + image + ')' }">
        <div class="footer__content container">
            <div class="footer__content__logo">
                <div class="logo">
                    <router-link :to="'/'"
                        ><div class="logo-name">
                            <span>get</span>
                            <h2>Movies</h2>
                        </div></router-link
                    >
                </div>
            </div>
            <div class="footer__content__menus">
                <div class="footer__content__menu">
                    <router-link :to="'/'"><span>Home</span></router-link>
                    <router-link :to="'/'"><span>Contact us</span></router-link>
                    <router-link :to="'/'"><span>Term of services</span></router-link>
                    <router-link :to="'/'"><span>About us</span></router-link>
                </div>
                <div class="footer__content__menu">
                    <router-link :to="'/'"><span>Live</span></router-link>
                    <router-link :to="'/'"><span>FAQ</span></router-link>
                    <router-link :to="'/'"><span>Premium</span></router-link>
                    <router-link :to="'/'"><span>Pravacy policy</span></router-link>
                </div>
                <div class="footer__content__menu">
                    <router-link :to="'/'"><span>You must watch</span></router-link>
                    <router-link :to="'/'"><span>Recent release</span></router-link>
                    <router-link :to="'/'"><span>Top IMDB</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image from './footer.jpg';
export default {
    data() {
        return {
            image: image,
        };
    },
};
</script>

<style lang="scss">
.container {
    margin: auto;
}
.footer {
    color: #fff;
    margin-top: 100px;
    position: relative;
    padding: 6rem 2rem;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    &__content {
        max-width: 1000px;

        &__logo {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;
            .logo {
                .logo-name {
                    display: flex;
                    span {
                        color: var(--primary-color);
                        font-size: 40px;
                    }
                    h2 {
                        color: #fff;
                        font-size: 40px;
                    }
                }
            }
        }

        &__menus {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        &__menu {
            color: #fff;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
            span {
                color: #fff;
            }

            & > * ~ * {
                margin-top: 1rem;
            }
        }
    }
}
</style>
