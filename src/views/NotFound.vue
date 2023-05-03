<template>
    <div class="PageNotFound text-center row align-items-center">
        <div class="PageNotFoundText display-1">
            <p>404</p>
            <p>Page Not Found</p>
            <button class="btn"
            @click.prevent="$router.push('/')">回到 INFINITY FLOWERS 首頁</button>
        </div>
    </div>
</template>

<style>
.PageNotFound{
    height: calc(100vh);
    background: url(@/assets/images/PageNotFound.jpg)no-repeat center / cover;
    color:#4F332D;
    background-position:center;
    text-transform: uppercase;
}
.PageNotFoundText{
    font-weight: 700;
}
.PageNotFound button{
    background-color: rgb(231, 152, 152);
}
</style>
