<template>
  <div id="menu">
    <HeaderComp></HeaderComp>
    <div class="pic">
      <h1>منوها</h1>
    </div>
    <div class="main">
      <div class="box">
        <div class="a">
          <router-link to="/menu/coffee"><img
            src="../assets/img/top-view-cup-coffee_23-2148178338.jpg"
            alt=""
          /></router-link>
        </div>
        <div class="b">
          <div class="b1"><router-link to="/menu/coffee"><h2>قهوه</h2></router-link></div>
          <div class="b2">
            <p
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              </p
            >
          </div>
        </div>
      </div>
      <div class="box">
        <div class="a">
          <img
            src="../assets/img/rosemary-hot-tea-cup-ready-drink_1150-35603.jpg"
            alt=""
          />
        </div>
        <div class="b">
          <div class="b1"><h2>دمنوش</h2></div>
          <div class="b2">
            <p
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              </p
            >
          </div>
        </div>
      </div>
      <div class="box">
        <div class="a">
          <img
            src="../assets/img/top-view-cup-coffee_23-2148178338.jpg"
            alt=""
          />
        </div>
        <div class="b">
          <div class="b1"><h2>قهوه</h2></div>
          <div class="b2">
            <p
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              </p
            >
          </div>
        </div>
      </div>
      <div class="box">
        <div class="a">
          <img
            src="../assets/img/rosemary-hot-tea-cup-ready-drink_1150-35603.jpg"
            alt=""
          />
        </div>
        <div class="b">
          <div class="b1"><h2>دمنوش</h2></div>
          <div class="b2">
            <p
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              </p
            >
          </div>
        </div>
      </div>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import HeaderComp from "./HeaderComp.vue";
export default {
  name: "MenuComp",
  created() {
    document.title = "منوها";
  },
  components: { FooterComp, HeaderComp },
};
</script>

<style src="../assets/css/menu.css"></style>
