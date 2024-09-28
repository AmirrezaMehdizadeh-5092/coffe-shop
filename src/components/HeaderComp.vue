<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <div class="top">
    <div class="l">
      <div class="l1">
        <i class="fa fa-phone"></i>
        <span>5252525252</span>
      </div>
      <div class="l2">
        <i class="fa fa-envelope"></i>
        <span>example@gmail.com</span>
      </div>
    </div>
    <div class="r">
      <i class="fa fa-instagram mx-4"></i>
      <i class="fa fa-telegram mx-4"></i>
      <i class="fa fa-envelope mx-4"></i>
    </div>
  </div>
  <div id="header">
    <div class="sec4">
      <div>
        <i @click.stop="drawer = !drawer" class="fa fa-bars"></i>
      </div>
    </div>
    <div class="sec3">
      <img
        height="150px"
        width="150px"
        src="../assets/svgg/cyberpanel-temp-logo.svg"
        alt=""
      />
    </div>
    <div class="sec2">
      <router-link to="/"><span>خانه</span></router-link>
      <router-link to="/menu"><span>منوها</span></router-link>
      <router-link to="/about"><span>درباره ما</span></router-link>
    </div>
    <div class="sec1">
      <i @click="dialog = true" class="fa fa-user-circle-o"></i>

      <v-btn class="text-none" stacked>
        <v-badge :content="CN" color="error">
          <i @mousemove="aa()" class="fa fa-shopping-basket"></i>
        </v-badge>
      </v-btn>
    </div>
    <v-card style="position: absolute; z-index: 5">
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list-item
            class="text-center my-3 text-red-400"
            @click="drawer = null"
            title="بستن منو"
          ></v-list-item>
          <v-divider></v-divider>

          <v-list density="compact" nav>
            <router-link to="/"><v-list-item
              class="text-center"
              title="خانه"
              value="خانه"
            ></v-list-item></router-link>
            <br />
            <router-link to="/menu"><v-list-item
              class="text-center"
              title="منوها"
              value="منوها"
            ></v-list-item></router-link>
            <br />
            <router-link to="/about"><v-list-item
              class="text-center"
              title="درباره ما"
              value="درباره ما"
            ></v-list-item></router-link>
            <br />
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <v-card style="position: absolute; z-index: 5">
      <v-layout>
        <v-navigation-drawer width="500" v-model="cart" temporary>
          <div class="w-full bg-black py-12 flex justify-around items-center">
            <h2 class="text-2xl">سبد خرید</h2>
            <i
              @click="cart = false"
              class="fa fa-close cursor-pointer text-2xl hover:scale-125"
            ></i>
          </div>
          <v-divider></v-divider>

          <v-list density="compact" class="m-0" nav>
            <div
              v-for="i in 3"
              class="w-full pb-4 pt-2 mt-5 flex justify-center items-center"
            >
              <div class="w-2/4 flex justify-center items-center">
                <img
                  src="../assets/img/top-view-cup-coffee_23-2148178338.jpg"
                  style="width: 150px; height: 150px"
                  alt=""
                />
              </div>
              <div class="w-2/4">
                <h2 class="text-center text-lg">اسپرسو</h2>
                <br />
                <h3 class="text-center">30.000</h3>
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
                <div class="w-full flex justify-around items-center mt-6">
                  <v-btn color="purple" text="تایید"></v-btn>
                  <v-btn color="warning" text="حذف"></v-btn>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-center items-center my-7">
              <v-btn color="primary" text="تایید نهایی"></v-btn>
            </div>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="600">
        <v-card>
          <v-card-title>
            <br />
            <span class="text-h5 mr-6 pt-5">ورود</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="شماره تلفن" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small
              class="mr-6"
              @click="
                dialog = false;
                dialog2 = true;
              "
              style="color: blue; cursor: pointer"
              >حسابی ندارید؟</small
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              بستن
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click=""> ورود </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog2" persistent width="600">
        <v-card>
          <v-card-title>
            <br />
            <span class="text-h5 mr-6">ثبت نام</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="نام" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="شماره تلفن"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small
              class="mr-6"
              @click="
                dialog2 = false;
                dialog = true;
              "
              style="color: blue; cursor: pointer"
              >ورود</small
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog2 = false"
            >
              بستن
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="">
              ثبت نام
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
  <div v-for="user in users" :key="user.id"></div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "../plugin/pinia";
//import Cookies from 'js-cookie';

export default {
  name: "HeaderComp",
  setup() {
    const num = ref(0)
    const pro = ref('')
    const cart = ref(false);
    const dialog = ref(false);
    const dialog2 = ref(false);
    const store = useStore();
    const card_number = ref(2);
    const box = ref(false);
    const drawer = ref(null);

    const users = computed(() => {
      return store.data;
    });

    const CN = computed(() => {
      localStorage.setItem("cn", store.getCardNumber);
      return store.getCardNumber;
    });

    const aa = ()=>{
      cart.value = true;
      pro.value = localStorage.getItem("products")
      console.log(pro.value.length);
      console.log(pro.value)
    }

    onMounted(() => {
      store.GET("products");
    });

    return {
      num,
      pro,
      box,
      cart,
      drawer,
      card_number,
      users,
      CN,
      dialog,
      aa,
      dialog2,
    };
  },
};
</script>

<style src="../assets/css/Header.css"></style>
