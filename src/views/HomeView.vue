<script setup>
import Navbar from "../components/Navbar.vue";
import Race from "../components/Race.vue";
import TimeCard from "../components/time-card.vue";
import Gifts from "../components/gifts.vue";
import Slider from "../components/slider.vue";
import Picturse from "../components/picturse.vue";
</script>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("profile/get");
    this.user = response.data.data;
  },
};
</script>

<template>
  <main>
    <Navbar />

    <h3 v-if="user">خوش اومدین ,{{ user.first_name }} {{ user.last_name }}</h3>
    <h3 v-if="!user">you are not logged in!</h3>

    <Race />
    <TimeCard />
    <Gifts />
    <Slider />
    <Picturse />
  </main>
</template>
