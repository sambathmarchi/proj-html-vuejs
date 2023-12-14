<script>

</script>


<template>
    <div class="bg">
        <span>Commence Business</span>
        <span>Distant Mentoring Program</span>
        <button class="freebutton"><span>Download free guidebook <i class="fa-solid fa-arrow-right"></i></span></button>
    </div>
</template>


<style>
    .bg{
        background-image: url(../assets/img/home-3-hero-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 700px;
        width: 100%;
       color: white;
       font-size: 40px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       text-align: center;

    }

.sponsors>img:hover {
    filter: brightness(50%);
    transition-duration: 0.3s;
}
.freebutton {
    background-color:white;
    text-align: center;
    padding: 16px 0;
    border-radius: 10px;
    width: 250px;
    border-color: transparent;
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
}

.freebutton:hover {
    background-color: #20AD96;
    color: white;
    transition-duration: 0.3s;
}


</style>