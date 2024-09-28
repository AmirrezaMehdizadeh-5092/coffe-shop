<template>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <div id="app">
    <div class="h-screen flex flex-row flex-wrap">
      <div
        class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
      >
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p class="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <div>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 mb-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              v-model="password"
            />
          </div>
          <span class="text-primary py-4" v-if="password != ''">{{
            text
          }}</span>
          <password-meter
            @score="onScore"
            :password="password"
            style="width: 400px; height: 5px"
          />
          <button
            @click="Login()"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            >Forgot Password ?</span
          >
        </div>
      </div>
    </div>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="#80CBC4"
    ></v-progress-linear>
    <img src="../assets/img/carousel_1.jpg" class="img-fluid" alt="">
    <div class="container-fluid">
      <div class="row">
        <div
          style="background-color: red"
          class="d-flex col-xs-12 col-sm-6 col-12 col-md-6 col-lg-3 py-4"
        >
          <h1 class="text-center">dfdf</h1>
        </div>
        <div
          style="background-color: rgb(193, 147, 147)"
          class="d-flex col-xs-12 col-sm-6 col-12 col-md-6 col-lg-3 py-4"
        >
          <h1 class="text-center"></h1>
          dfdf
        </div>
        <div
          style="background-color: rgb(171, 178, 223)"
          class="d-flex col-xs-12 col-sm-6 col-12 col-md-6 col-lg-3 py-4"
        >
          <h1 class="text-center"></h1>
          dfdfdf
        </div>
        <div
          style="background-color: rgb(36, 5, 5)"
          class="d-flex col-xs-12 col-sm-6 col-12 col-md-6 col-lg-3 py-4"
        >
          <h1 class="text-center">dfdf</h1>
        </div>
      </div>
    </div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/img/2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/img/2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        color="primary"
      >
        <span
          class="carousel-control-prev-icon text-slate-100"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import PasswordMeter from "vue-simple-password-meter";

export default defineComponent({
  name: "App",
  components: {
    PasswordMeter,
  },
  created() {
    document.title = "Login";
  },
  setup() {
    const password = ref("");
    const score = ref(null);
    const text = ref("");
    const loading = ref(false);

    onMounted(() => {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
      );
      document.head.appendChild(recaptchaScript);
      let recaptchaScript2 = document.createElement("script");
      recaptchaScript2.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      );
      document.head.appendChild(recaptchaScript2);
    }),
      watch(loading, (val) => {
        if (!val) return;
        setTimeout(() => (loading.value = false), 3000);
      });

    const onScore = (payload) => {
      console.log(payload.score); // from 0 to 4
      console.log(payload.strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
      score.value = payload.score;
      switch (payload.strength) {
        case "risky" || "weak":
          text.value = "ضعیف";
          break;
        case "secure" || "safe":
          text.value = "امن";
          break;
        case "guessable":
          text.value = "قابل حدس";
          break;
        default:
          break;
      }
    };

    const Login = () => {
      loading.value = true;
      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    };

    return {
      password,
      onScore,
      score,
      text,
      loading,
      Login,
    };
  },
});
</script>
