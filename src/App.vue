<script setup>
import { useRouter } from 'https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js';
const router = useRouter();
function drawshow() {
  document.getElementById("draw").style.display = "block";
}
function drawhide() {
  document.getElementById("draw").style.display = "none";
}

function itemClick(index) {
  drawhide()
  if(index == 0){
    router.push('/')
  }else if(index == 1){
    router.push('/record')
  }else{
    console.log(errorrrr)
  }
};
</script>

<template>
  <div>
    <button id="drawimage" @click="drawshow()">点击</button>
    <router-view></router-view>
    <div id="draw">
      <p @click="itemClick(0)">1</p>
      <p @click="itemClick(1)">2</p>
    </div>
  </div>
</template>

<style scoped>
#drawimage {
  position: absolute;
  z-index: 99998;
  left: 0;
  top: 0;
  width: 20vw;
  height: 5vh;
  background-color: bisque;
}

#draw {
  display: none;
  position: absolute;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 80vw;
  height: 100vh;
  background-color: #f3f3f3;
  color: #475669
}

#draw p {
  padding: 0;
  margin: 0;
  width: 80;
  background-color: violet;
  height: 10vh;
}
</style>
