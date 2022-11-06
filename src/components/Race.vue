<template>
    <div
    class="text-center flex-row justify-center grid place-content-center mt-3"
  >
    <div class="text-right pr-5">
      <h1 class="text-3xl text-text-mahak-pink font-bold">مسابقه کمانک</h1>
      <span class="text-text-mahak-gray">1398/12/05</span>
    </div>
    <div class="grid justify-items-center text-right px-4 mt-2">
      <img class="w-full" src="../assets/img/Feature.png" alt="" />
      <p class="text-right mt-4">
        خانه کودک خانه کودک شهرداری اصفهان در دهه 70 راه اندازی شد و تاکنون به
        یاری باری تعالی و مسوولین دلسوز توانسته است قدم هایی هر چند کوچک برای
        رشد و پیشرفت کودکان و احقاق حقوق آنها بردارد . همه ما می دانیم که سال
        های پیش از دبستان، مرحله شکل گیری
      </p>
      <a class="text-text-mahak-gray mt-3 text-xl" href="#"
        ><span>بیشتر</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("campaign/113");
    this.user = response.data.data;
  },
};
</script>

