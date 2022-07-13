<template>
  <TheNavigation></TheNavigation>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";

export default { components: { TheNavigation, TheFooter } };
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

* {
  font-family: Manrope;
}

body {
  margin: 0;
}

h1 {
  font-size: 56px;
  letter-spacing: 2px;
  line-height: 58px;
  font-weight: 700;
}

h2 {
  font-size: 40px;
  letter-spacing: 1.5px;
  line-height: 44px;
  font-weight: 700;
}

h3 {
  font-size: 32px;
  letter-spacing: 1.15px;
  line-height: 36px;
  font-weight: 700;
}

h4 {
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 38px;
  font-weight: 700;
}

h5 {
  font-size: 24px;
  letter-spacing: 1.7px;
  line-height: 33px;
  font-weight: 700;
}

h6 {
  font-size: 18px;
  letter-spacing: 1.3px;
  line-height: 24px;
  font-weight: 700;
}

p {
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
}

.overline {
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
}

.subTitle {
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
}
</style>
