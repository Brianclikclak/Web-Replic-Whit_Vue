<script setup>
import logo from './icons/logo.vue';
</script>

<template>
    <div class="nav-landing">
        <div class="logo">
            <a href="#"><logo/></a>
        </div>
        <nav>
            <ul class="top-menu">
                <li><a href="">Description</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Screens</a></li>
                <li class="dropdown"><a href="#">Extra</a>
                    <div class="dropdown-content">
                        <a href="#">Article Details</a>
                        <a href="#">Terms Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </li>
                <li><a href="views/LoginView.vue"><button class="button-top-nav">Login</button></a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>

.nav-landing {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1030;
  background-color: #f7fafd;
  box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
}

.nav-landing a{
    margin-left: 10px; 
}

.top-menu {
  display: flex;
  font-size: 14px;
  list-style: none;
  margin-right: 100px;
  text-transform: uppercase;
  align-items: baseline;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}

.top-menu a {
  text-decoration: none;
  color: #333333;
}
.top-menu li {
  margin: 30px 15px;
}

.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  overflow: auto;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
}
.dropdown:hover .dropdown-content {
  display: block;
  white-space: nowrap;
}
.dropdown-content a {
  display: block;
  color: #000000;
  padding: 5px;
}
.dropdown-content,
.top-menu a:hover {
  color: #ff556e;
}

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
}

.button-top-nav:hover {
  background-color: #ff556e;
  color: #fff;
  transition: all 0.2s;
}

</style>