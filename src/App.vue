<template>
  <router-view/>
</template>

<style lang="scss">
    * {
    margin: 0;
    padding: 0;
    border: 0;
}
html { overflow-y: scroll; }


img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-size: inherit;
}

b {
    font-size: inherit;
}

a {
    text-decoration: none;
}
@font-face {
    font-family: "Zametka_Parletter";
    src: url("../src/assets/fonts/Zametka_Parletter.otf");
}
@font-face {
    font-family: "FE MussyPussy";
    src: url("../src/assets/fonts/FEMussyPussy-Regular.otf");
}
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
$CallToAction: #A259FF;
$Secondary: #3B3B3B;


body {
    height: 100%;
    line-height: 1;
    font-size: 16px;
    color: #FFF;
    font-family: 'Zametka_Parletter';
}

.wrapper {
    min-height: 100%;
    overflow: hidden;
}

._container {
    max-width: 1430px;
    margin: 0px auto;
    padding: 0 15px;
    box-sizing: content-box; /* Сам прибавляет padding */
}
</style>
