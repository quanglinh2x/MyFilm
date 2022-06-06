<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    props: {
        primary: {
            type: Boolean,
            default: () => false,
        },
        outline: {
            type: Boolean,
            default: () => false,
        },
        text: {
            type: String,
            default: () => '',
        },
        rounded: {
            type: Boolean,
            default: () => false,
        },
        small: {
            type: Boolean,
            default: () => false,
        },
        large: {
            type: Boolean,
            default: () => false,
        },
    },
};
</script>

<style lang="scss">
.wrapper {
    transition: box-shadow 0.3s ease;
    font-size: 1.6rem;
    font-weight: 700;
    min-width: 100px;
    padding: 9px 16px;
    border-radius: 4px;
    background-color: var(--white);
    // border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
}
.rounded {
    border-radius: 999px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    background-color: var(--primary-color);
    color: #fff;
    border-style: solid;
    opacity: 1;
    border-color: rgba(22, 24, 35, 0.12);
    font-size: 14px;
    &:hover {
        cursor: pointer;
        border-color: rgba(22, 24, 35, 0.2);
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
}
.primary {
    font-size: 20px;
    opacity: 1;
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
}
.outline {
    border-color: var(--primary-color);
    color: var(--primary-color);
    &:hover {
        border-color: var(--primary-color);
        background-color: rgba(254, 44, 85, 0.06);
    }
}
.small {
    min-width: 88px;
    padding: 4px 16px;
}
.large {
    min-width: 120px;
    padding: 14px 16px;
}
.text {
    color: #fff;
    background-color: transparent;
    font-size: 20px;
    border: 1px solid var(--primary-color);
    border-radius: 50px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
