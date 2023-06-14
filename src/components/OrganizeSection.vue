
<template>
    <section class="seccion02">
        <div class="image-s02">
            <img src="../assets/description-1-app.png" alt="">
        </div>
        <div class="text-s02">
            <h2>Organize Your Time And Start Getting Results</h2>
            <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away</p>
            <ul class="uls02">
                <li>Analyse and evaluate your current status and productivity</li>
                <li>Begin monitoring your day to day routine with Sync app</li>
                <li>See the improved results in no more than a couple of weeks</li>
            </ul>
                <button class="button-s02">Lightbox</button>
            </div>        
    </section>
</template>


<style scoped>

.seccion02 {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 8rem;
  background-color: #f7fafd;
  font-family: "Open Sans", sans-serif;
  max-width: 1400px;
  
}

.text-s02 {
  margin-left: 2.5rem;
  text-align: left;
}
.text-s02 h2 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
}
.text-s02 p {
  color: #777;
  font-weight: 400;
  line-height: 1.75rem;
}
.uls02 {
  color: #777;
  font-weight: 400;
  margin-bottom: 1.75rem;
  line-height: 1.75rem;
  padding: 0;
  list-style: square;
  margin-left: 1rem;
}
.image-s02 img {
  width: 497px;
}
.button-s02 {
  display: flex;
  padding: 25px 40px;
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
.button-s02:hover {
  border: 0.125rem solid #ff556e;
  background-color: transparent;
  color: #ff556e;
  text-decoration: none;
}
</style>