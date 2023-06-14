<script setup>
  import DownloadLogo1 from './icons/DownloadLogo1.vue';
  import DownloadLogo2 from './icons/DownloadLogo2.vue';
</script>
<template>
    <section>
            <h1>Mobile App Landing Page</h1>
            <p class="p-under-h1">Start focusing on your goals and get more things done with Sync mobile applications. It's the first app to harness the power of social connections to help you stay focused and get organized.</p>
        
          <div class="download-buttons-div">
              <button>    
                  <DownloadLogo1/>
                  <p>Download</p></button>
              <button>
                  <DownloadLogo2/>
                  <p>Download</p></button>
          </div>
        </section>
</template>


<style scoped>

h1 {
  font-size: 4rem;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  color: #333;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

.p-under-h1 {
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: #777;
  width: 40%;
}

.download-buttons-div {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 6rem;
}

.download-buttons-div button {
  display: flex;
  padding: 5px 20px;
  border: 2px solid #ff556e;
  border-radius: 28px;
  background-color: #ff556e;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  line-height: 0px;
  margin: 5px;
  align-items: center;
}

.download-buttons-div button:hover {
  border: 0.125rem solid #ff556e;
  background-color: transparent;
  color: #ff556e;
  text-decoration: none;
}
</style>