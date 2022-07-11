<template>
  <header>
    <nav>
      <a href="/"><img src="../assets/shared/logo.svg" /></a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Headphones</a>
        </li>
        <li>
          <a href="/">Speakers</a>
        </li>
        <li>
          <a href="/">Earphones</a>
        </li>
      </ul>
      <a href="/"><img src="../assets/shared/desktop/icon-cart.svg" /></a>
    </nav>
  </header>
</template>


<style scoped>
/* * {
  background-color: black;
} */

header {
  width: 100%;
  position: absolute;
  top: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 165px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1110px;
}

ul {
  display: flex;
  margin: 0;
  padding: 32px 0 36px;
}

li {
  margin-right: 34px;
  list-style-type: none;
}

a {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
}
</style>