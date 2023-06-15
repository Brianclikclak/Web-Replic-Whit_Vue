<script >
    export default{
        data() {
            return {
                inputType: "password",
                inputTypeIcon: "password",
                showPassword: "Show Password",
                hidePassword: "Hide Password",
            }
        },
        methods: {
            ToggleInput() {
                this.inputType = this.inputType === "password" ? "text" : "password";
            },
            ToggleInputIcon() {
                this.inputTypeIcon = this.inputType === "password" ? "text" : "password";
            }
        },
    }
</script>

<template>
    <div class="container">
        <h1>Inicie sesión</h1>
        <form>
            <input type="text" name="userName" placeholder="Username">
            <br><br>
            <input :type="inputType" name="password" placeholder="Password">
            <br>
            <button @click.prevent="ToggleInput" class="showHidePassword">
                <span v-if="inputType == 'password'">{{ showPassword }}</span>
                <span v-else>{{ hidePassword }}</span>
            </button>
            <br><br><br><br>
            <input type="submit" value="INGRESAR">
        </form>
    </div>
</template>

<style>
.container{
    background-color: #e8eff6;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
}
h1{
    font-size: 1.5rem;
}
form{
    padding: 2.5rem 0;
    justify-content: center;
    align-items: center;
    background-color: #b8bec4;
    width: 500px;
    height: 250px;
}
input{
  width: 75%;
  margin-bottom: 15px;
  border-radius: 30px;
  border: 1px solid lightgray;
  padding: 15px 20px;
  font-size: .9rem;
}
[type="submit"]{
  background: #ff556e;
  border-radius: 30px;
  width: 45%;
  color: #fff;
  font-size: .8rem;
  margin: 0;
  cursor: pointer;
}
</style>