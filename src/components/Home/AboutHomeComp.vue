<template>
  <div id="about" data-aos-anchor=".cardd" data-aos="fade-up"   data-aos-anchor-placement="center-center" class="about">
    <div class="left">
      <div class="l1">
        <h2>درباره ما</h2>
      </div>
      <div class="l2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero
          adipisci minima in suscipit maxime unde laborum voluptate impedit
          ratione corporis dignissimos ab, quas debitis ullam praesentium
          eligendi sint accusantium! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Harum vitae modi similique doloremque eum quod nisi,
          rerum voluptates perferendis, dolore tempora molestiae eaque dicta
          expedita aperiam an sapiente neque!
        </p>
      </div>
      <div class="l3">
        <div @click="goToAbout()" class="l3_1">
          <span>بیشتر بخوانید</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/img/42.png"  alt="" />
    </div>
  </div>
</template>

<script>
import router from '../../plugin/router';

export default {
  name: "AboutHomeComp",
  setup()
  {
    const goToAbout = ()=>{
      router.push('/about');
    }
    return{
      goToAbout
    }
  }
};
</script>

<style src="../../assets/css/Home/about.css"></style>
