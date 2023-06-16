<script setup>  
</script>

<template>
<section class="section-calendar">
            <article class="article-calendar">
            <div class="calendar-buttons-div">
                    <button>
                        <div class="button-inside">
                        <svg class="icon-button-calendar" xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 12l3 2" />
                        <path d="M12 7v5" />
                        </svg>Schedule
                    </div>
                    </button>
                    <button>
                        <div class="button-inside">
                        <svg class="icon-button-calendar" xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l11 0" />
                        <path d="M9 12l11 0" />
                        <path d="M9 18l11 0" />
                        <path d="M5 6l0 .01" />
                        <path d="M5 12l0 .01" />
                        <path d="M5 18l0 .01" />
                        </svg>Tracking
                    </div>
                    </button>
                    <button>
                        <div class="button-inside">
                        <svg class="icon-button-calendar" xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M16 3l0 4" />
                        <path d="M8 3l0 4" />
                        <path d="M4 11l16 0" />
                        <path d="M8 15h2v2h-2z" />
                        </svg>Organize
                    </div>
                    </button>
            </div>
            <div class="calendar-text-div">
                <p><strong>Schedule tasks</strong> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p>
                <div class="div-checkiocns">

                </div>
                <ul class="ul-calendar">
                    <li  class="checkicon-box"><img class="checkicon" src="../assets/checkIcon.png"> You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel</li>
                    <li class="checkicon-box"><img class="checkicon" src="../assets/checkIcon.png">It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals</li>
                    <li class="checkicon-box"><img class="checkicon" src="../assets/checkIcon.png">Use phone reminders to free up your long term memory which will reduce stress and make you more productive</li>
                </ul>
            </div>
            <div class="buttons-typ-div">
                <button class="terms">
                    Terms
                </button>
                <button class="privacy">
                    Privacy
                </button>
            </div>
        </article>
            <div class="calendar-img-div">
                <img class="calendar" src="../assets/description-2-app.png" alt="calendario">
            </div>
        </section>

</template>

<style scoped>
.section-calendar {
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: #e8eff6;
  font-family: "Open Sans", sans-serif;
  line-height: 1.75rem;
  font-weight: 400;
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-calendar {
  margin-top: 6rem;
  margin-right: -34.5rem;
}

.calendar-buttons-div {
  margin-bottom: 1.125rem;
}
.button-inside {
  display: flex;
  align-items: center;
}

.calendar-buttons-div button {
  border: 1px solid transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 0;
  background-color: #fff;
  color: #777;
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
  align-items: center;
  stroke: #777;
}

.calendar-buttons-div button:hover {
  background-color: #9a67e7;
  color: #fff;
}

.calendar-buttons-div button:hover svg {
  stroke: #fff;
}

.icon-button-calendar {
  align-items: center;
  width: 22px;
  height: 22px;
  padding: 0px 5px;
}

.checkicon {
  width: 22px;
  height: 22px;
  filter: invert(56%) sepia(95%) saturate(370%) hue-rotate(111deg)
    brightness(96%) contrast(93%);
  padding: 10px;
  margin-right: 0.375rem;
}
.calendar-text-div {
  max-width: 50%;
}

.ul-calendar {
  list-style: none;
  padding-left: 0;
}

.checkicon-box {
  display: flex;
  padding: 10px;
}

.buttons-typ-div {
  display: flex;
}
.terms {
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
.terms:hover {
  border: 0.125rem solid #ff556e;
  background-color: transparent;
  color: #ff556e;
  text-decoration: none;
}

.privacy {
  padding: 25px 40px;
  border: 2px solid black;
  border-radius: 28px;
  background-color: #e8eff6;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  line-height: 0px;
  margin: 5px;
  align-items: center;
}
.privacy:hover {
  border: 0.125rem solid #fff;
  background-color: black;
  color: #fff;
  text-decoration: none;
}
.calendar-img-div {
  margin-left: 150px;
}

.calendar {
  width: 500px;
}

</style>