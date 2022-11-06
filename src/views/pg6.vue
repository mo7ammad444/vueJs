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
    this.user = showOutput.data.data;
  },
};
</script>

<template>
    <p>{{user.title}}</p>
    <p>{{user.pic}}</p>
    <img :src="user.pic">
</template>
