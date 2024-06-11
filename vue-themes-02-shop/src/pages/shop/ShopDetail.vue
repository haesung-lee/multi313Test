<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useShopStore } from '@/stores/shop.js'
import { storeToRefs } from 'pinia'
import { ref } from "vue";

const shopStore = useShopStore();
const route = useRoute()
const router = useRouter();
const { getProduct  } = shopStore;
const obj = getProduct(route.params.id);
console.log(obj);
const product = ref(obj);
</script>
<template>

  <div class="container">
    <h2>Shop Detail!!!</h2>
    productId : <span v-html="product.productId"></span><br>
    title : <span v-html="product.title"></span><br>
    brand : <span v-html="product.brand"></span><br>
    maker : <span v-html="product.maker"></span><br>
    category1 : <span v-html="product.category1"></span><br>
    category2 : <span v-html="product.category2"></span><br>
    category3 : <span v-html="product.category3"></span><br>
    category4 : <span v-html="product.category4"></span><br>
    lprice : <span v-html="product.lprice"></span><br>
    link : <a target="_blank" :href="product.link">{{product.link}}</a><br>
    image : <img :src="product.image"><br>


  </div>

</template>