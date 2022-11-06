
<template>
  <main>
    <div class="bg-yas">
      <div class="mx-3">
        <div class="h-screen grid content-center -mt-14">
          <div class="flex justify-center -mb-16">
            <img class="z-10" src="../assets/img/Group 43464.png" alt="" />
          </div>
          <div
            class="
              bg-white
              rounded-2xl
              border-2
              pt-24
              pb-8
              border-b-yas border-solid
              grid
              justify-center
            "
          >
            <form
              class="form-btn grid justify-center"
              @submit.prevent="handleSubmit_2"
            >
              <input
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                class="
                  block
                  bg-btn-input
                  py-3
                  px-10
                  rounded-3xl
                  text-center
                  mb-5
                "
                name="get-phone"
                placeholder="شماره تماس را وارد کنید"
                id="get-phone"
                v-model="phone"
              />
              <button
                :disabled="!phone"
                type="submit"
                class="
                  block
                  bg-text-mahak-pink
                  py-3
                  px-10
                  rounded-3xl
                  text-white
                "
              >
                ارسال کد تایید
              </button>
            </form>
            <a href="#"
              ><span class="block text-xs mt-3 text-707070 pl-5"
                >شرایط و قوانین</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

const quote = ref("");

export default {
  name: "login",

  data() {
    return {
      phone: "09390501858",
    };
  },
  methods: {
    async handleSubmit_2() {
      console.log(this.phone);
      const response = await axios
        .post("user/activation", {
          mobile: this.phone,
        })
        .then((Response) => {
          alert(Response.data.message);
        })
        .catch((error) => {
          alert(error.data.message);
          //  console.log(error.data.message);
        });
      // localStorage.setItem("token", Response.data.token);
      this.$router.push("sendcode");
    },
  },
};
</script>

<style>
.form-btn button:disabled {
  background: #cbd4d9;
}
</style>