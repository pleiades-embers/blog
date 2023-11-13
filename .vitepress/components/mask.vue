<template>
  <section class="main">
    <video src="../../video/mask.mp4" autoplay loop muted type="mp4"></video>
    <img src="../../video/mask.jpg" alt="" class="mask">
    <span class="mask-text">embers</span>
  </section>
</template>

<style scoped>
.main{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* object-fit: cover; */
    user-select: none;
    mix-blend-mode: screen;
}
.main span{
    position: absolute;
    z-index: 2;
    font-style: 16vw !important;
    color: #fff;
    text-shadow: 0 20px 30px rgba(0, 0, 0, 0.2) ;
}

@media screen and (max-width:1200px) {
  .main .mask{
    display: none;
  }
  .main video{
    position: absolute;
    transform: rotate(90deg);
    width: 100vh;
    height: 100vw;
  }
} 


</style>
