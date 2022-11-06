<template>
  <main>
    <div class="bg-yas">
      <div class="mx-3">
        <span class="block text-base mt-3 text-707070 pl-5 text-right"
          >:فرم ثبت نام</span
        >

        <div class="h-screen grid content-center -mt-14">
          <div class="flex justify-center z-10 -mb-12">
            <div
              class="rounded-full border-2 border-border-profile bg-white p-3"
            >
              <div class="flex items-center justify-center h-24 translate-y-4">
                <label class="flex flex-col">
                  <div class="flex flex-col items-center justify-center">
                    <svg
                      id="gallery-add"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path
                        id="Vector"
                        d="M3.438,6.875A3.438,3.438,0,1,1,6.875,3.438,3.436,3.436,0,0,1,3.438,6.875Zm0-5A1.563,1.563,0,1,0,5,3.438,1.563,1.563,0,0,0,3.438,1.875Z"
                        transform="translate(7.813 6.563)"
                        fill="#9aa1a5"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M17.188,26.875h-7.5C2.9,26.875,0,23.975,0,17.188v-7.5C0,2.9,2.9,0,9.688,0h5a.944.944,0,0,1,.938.938.944.944,0,0,1-.937.938h-5c-5.763,0-7.812,2.05-7.812,7.813v7.5C1.875,22.95,3.925,25,9.688,25h7.5C22.95,25,25,22.95,25,17.188v-6.25a.938.938,0,0,1,1.875,0v6.25C26.875,23.975,23.975,26.875,17.188,26.875Z"
                        transform="translate(1.563 1.563)"
                        fill="#9aa1a5"
                      />
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M7.813,1.875H.938A.944.944,0,0,1,0,.938.944.944,0,0,1,.938,0H7.813A.944.944,0,0,1,8.75.938.944.944,0,0,1,7.813,1.875Z"
                        transform="translate(18.75 5.313)"
                        fill="#9aa1a5"
                      />
                      <path
                        id="Vector-4"
                        data-name="Vector"
                        d="M.938,8.75A.944.944,0,0,1,0,7.813V.938A.944.944,0,0,1,.938,0a.944.944,0,0,1,.938.938V7.813A.944.944,0,0,1,.938,8.75Z"
                        transform="translate(22.188 1.875)"
                        fill="#9aa1a5"
                      />
                      <path
                        id="Vector-5"
                        data-name="Vector"
                        d="M.934,10.566A.937.937,0,0,1,.409,8.853L6.572,4.716a3.755,3.755,0,0,1,4.437.237l.413.362a1.842,1.842,0,0,0,2.3,0l5.2-4.462a3.732,3.732,0,0,1,4.75,0L25.709,2.6a.94.94,0,1,1-1.225,1.425l-2.038-1.75a1.842,1.842,0,0,0-2.3,0l-5.2,4.462a3.732,3.732,0,0,1-4.75,0l-.412-.362a1.859,1.859,0,0,0-2.162-.1l-6.15,4.137A1.094,1.094,0,0,1,.934,10.566Z"
                        transform="translate(2.403 14.059)"
                        fill="#9aa1a5"
                      />
                      <path
                        id="Vector-6"
                        data-name="Vector"
                        d="M0,0H30V30H0Z"
                        fill="none"
                        opacity="0"
                      />
                    </svg>
                  </div>
                  <input type="file" class="opacity-0 w-24" />
                </label>
              </div>
            </div>
          </div>
          <div
            class="
              bg-white
              rounded-2xl
              pt-16
              pb-8
              border-2 border-b-2 border-b-b-yas border-b-yas
              grid
              justify-center
            "
          >
            <form
              class="form-btn grid justify-center"
              @submit.prevent="handleSubmit"
            >
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Component 86 – 10.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="text"
                  name="get-name"
                  placeholder="نام"
                  id="get-name"
                  v-model="firstName"
                />
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Group 3362.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="text"
                  name="get-name1"
                  placeholder="نام خانوادگی"
                  id="get-name1"
                  v-model="lastName"
                />
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Group 3362.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="text"
                  name="username"
                  placeholder="یوزرنیم"
                  id="username"
                  v-model="username"
                />
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Group 3362.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="password"
                  name="username"
                  placeholder="پسورد"
                  id="password"
                  v-model="password"
                />
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Group 3362.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  id="get-name1"
                  v-model="email"
                />
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-5 z-10"
                  src="../assets/img/Component 326 – 1.svg"
                  alt=""
                />
                <!-- <input class="focus:outline-none block bg-transparent border-b-2 placeholder:text-a1a1a1 py-3 px-10 text-right mb-5" type="text" name="get-name2" placeholder="جنسیت" id="get-name2" v-model="sex" >    -->
                <select
                  id="underline_select"
                  class="
                    w-full
                    rtl
                    focus:outline-none
                    bg-transparent
                    border-b-2
                    text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  v-model="sex"
                >
                  <option selected>جنسیت را انتخاب کنید</option>
                  <option value="US">مرد</option>
                  <option value="CA">زن</option>
                </select>
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Component 86 – 11.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="text"
                  name="get-name3"
                  placeholder="تاریخ تولد"
                  id="get-name3"
                  v-model="date"
                />
              </div>
              <div class="flex">
                <!-- <input class="focus:outline-none block bg-transparent border-b-2 placeholder:text-a1a1a1 py-3 px-10 text-right mb-5" type="text" name="get-name4" placeholder="گروه سنی" id="get-name4" v-model="ageCategory" > -->
                <img
                  class="-mr-5 pb-5 z-10"
                  src="../assets/img/Component 326 – 1.svg"
                  alt=""
                />
                <select
                  id="underline_select2"
                  class="
                    w-full
                    rtl
                    focus:outline-none
                    bg-transparent
                    border-b-2
                    text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  v-model="ageCategory"
                >
                  <option selected>گروه سنی</option>
                  <option value="z0">0 تا 5</option>
                  <option value="z10">5 تا 10</option>
                  <option value="z15">10 تا 15</option>
                </select>
              </div>
              <div class="flex">
                <img
                  class="-mr-5 pb-3"
                  src="../assets/img/Component 86 – 13.svg"
                  alt=""
                />
                <input
                  class="
                    focus:outline-none
                    block
                    bg-transparent
                    border-b-2
                    placeholder:text-a1a1a1
                    py-3
                    px-10
                    text-right
                    mb-5
                  "
                  type="text"
                  name="get-name5"
                  placeholder="شهر"
                  id="get-name5"
                  v-model="city"
                />
              </div>
              <button
                :disabled="
                  !firstName ||
                  !lastName ||
                  !sex ||
                  !date ||
                  !ageCategory ||
                  !city
                "
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
          </div>
          <span class="block text-xs mt-3 text-9fb pl-5 text-right"
            >لطفا همه موارد را پر نمایید.</span
          >
        </div>
      </div>
    </div>
  </main>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      firstName: "mohammad",
      lastName: "alipoor",
      username: "mo7ammad",
      password: "12345",
      email: "test@test.com",
      sex: "man",
      date: "15",
      ageCategory: "15",
      city: "shiraz",
    };
  },
  methods: {
    async handleSubmit() {
       await axios.post("user/register", {
        //   console.log(this.firstName)
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
        email: this.email,
        sex: this.sex,
        ageCategory: this.ageCategory,
        city: this.city,
      });
      console.log(response);

        this.$router.push("/login");
    },
  },
};
</script>
  
  <style>
.form-btn button:disabled {
  background: #cbd4d9;
}
.rtl {
  direction: rtl;
}
</style>