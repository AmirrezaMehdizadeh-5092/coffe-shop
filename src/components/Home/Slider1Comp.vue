<template>
  <Carousel :autoplay="2250" :wrap-around="true">
    <Slide v-for="slide in 2" :key="slide">
      <div v-if="slide == 1" id="hd1">
        <img src="../../assets/img/carousel_1.jpg" alt="" />
        <div class="header2">
          <div class="h21">
            <span>خوش آمدید به</span>
          </div>
          <div class="h22">
            <span>کافه </span>
          </div>
          <div class="h23">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repellendus quasi quae qui accusantium, voluptatibus magnam
              reiciendis laborum explicabo voluptas, laboriosam vitae quia
              doloremque placeat similique beatae provident? Placeat,
              laudantium!loading Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cupiditate, deserunt voluptatibus dignissimos
              laudantium ex quidem, aperiam nesciunt, voluptates labore
              architecto hic placeat? Optio dolores similique totam deserunt
              repellendus, architecto quisquam.
            </p>
          </div>
          <div class="h24">
            <div class="h24_1" @click="GoToMenu()">منو</div>
            <span
              ><a style="color: white" href="#about" v-smooth-scroll
                >درباره ما</a
              ></span
            >
          </div>
        </div>
      </div>
      <div v-else id="hd1">
        <img src="../../assets/img/carousel_2.jpg" alt="" />
        <div class="header2">
          <div class="h21">
            <span>خوش آمدید به</span>
          </div>
          <div class="h22">
            <span>کافه </span>
          </div>
          <div class="h23">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repellendus quasi quae qui accusantium, voluptatibus magnam
              reiciendis laborum explicabo voluptas, laboriosam vitae quia
              doloremque placeat similique beatae provident? Placeat,
              laudantium!loading Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cupiditate, deserunt voluptatibus dignissimos
              laudantium ex quidem, aperiam nesciunt, voluptates labore
              architecto hic placeat? Optio dolores similique totam deserunt
              repellendus, architecto quisquam.
            </p>
          </div>
          <div class="h24">
            <div class="h24_1" @click="GoToMenu()">منو</div>
            <span
              ><a style="color: white" href="#about" v-smooth-scroll
                >درباره ما</a
              ></span
            >
          </div>
        </div>
      </div>
    </Slide>
    <template #addons> </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import router from "../../plugin/router";

export default {
  name: "Slider1Comp",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const GoToMenu = () => {
      router.push("/menu");
    };
    return {
      GoToMenu,
    };
  },
};
</script>

<style src="../../assets/css/Header.css"></style>
