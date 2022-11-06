  
  <script>
import axios from "axios";
import Timer from "../components/timer.vue";

export default {
  name: "login",
  data() {
    return {
      phone: "09390501858",
      code: null,
    };
  },

  methods: {
    async handleSubmit_2() {
      const post_phone = { mobile: this.phone, code: this.code };

      console.log(this.phone);
      const response = await axios
        .post("user/activatvate",post_phone, {
        
        })
        .then((Response) => {
          alert(Response.data.message);
          localStorage.setItem("token", Response.data.data.token);
          window.localStorage.setItem(key, value);
          console.log(Response.data.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.data.message);
          //  console.log(error.data.message);
          this.$router.push("/");
        });
      // localStorage.setItem("token", Response.data.token);   
      this.$router.push("/");
    },
  },
  components: { Timer },
};
</script>
      
    
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
            <span class="text-center"
              >کد تایید به شماره شما ارسال شده است <br />لطفا آن راوارد
              بفرمایید</span
            >
            <form
              class="form-btn grid justify-center mt-5"
              @submit.prevent="handleSubmit_2"
            >
              <input
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                maxlength="5"
                class="
                  block
                  bg-transparent
                  tracking-widest_2x
                  text-xl
                  font-black
                  py-3
                  px-2
                  focus:outline-none
                  rounded-3xl
                  text-center
                  placeholder:text-cu-purple
                "
                name="get-phone"
                placeholder="- - - - -"
                id="get-phone"
                v-model="code"
              />

              <Timer />
              <button
                :disabled="!code"
                type="submit"
                class="
                  block
                  bg-text-mahak-pink
                  py-3
                  px-5
                  rounded-3xl
                  text-white
                "
              >
                تایید
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

  <style>
.form-btn button:disabled {
  background: #cbd4d9;
}
</style>