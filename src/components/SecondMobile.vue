<template>
        <section class="bottom-phone-section">
            <div class="bottom-phone-divimage">
            <img src="images/download-iphone.png" alt=""></div>
            <div class="p-div">
                <p>Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development</p>
            </div>
            <div class="download-buttons-div">
                <button>    
                    <p>Download</p><DownloadLogo1/></button>
                <button>
                    <p>Download</p><DownloadLogo2/></button>
            </div>
        </section>

</template>

<style scoped>
.bottom-phone-section {
  padding-top: 8rem;
  background-color: #f7fafd;
  text-align: center;
}

.bottom-phone-divimage {
  display: flex;
  justify-content: center;
}

.bottom-phone-divimage img {
  width: 929px;
}

.p-div {
  width: 51rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1.75rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #777;
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