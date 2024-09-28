<template>
  <div class="card_c">
    <div class="title">
      <h2 class="text-white">مشتریان درباره ما چه می‌گویند</h2>
    </div>
    <swiper
      id="swiper"
      v-if="list != []"
      :modules="modules"
      :slides-per-view="item"
      :space-between="20"
      :autoplay="{
        delay: 2500, // Delay between slides in milliseconds
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide id="aa">
        <div class="name">
          <span class="text-white">امیر</span>
        </div>
        <div class="text-right bg-[#6D4C41]">
          <v-rating class="mr-2 text-yellow" v-model="rating" readonly></v-rating>
        </div>
        <div class="desc">
          <span class="text-white"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            velit asperiores eos aut quos in aliquam quae saepe vitae architecto
            qui optio nemo minima, harum ad. Dolorem quas quisquam
            obcaecati.</span
          >
        </div>
      </swiper-slide>
      <swiper-slide id="aa">
        <div class="name">
          <span class="text-white">امیر</span>
        </div>
        <div class="text-right bg-[#6D4C41]">
          <v-rating class="mr-2 text-yellow" v-model="rating" readonly></v-rating>
        </div>
        <div class="desc">
          <span class="text-white"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            velit asperiores eos aut quos in aliquam quae saepe vitae architecto
            qui optio nemo minima, harum ad. Dolorem quas quisquam
            obcaecati.</span
          >
        </div>
      </swiper-slide>
      <swiper-slide id="aa">
        <div class="name">
          <span class="text-white">امیر</span>
        </div>
        <div class="text-right bg-[#6D4C41]">
          <v-rating class="mr-2 text-yellow" v-model="rating" readonly></v-rating>
        </div>
        <div class="desc">
          <span class="text-white"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            velit asperiores eos aut quos in aliquam quae saepe vitae architecto
            qui optio nemo minima, harum ad. Dolorem quas quisquam
            obcaecati.</span
          >
        </div>
      </swiper-slide>
      <swiper-slide id="aa">
        <div class="name">
          <span class="text-white">امیر</span>
        </div>
        <div class="text-right bg-[#6D4C41]">
          <v-rating class="mr-2 text-yellow" v-model="rating" readonly></v-rating>
        </div>
        <div class="desc">
          <span class="text-white"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            velit asperiores eos aut quos in aliquam quae saepe vitae architecto
            qui optio nemo minima, harum ad. Dolorem quas quisquam
            obcaecati.</span
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { ref, onMounted } from "vue";
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const item = ref(3);
    const rating = ref(3);
    const list = ref([]);
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    onMounted(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        list.value = response.data;
        console.log(list.value);
      });
      if (window.innerWidth > 320 && window.innerWidth < 500) {
        item.value = 1;
      } else if (window.innerWidth > 501 && window.innerWidth < 1000) {
        item.value = 2;
      } else {
        item.value = 3;
      }
    });

    return {
      rating,
      onSwiper,
      onSlideChange,
      list,
      item,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style src="../../assets/css/Home/slider.css"></style>
