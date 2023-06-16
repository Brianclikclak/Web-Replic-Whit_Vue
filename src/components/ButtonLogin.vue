<template >
    <button class="button-top-nav"><RouterLink to="/login">login</RouterLink></button>
    <RouterView/>
</template>

<style scoped>
.button-top-nav {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 1.75rem;
  border: 0.125rem solid #ff556e;
  padding: 5px 20px;
  color: #ff556e;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  background-color: #f7fafd;
  margin-left: 0.625rem;
  text-decoration: none;
}

.button-top-nav:hover {
  background-color: #ff556e;
  color: #fff;
  transition: all 0.2s;
}


</style>
