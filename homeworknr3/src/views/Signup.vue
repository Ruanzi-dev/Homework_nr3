<template>
  <main class="loginform">
    <form @submit.prevent="submit">
      <label class="headertext">Sign up</label>
      <label class="Description">
        <input class="username" type="text" v-model="email" placeholder="Email"/>
      </label>
      <label class="Insert">
        <input type="password" v-model="password"  placeholder="Password"/>
      </label>
      <div v-if="submitted && errors.length" class="error">
        <p>The password is not valid:</p>
        <p v-for="err in errors" :key="err">{{ err }}</p>
    </div> 
      <label class="Create">
        <button class="button2" type="submit">Sign up</button>
      </label>
      
    </form>
  </main>
</template>

<script>
export default {
  name: 'SignUp',
   data() {
    return {email: "", password: "", submitted:false};
  },
  computed: {
    errors (){
        const passwordenter = this.password;
        const errors = [];
        if (passwordenter.length < 8){
            errors.push("The password should be atleast 8 characters")
        }
        if (passwordenter.length >= 15){
            errors.push("The password should not be longer than 15 characters")
        }
        let upper = 0, lower = 0, digits = 0, underscore = 0;
        for (let i = 0; i < passwordenter.length; i++) {
            const c = passwordenter[i];
        if (c >= "A" && c <= "Z") upper++;
        else if (c >= "a" && c <= "z") lower++;
        else if (c >= "0" && c <= "9") digits++;
        else if (c == "_") underscore++;
        }
        if (upper < 1){
            errors.push("The password must include one uppercase letter")
        }
        if (lower < 2){
            errors.push("The password must include atleast 2 lowercase letters")
        }
        if (digits < 1){
            errors.push("The password must include atleast 1 digit")
        }
        if (!(passwordenter[0] >= "A" && passwordenter[0] <= "Z")){
            errors.push("The password should start with an Uppercase letter")
        }
        if (underscore < 1){
            errors.push("The password should have one "+ "_" + " character")
        }
        return errors;
    },
},
  methods: {
    submit(){
        console.log("submit käivitus");
        this.submitted = true;
        if (this.errors.length > 0){
            alert("This password is not correct: \n" + this.errors.join("\n"))
        }else {
            alert("This password is entered correctly");
            this.$router.push("/home");
        }
    },
  },
};
</script>
