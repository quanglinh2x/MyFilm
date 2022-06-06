<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <h1><span>get</span>Movies</h1>
            </router-link>
        </div>
        <div class="route">
            <router-link to="/" class="nav home"><h2>Home</h2></router-link>
            <router-link to="/movie" class="movie-header nav"><h2>Movie</h2></router-link>
            <router-link to="/search" class="nav"><h2>Search</h2></router-link>
        </div>
    </header>
    <main>
        <router-view />
    </main>
</template>
<script></script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
}
:root {
    --primary-color: rgb(255, 145, 0);
    --white: #fff;
}
body {
    background-color: rgb(17, 17, 17);
}

a {
    text-decoration: none;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 100px;
    background-color: rgba(0, 0, 0, 1);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgb(3, 3, 48) 35%, rgb(1, 48, 57) 100%);

    .logo {
        h1 {
            color: #fff;
            font-size: 28px;

            span {
                color: var(--primary-color);
            }
        }
    }
    .route {
        .nav {
            padding: 10px;
        }
        display: flex;
        h2 {
            color: #fff;
            font-size: 20px;
        }
        .home,
        .movie-header {
            margin-right: 20px;
        }
    }
}
.nav {
    position: relative;
}
.nav:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 2px;
    background-color: var(--primary-color);
}
.nav.router-link-exact-active:after,
.nav:hover:after {
    width: 100%;
}
</style>
