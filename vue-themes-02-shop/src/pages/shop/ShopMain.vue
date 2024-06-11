<script setup>
import { onMounted, ref, onUpdated } from "vue";

//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";

// example component
import SimpleBookingCard from "./Components/SimpleBookingCard.vue";

//Vue Material Kit 2 Pro components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

import { useRoute, useRouter } from 'vue-router'
import { useShopStore } from '@/stores/shop.js'
import { storeToRefs } from 'pinia'

const shopStore = useShopStore();
const { setKeyword, setCategory, setPage } = shopStore;
const { page, keyword, category, shopList, startPage, maxPage, endPage, pageInfo } = storeToRefs(shopStore);

const route = useRoute()
const router = useRouter();
console.log('route.query');
console.log(route.query);
// url query로 부터 page 정보를 가져오는 방법

setPage(route.query.page ? Number(route.query.page) : 1);
setKeyword(route.query.keyword ?? '');
setCategory(route.query.category ?? '');

const routeUpdate = () => {
  router.replace({
    path: route.path,
    query: {
      'page': page.value ?? 1,
      'keyword': keyword.value ?? '',
      'category': category.value ?? '',
    }
  });
}

const update = (e) => {
  setKeyword(document.getElementById('keywordInput').value);
  routeUpdate();
}

const movePage = (page) => {
  if (page < 1 || page > maxPage.value) {
    alert('페이지를 이동할수 없습니다.');
    return;
  }
  setPage(page);
  update();
}
</script>

<template>
  <div class="container">
    <div class="row border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
      <div class="col-lg-5 mt-lg-n2 mt-2">
        <label class="ms-0">제품 카테고리</label>
        <select @change="update" class="form-select form-select-sm" id="choices-button" v-model="category">
          <option value="">전체</option>
          <option value="키보드">키보드</option>
          <option value="마우스">마우스</option>
        </select>
      </div>
      <div class="col-lg-5 mt-lg-n2 mt-2">
        <label class="ms-0">키워드</label>
        <MaterialInput @keyup.enter="update" id="keywordInput" class="input-group-dynamic" :value="keyword" type="text"
          icon="search" placeholder="Search" />
      </div>
      <div class="col-lg-2 mt-lg-n2 mt-2">
        <label>&nbsp;</label>
        <MaterialButton @click="update" variant="gradient" color="success" fullWidth>Search</MaterialButton>
      </div>
    </div>
  </div>

  <section class="pb-0">
    <div class="container">
      <div class="row">
        <div v-for="item in shopList" key="item.productId" class="col-lg-4 col-md-6">
          <SimpleBookingCard class="mt-5" :image="item.image" :categories="item.category3 + ' - ' + item.category4"
            :title="item.title" :description="'가격 : ' + item.lprice + '원'"
            :route="'/shop/' + item.productId"
            />
        </div>
        <div class="col-sm-12 ms-auto text-end">
          <MaterialPagination class="mt-4">
            <MaterialPaginationItem prev @click="movePage(startPage - 1)" class="ms-auto" />
            <span v-for="item in pageInfo">
              <MaterialPaginationItem v-if="item == page" active :label="item" @click="movePage(item)" />
              <MaterialPaginationItem v-else :label="item" @click="movePage(item)" />
            </span>
            <MaterialPaginationItem next @click="movePage(endPage)" />
          </MaterialPagination>
        </div>
      </div>
    </div>
  </section>
</template>
