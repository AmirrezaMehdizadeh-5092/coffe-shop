<template>
  <div id="home" dir="ltr">
    <HeaderComp></HeaderComp>
    <Slider1Comp></Slider1Comp>
    <CardComp></CardComp>
    <AboutHomeComp></AboutHomeComp>
    <Slider2Comp></Slider2Comp>
    <ClubComp></ClubComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import AboutHomeComp from "./Home/AboutHomeComp.vue";
import Slider2Comp from "./Home/Slider2Comp.vue";
import ClubComp from "./Home/ClubComp.vue";
import CardComp from "./Home/CardComp.vue";
import Slider1Comp from "./Home/Slider1Comp.vue";

export default {
  name: "HomeComp",
  components: {
    HeaderComp,
    FooterComp,
    AboutHomeComp,
    Slider2Comp,
    ClubComp,
    CardComp,
    Slider1Comp
},
  created() {
    document.title = "صفحه اصلی";
  },
  setup() {},
};
</script>

<style src="../assets/css/home.css"></style>
