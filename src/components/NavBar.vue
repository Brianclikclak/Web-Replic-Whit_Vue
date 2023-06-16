<script setup>
import ButtonLogin from './ButtonLogin.vue';
import logoSync from './icons/logoSync.vue';
</script>

<template>
    <div class="nav-landing">
        <div class="logo">
            <a href="/"><logoSync/></a>
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
                <li><ButtonLogin/></li>
               
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
  
  color: #333333;
}
.top-menu li {
  text-decoration: none;
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

li a{
  text-decoration: none;
}

</style>