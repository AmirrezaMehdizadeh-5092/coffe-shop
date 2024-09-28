<template>
  <div class="card_c">
    <div class="title">
      <h2>مشتریان درباره ما چه می‌گویند</h2>
    </div>
    <div class="slide">
      <Carousel
        :slide-width="slideWidth"
        dir="rtl"
        v-bind="settings"
        :wrap-around="true"
        :breakpoints="breakpoints"
      >
        <Slide id="aa" v-for="slide in 5" :key="slide">
          <div class="carousel__item">
            {{ slide }}
          </div>
        </Slide>

        <template #addons>
          <Navigation style="margin: 0 25px" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    aa: "700px",
    list: null,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.list = response.data;
    });
  },
});
</script>

<style>
.card_c {
  background: #fff9c4d8;
  width: 100%;
}
.card_c .title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_c .title h2 {
  padding: 35px 0;
  color: #020d0f;
  line-height: 70px;
  font-size: 35px;
  padding-right: 50px;
  font-weight: 550;
}
.card_c .slide {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.carousel__item {
  width: 100%;
  background-color: rgb(191, 207, 191);
  height: 300px;
  margin: 25px 15px;
}
</style>
