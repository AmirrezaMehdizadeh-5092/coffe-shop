<template>
  <div class="cardd w-full flex justify-center flex-wrap flex-row py-5">
    <div class="w-full py-10">
      <h2 class="hed">پرفروش ترین ها</h2>
    </div>

    <div
      v-for="(i, index) in pro"
      class="w-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
          class="mb-5 pt-5 text-xl font-semibold tracking-tight text-gray-900"
        >
          {{ i.name }}
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
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >{{ rating }}</span
          >
        </div>
        <div class="w-full my-2 mb-6">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            eaque reiciendis pariatur veritatis illo
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-small font-bold text-gray-900"
            >{{ i.price }} تومان</span
          >
          <button
            @click="add_to_card(i)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            افزودن به سبد
          </button>
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
    <div class="text-center" v-if="moo">
      <v-dialog v-model="moo" width="500">
        <v-card>
          <div class="w-full bg-blue-500 py-7 flex justify-center items-center">
            <h2 class="text-xl text-white">افزودن به سبد خرید</h2>
          </div>
          <div class="w-full pb-4 pt-2 mt-5 flex justify-center items-center">
            <div class="w-2/4 flex justify-center items-center">
              <img
                src="../../assets/img/top-view-cup-coffee_23-2148178338.jpg"
                style="width: 150px; height: 150px"
                alt=""
              />
            </div>
            <div class="w-2/4">
              <h2 class="text-center text-2xl">{{ itemm.name }}</h2>
              <br />
              <h3 class="text-center">{{ itemm.price }}</h3>
              <div class="w-full flex justify-center items-center mt-5">
                <div
                  @click="num++"
                  class="py-2 px-4 cursor-pointer mx-1 bg-amber-100"
                >
                  <h4>+</h4>
                </div>
                <div class="py-2 px-4 mx-1 bg-amber-100">
                  <h4>{{ num }}</h4>
                </div>
                <div
                  @click="
                    num--;
                    if (num < 0) {
                      num = 0;
                    }
                  "
                  class="py-2 px-4 cursor-pointer mx-1 bg-amber-100"
                >
                  <h4>-</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/4 mx-auto flex justify-around items-center my-6">
            <v-btn @click="ADD(itemm , num)" color="purple" text="افزودن"></v-btn>
            <v-btn @click="moo = false" color="warning" text="لغو"></v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
    <div class="w-full my-7 flex justify-center items-center">
      <router-link to="/menu"
        ><div
          class="hover:bg-green-900 h-12 cursor-pointer w-40 bg-green-700 text-white flex justify-center items-center rounded-xl"
        >
          <span class="text-center">مشاهده منو</span>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useStore } from "../../plugin/pinia";

export default {
  name: "CardComp",
  setup() {
    const pro = ref([
      {
        id: "1",
        name: "قهوه اسپرسو",
        price: "30.000",
      },
      {
        id: "2",
        name: "قهوه ترک",
        price: "35.000",
      },
      {
        id: "3",
        name: "قهوه عربیکا",
        price: "34.000",
      },
      {
        id: "1",
        name: "قهوه اسپرسو",
        price: "30.000",
      },
      {
        id: "2",
        name: "قهوه ترک",
        price: "35.000",
      },
      {
        id: "3",
        name: "قهوه عربیکا",
        price: "34.000",
      },
    ]);
    const itemm = ref("");
    const num = ref(0);
    const moo = ref(false);
    const store = useStore();
    const snackbar = ref(false);
    const text = ref("لطفا وارد حساب شوید");
    const timeout = ref(2500);
    const rating = ref(4.5);
    const aa = ref(false);
    const list = ref([]);
    const test = () => {
      aa.value = true;
    };

    const add_to_card = (index) => {
      let a = localStorage.getItem("token");
      if (a) {
        let existingArrayString = localStorage.getItem("products");
        if (existingArrayString) {
          let existingArray = JSON.parse(existingArrayString);
          if (!Array.isArray(existingArray)) {
            console.warn(
              "Existing array not found or not an array. Initializing as an empty array."
            );
            existingArray = [];
          }
          existingArray.push(JSON.stringify(index));
          const updatedArrayString = JSON.stringify(existingArray);
          localStorage.setItem("products", updatedArrayString);
        } else {
          localStorage.setItem("products", JSON.stringify(index));
        }
        store.setCardNumber();
        moo.value = true;
        itemm.value = index;
      } else {
        snackbar.value = true;
      }
    };

    const ADD = (index , count) => {
      let obj = {
        id : index.id,
        name : index.name,
        price : index.price,
        count : count
      }
      console.log(obj);
      moo.value = false;
      text.value = "محصول به سبد خرید اضافه شد";
      snackbar.value = true;
    };

    onMounted(() => {
      localStorage.setItem("products", []);
    });

    return {
      list,
      num,
      pro,
      rating,
      aa,
      test,
      snackbar,
      text,
      timeout,
      add_to_card,
      moo,
      itemm,
      ADD,
    };
  },
};
</script>

<style>
.hed {
  font-size: 40px;
  text-align: center;
}
@media (min-width: 320px) and (max-width: 480px) {
  .hed {
    font-size: 30px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .hed {
    font-size: 35px;
  }
}
</style>
