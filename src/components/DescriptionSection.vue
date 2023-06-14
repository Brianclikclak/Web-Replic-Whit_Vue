<template>
        <div class="phone-image">
            <img src="../assets/header-iphone.png" alt="">
            

        </div>
        <section class="container-middle">
            <div class="container-icons-middle">
              <div class="container-icons-middleicon">
                <img class="container-icons-middleimg" src="../assets/usersIconFix.png" alt="Users icon" />
                <p class="icons-middletext">Identify Goals</p>
              </div>
      
              <div class="container-icons-middleicon">
                <img class="container-icons-middleimg" src="../assets/keyIconFix.png" alt="Keys icon" />
                <p class="icons-middletext">Situation Analysis</p>
              </div>
      
              <div class="container-icons-middleicon">
                <img class="container-icons-middleimg" src="../assets/gearIconFix.png" alt="gear icon" />
                <p class="icons-middletext">Tasks Settings</p>
              </div>
      
              <div class="container-icons-middleicon">
                <img class="container-icons-middleimg" src="../assets/messageIconFix.png" alt="message icon" />
                <p class="icons-middletext">Social Interaction</p>
              </div>
      
              <div class="container-icons-middleicon">
                <img class="container-icons-middleimg" src="../assets/rocketIconFix.png" alt="rocket icon" />
                <p class="icons-middletext">Get Things Done</p>
              </div>
            </div>
          </section>
</template>


<style scoped>

/*IMAGEN TELEFONO*/

.phone-image {
  display: flex;
  justify-content: center;
}

.phone-image img {
  width: 929px;
}

/*ANIMACION DE IMAGEN*/

.phone-image img:hover {
  transform: scale(1.2);
  transition: all 0.1s;
}

.container-icons-middle {
  display: flex;
  justify-content: space-evenly;
}

.container-icons-middleimg {
  align-self: center;
  width: 65px;
  height: 65px;
  margin: 0 auto;
  padding-top: 30px;
}

.container-icons-middleicon {
  display: flex;
  width: 120px;
  height: 120px;
  flex-direction: column;
  background-color: #ebe7fa;
  border-radius: 50%;
}

.container-middle {
  margin-top: 50px;
  margin-bottom: 200px;
}

.icons-middletext {
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  font-size: 1.125rem;
  line-height: 1.625rem;
  font-family: "Open Sans", sans-serif;
}

</style>