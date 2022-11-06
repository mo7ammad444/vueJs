
<template>
  <main>
    <form>

<input type="text" name="" id="" V-model="num1" @input="suminputs">
<input type="text" name="" id="" V-model="num2" @input="suminputs">
<input type="text" name="" id="" V-model="num3" @input="suminputs">

</form>
  </main>
</template>

<script>
    alert('fdmvk');
    export default {
        
        name: "testcode",
        

        data() {
            return {
                num1: "",
                num2: "",
                num3: "",
            };
        },
        methods: {
            suminputs() {
                var sss = this.num1 + this.num2 + this.num3;
                if (sss >= 9) {
                    alert('dfdfvfv');
                }

            },
            //  handleSubmit_2() {
            //     if (num1 || num2|| num3 == 10) {
            //         alert('dfvfdv') 
            //     }
            // },
        },

    };
</script>

<style>
.form-btn button:disabled {
  background: #cbd4d9;
}
</style>