<template>
    <div style="width:100vw;height: 100vh;background-color:peru;">
        <el-carousel :interval="4000" type="card" height="60vh">
            <el-carousel-item width="60vw" v-for="item in pic" :key="item">
                <p text="2xl" justify="center">{{ item.url }}<br>{{ item.text }}</p>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script setup>

const pic = [
    {
        url: "/wm/public/history1.png",
        text: 1
    },
    {
        url: "/public/nw1.png",
        text: 2
    },
    {
        url: "/public/history1.png",
        text: 3
    },
    {
        url: "/public/nw1.png",
        text: 4
    },
    {
        url: "/public/history1.png",
        text: 5
    },
    {
        url: "/public/nw1.png",
        text: 6
    }
];

</script>

<style lang="scss">
.el-carousel__container {
    margin-top: 20vh;
    margin-bottom: 20vh;
}

.el-carousel__item p {
    color: #1c2229;
    opacity: 0.75;
    line-height: 3vh;
    font-size: 2vh;
    height: 10vh;
    margin: 0;
    text-align: center;
    margin-top: 50vh;
    background-color: rgba($color: #fdfafa, $alpha: 0.6);

}

.el-carousel__item {
    left: -10%;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    -webkit-box-reflect: above 1vh linear-gradient(transparent, rgba(0, 0, 0, 0.2));
}

.el-carousel__item--card {
    width: 70%
}

.el-carousel__item:nth-child(1) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(2) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(3) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(4) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(5) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(6) {
    background-image: url('/public/history1.jpg');
    background-size: cover;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.el-carousel__indicators--horizontal {
    bottom: 20vh;
}
</style>