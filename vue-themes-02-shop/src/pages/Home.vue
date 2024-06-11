<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";

//typed.js
import Typed from "typed.js";

//hook
onMounted(() => {
  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});
import { useShopStore } from '@/stores/shop.js'
import { storeToRefs } from 'pinia'
const shopStore = useShopStore();

</script>
<template>
  <header class="position-relative">
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div
      class="page-header min-vh-100"
      style="background-image: url('/src/assets/img/bg9.jpg')"
      loading="lazy"
    >
      <span class="mask bg-gradient-info opacity-4"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center mx-auto">
            <h1 class="text-white">
              키보드 마우스 전문몰!<br>
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>게이밍 마우스</h1>
              <h1>사무용 키보드 마우스</h1>
              <h1>개발자용 커스텀 키보드!</h1>
            </div>
            <p class="lead text-white text-center pe-5 mt-4">
              키보드 마우스 샵은 친환경 제품을 취급합니다.<br> 
              친환경 제품을 사지 않으면 북극곰이 힘들어 합니다..<br>
              근데 요새 북극곰 개체수가 늘었다네요. 어찌된건지는 잘.. <br> 
            </p>
            <br />
            <div class="buttons text-center">
            <MaterialButton color="white">환불 안됩니다.</MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>