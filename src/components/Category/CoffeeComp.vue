<template>
  <div id="coffee">
    <HeaderComp></HeaderComp>
    <main>
      <div class="main_part">
        <div class="a">
          <h1>قهوه ها</h1>
          <div class="select">
            <select name="format" id="format">
              <option selected>پرفروش ترین ها</option>
              <option>پرفروش ترین ها</option>
              <option>پرفروش ترین ها</option>
              <option>پرفروش ترین ها</option>
            </select>
          </div>
        </div>
        <div class="cardd w-full flex justify-center flex-wrap flex-row py-5">
          <div
            v-for="i in 6"
            class="w-full m-5 max-w-sm border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="">
              <img
                class="rounded-t-lg"
                src="../../assets/img/top-view-cup-coffee_23-2148178338.jpg"
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <h5
                class="mb-5 pt-5 text-xl font-semibold tracking-tight text-white"
              >
                قهوه اسپرسو
              </h5>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="text-center">
                  <v-rating
                    v-model="rating"
                    disabled
                    size="22"
                    color="yellow"
                    half-increments
                  ></v-rating>
                </div>
                <span
                  class="bg-blue-100 text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3"
                  >{{ rating }}</span
                >
              </div>
              <div class="w-full my-2 mb-6">
                <span class="text-white"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque reiciendis pariatur veritatis illo
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-small font-bold text-white"
                  >30.000 تومان</span
                >
                <button @click="snackbar = true"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </div>
        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{ text }}

          <template v-slot:actions>
            <v-btn color="blue" variant="text" @click="snackbar = false">
              باشه
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from "../FooterComp.vue";
import HeaderComp from "../HeaderComp.vue";
export default {
  name: "CoffeeComp",
  created() {
    document.title = "قهوه ها";
  },
  components: { FooterComp, HeaderComp },
};
</script>

<style src="../../assets/css/Category/coffee.css"></style>
