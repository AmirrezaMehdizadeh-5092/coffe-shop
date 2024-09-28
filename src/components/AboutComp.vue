<template>
  <div id="about">
    <HeaderComp></HeaderComp>
    <div class="pic">
      <h1>درباره ما</h1>
    </div>
    <div class="part1">
      <div class="part11">
        <div class="a w-full py-8">
          <h2>کافی شاپ ...</h2>
        </div>
        <div class="b w-2/4 py-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div class="py-4 mt-8 w-full flex justify-start items-center">
            <v-avatar color="red" size="25px"></v-avatar>
            <p class="mx-2">dfdfdf</p>
          </div>
          <div class="w-full flex justify-start items-center">
            <v-avatar color="red" size="25px"></v-avatar>
            <p class="mx-2">dfdfdf</p>
          </div>
          <router-link to="/menu"
            ><div class="c w-full py-8 mt-3">
              <div class="menu_btn">منوها</div>
            </div></router-link
          >
        </div>
      </div>
      <div class="part12">
        <img
        style="margin-bottom: 5px;"
          src="../assets/img/cup-coffee-with-white-saucer_114579-16848.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="part1">
      <div class="part22">
        <img
          src="../assets/img/black-coffee-cup-leaves-white-table_181624-29249.jpg"
          alt=""
        />
      </div>
      <div class="part11">
        <div class="a w-full py-8">
          <h2>هدف ما</h2>
        </div>
        <div class="b w-2/4 py-4">
          <p>
            هدف ما ارائه بهترین کیفیت در محصولات و جلب رضایت شماست. بدین منظور
            شما میتوانید ما را در بهبود کیفیت خدمات خود یاری دهید و هر گونه نظر
            و انتقاداتی را با ما در میان بگذارید
          </p>

          <div class="c w-full py-8 mt-3">
            <a href="#form" v-smooth-scroll><div class="menu_btn">
            ارتباط با ما
            </div></a>
          </div>
        </div>
      </div>
    </div>
    <div id="form" class="part1 mb-20">
      <div class="part11">
        <div class="a w-full py-8">
          <h2>ارتباط با ما</h2>
        </div>
        <div class="b w-2/4 py-0">
          <div class="py-4 mt-0 w-full flex justify-start items-center">
            <input type="email" placeholder="ایمیل" required />
          </div>
          <div class="py-4 mt-0 w-full flex justify-start items-center">
            <input type="text" placeholder="موضوع" required />
          </div>
          <div class="py-4 mt-0 w-full flex justify-start items-center">
            <textarea type="text" placeholder="متن" required></textarea>
          </div>
          <div class="c w-full py-5 mt-3">
            <div class="menu_btn">ارسال</div>
          </div>
        </div>
      </div>
      <div class="part12">
        <img
        style="margin-top: 20px;"
          src="../assets/img/young-business-man-working-her-desk-with-laptop-smartphone_23-2149206514.jpg"
          alt=""
        />
      </div>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import HeaderComp from "./HeaderComp.vue";
export default {
  name: "AboutComp",
  created() {
    document.title = "درباره ما"
  },
  components: { FooterComp, HeaderComp },
};
</script>

<style src="../assets/css/about.css"></style>
