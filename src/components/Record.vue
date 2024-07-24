<template>
    <div>
        <div class="list0"
            style="position: absolute;height: 100vh;width:100vw;top:0;left:0;z-index: 1;overflow-x: auto;">
            <img class="listimg1" src="/public/history1.jpg" style="height: 100vh;width:150vw;">
        </div>
        <div class="list1"
            style="position: absolute;height: 20vh;width:100vw;top:0;left:0;z-index: 2; background-color: black;opacity: 0.8;">
        </div>
        <img @click="change0" class="listicon" src="/public/MGL-R4.png" style="left:0">
        <img @click="change1" class="listicon" src="/public/MGL-R4.png" style="left:20vw">
        <img @click="change2" class="listicon" src="/public/MGL-R4.png" style="left:40vw">
        <img @click="change3" class="listicon" src="/public/MGL-R4.png" style="left:60vw">
        <img @click="change4" class="listicon" src="/public/MGL-R4.png" style="left:80vw">
        <div class="list2" style="position: absolute;height: 30vh;width:100vw;top:20vh;left:0;z-index: 0;">
        </div>
        <div class="list3"
            style="position: absolute;height: 50vh;width:100vw;top:50vh;left:0;z-index: 2;background-color: black;opacity: 0.8;">
        </div>
        <div class="list30" style="position: absolute;height: 50vh;width:100vw;top:50vh;left:0;z-index: 3;">
            <p style="font-size: 3vh;padding-top: 10vh;text-align: end;font-family: SimSun;color: white;">
                {{ historyName[icon] }}</p>
            <pre
                style="font-size: 2vh;padding-top: 5vh;text-align: end;font-family: SimSun;color: white;line-height: 3vh;">{{ "\“ " + historyContainer[icon] + "\”" }} </pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const historyName = ref(["《淮南子·览冥训》", "《列子·汤问》", "《论衡·谈天篇》", "《三皇本纪》", "《天外来客---陨石收藏录》"]);
const historyContainer = ref(["于是女娲炼五色石以补苍天，断鳌足以立四极，\n杀黑龙以济冀州，积芦灰以止淫水。", "物有不足，故昔者女娲氏炼五色石以补其阙；\n断鳌之足以立四极。", "女娲炼五色石以补苍天，断鳌足以立四极。", "诸侯有共工氏，任智刑以强，\n霸而不王，以水乘木，乃与祝融战，不胜而怒，\n乃头触不周山崩，天柱折，地维缺。", "幸得女娲补天于高山之巅，\n羲和浴日于东海之滨，救得万众生灵。"]);
const anime1 = ref(false);
var icon = ref(0);

function change0() {
    icon.value = 0;
}
function change1() {
    icon.value = 1;
}
function change2() {
    icon.value = 2;
}
function change3() {
    icon.value = 3;
}
function change4() {
    icon.value = 4;
}
setTimeout(() => {
    anime1.value = true;
}, 3000);
</script>

<style scoped>
.listimg1 {
    animation: slidein 20s 0s infinite;
}

@keyframes slidein {
    0% {
        transform: translateX(0%);
    }

    50% {
        transform: translateX(-30%);
    }

    100% {
        transform: translateX(0%);
    }
}

.listicon {
    position: absolute;
    width: 8vw;
    padding: 0 6vw;
    top: 10vh;
    z-index: 3;
}
</style>