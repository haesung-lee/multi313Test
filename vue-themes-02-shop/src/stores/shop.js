import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import axios from 'axios'

const clientId = 'sR7e9agRVrran0oy1CO1'; //애플리케이션 클라이언트 아이디
const clientSecret = 'MadPis5VIy';       //애플리케이션 클라이언트 시크릿
const apiURL = '/api';
const display = '100';
const shopDisplay = 12;
const pageListSize = 5;

export const useShopStore = defineStore('shop', () => {
    const productList = ref([]);
    const productCount = ref(0);
    const count = ref(0);
    const page = ref(1);
    const keyword = ref(null);
    const category = ref('');

    const init = async () => {
        const url = apiURL + '?query=' + '키보드' + '&display=' + display + '&start=1';
        const config = { headers: { 'X-Naver-Client-Id': clientId, 'X-Naver-Client-Secret': clientSecret }, withCredentials: true };
        const response = await axios.get(url, config);

        const url2 = apiURL + '?query=' + '마우스' + '&display=' + display + '&start=1';
        const config2 = { headers: { 'X-Naver-Client-Id': clientId, 'X-Naver-Client-Secret': clientSecret }, withCredentials: true };
        const response2 = await axios.get(url2, config2);

        let list = [...response.data.items, ...response2.data.items]
        list.sort(() => Math.random() - 0.5);
        productList.value = list;
        productCount.value = list.length;
    }
    init();

    const setKeyword = (_keyword) => {
        keyword.value = _keyword ?? '';
    }

    const setCategory = (_category) => {
        category.value = _category ?? [];
    }

    const setPage = (_page) => {
        page.value = _page ?? 1;
    }

    const shopList = computed(() => {
        // console.log('shopList!');
        // console.log(page.value);
        // console.log(keyword.value);
        let selectedList = productList.value.filter(item => {
            if (keyword.value.length > 0 && !item.title.includes(keyword.value)) {
                return false;
            }
            if (category.value.length > 0 && !item.category3.includes(category.value)) {
                return false;
            }
            return true;
        });
        count.value = selectedList.length;
        const start = shopDisplay * (page.value - 1);
        const end = shopDisplay * page.value;
        return selectedList.slice(start, end);
    });

    const getProduct= (id) =>{
        console.log(id);
        let obj = {};
        productList.value.forEach(item=>{
            if(item.productId == id){
                obj = item;
            }
        });
        return obj;
    }

    const maxPage = computed(() => {
        return Math.ceil(count.value / shopDisplay);
    });

    const startPage = computed(() => {
        return parseInt(((page.value -1) / pageListSize)) * pageListSize + 1;
    });

    const endPage = computed(() => {
        return parseInt(((page.value -1) / pageListSize)) * pageListSize + 1 + pageListSize;
    });

    const pageInfo = computed(() => {
        let list = [];
        const startPage = parseInt(((page.value -1) / pageListSize)) * pageListSize + 1;
        const endPage = startPage + pageListSize;
        // alert('startPage : ' + startPage + ', endPage : ' + endPage);
        for (let i = startPage; i < endPage; i++) {
            if (i > Math.ceil(count.value / shopDisplay)) { break }
            list.push(i);
        }
        return list;
    });

    return {
        productList, shopList, count,
        page, keyword, category, maxPage,
        setKeyword, setCategory, setPage, getProduct,
        startPage, endPage, pageInfo,
    }
});