<template>
    
            <section class="reviews-section">
                <h2>User Testimonials</h2>
            
            <article class="review-article">
                <div>
            <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div>
                <p class="review">I love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills.</p>
                <p class="strong"><strong>Rick Jones - Designer</strong></p>
            </div>
            </article>
            <article class="review-article">
            <div>
                <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div>
                <p class="review">After trying out a large number of personal coaching apps I decided to give Sync a try and what a wonderful surprise it was.</p>
                <p class="strong"><strong>Rick Jones - Designer</strong></p>
            </div>
        </article>
        <article class="review-article">
            <div>
                <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div class="div-review">
                <p class="review">Never dreamed I could learn so fast how to focus on my personal goals and improve my life to levels I never thought possible.</p>
                <p class="strong">Jay Frisco - Marketer</p>
            </div>
        </article>

            <div class="images-container">
                <img  class="brand-images" src="images/customer-logo-1.png" alt="Primester">
                <img  class="brand-images" src="images/customer-logo-2.png" alt="GreenApp">
                <img  class="brand-images" src="images/customer-logo-3.png" alt="Voltmeter">
                <img  class="brand-images" src="images/customer-logo-4.png" alt="Keyrunner">
                <img  class="brand-images" src="images/customer-logo-5.png" alt="Amplifier">
            </div>
            <article class="review-article">
            <div>
                <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div >
                <p class="review">I got so much value from using Sync in my daily life for which I am very grateful and would recommend it to everybody.</p>
                <p class="strong"><strong>Frank Gibson - Manager</strong></p>
            </div>
        </article>
        <article class="review-article">
            <div>
                <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div >
                <p class="review">If you have great goals but can't figure out a way to keep focused then you should definitely give Sync a try and see the results.</p>
                <p class="strong"><strong>Rita Longmile - Designer</strong></p>
            </div>
        </article>
        <article class="review-article">
            <div>
                
                <img class="stars" src="images/iconoEstrellasFix.png" alt="puntuacion de cinco estrellas">
            </div>
            <div >
                <p class="review">I've been looking for a great organizer app for such a long time but now I am really happy that I found Sync. It's beeen working great.</p>
                <p class="strong" ><strong>Jones Smith - Developer</strong></p>
            </div>
        </article>
            </section>
        <section class="users-container">
            <div class="containers 1">
                <img class="users-images" src="images/usersIconFix.png" alt="">
                <span class="span">231</span>
                <p>Happy Users</p>
            </div>
            <div class="containers 2"><img class="users-images" src="images/keyIconFix.png" alt="">
                <span class="span">231</span>
                <p>Issues Solved</p></div>
            <div class="containers 3"><img class="users-images" src="images/gearIconFix.png" alt="">
                <span class="span">231</span>
                <p>Good Reviews</p></div>
            <div class="containers 4"><img class="users-images" src="images/messageIconFix.png" alt="">
                <span class="span">231</span>
                <p>Case Studies</p></div>
            <div class="containers 5"><img class="users-images" src="images/rocketIconFix.png" alt="">
                <span class="span">231</span>
                <p>Orders Received</p></div>
        </section>
        
    
</template>


<style scoped>
  .reviews-section {
  padding-top: 7rem;
  padding-bottom: 3rem;
  background-color: #f7fafd;
  text-align: center;
  color: #777;
}

.reviews-section h2 {
  margin-bottom: 3.25rem;
  font-size: 2.5rem;
  line-height: 3.25rem;
  color: #333;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
}

.stars {
  filter: invert(68%) sepia(98%) saturate(885%) hue-rotate(348deg)
    brightness(100%) contrast(102%);
  width: 140px;
}

.review {
  margin-bottom: 0.625rem;
  font-style: italic;
  font-family: "Open Sans", sans-serif;
  color: #777;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
}

.strong {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
  font-family: "Open Sans", sans-serif;
}

.review-article {
  margin-bottom: 4.75rem;
  padding: 0;
  width: 21rem;
  margin-right: 1.375rem;
  margin-left: 1.375rem;
  display: inline-block;
}

.images-container {
  margin-bottom: 5.25rem;
  padding: 2.5rem 2rem 0 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  text-align: center;
}

.brand-images {
  margin: 20px;
}

/*USERS COUNTER SECTION*/

.users-container {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  padding-bottom: 5rem;
  background-color: #e8eff6;
  text-align: center;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  line-height: 1.75rem;
  font-size: 1rem;
  width: 100%;
  
  margin-right: auto;
  margin-left: auto;
}

.containers {
  align-items: center;
  margin-right: 2.375rem;
  margin-left: 2.375rem;
  width: 8.25rem;
}

.users-images {
  width: 60px;
  height: 50px;
}
.span {
  color: #333;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.875rem;
}
</style>