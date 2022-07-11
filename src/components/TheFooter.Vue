<template>
  <footer>
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
    </nav>
    <div class="footer-body">
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="footer-social-icons">
        <img src="../assets/shared/desktop/icon-facebook.svg" />
        <img src="../assets/shared/desktop/icon-twitter.svg" />
        <img src="../assets/shared/desktop/icon-instagram.svg" />
      </div>
      <p class="footer-copyright">Copyright 2021. All Rights Reserved</p>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
footer {
  background-color: #000;
  margin-top: 160px;
  height: 365px;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 165px;
    padding: 75px 0 36px;
    max-width: 1110px;

    ul {
      display: flex;
      margin: 0;

      li {
        margin-right: 34px;
        list-style-type: none;

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
      }

      li:nth-child(4) {
        margin-right: 0;
      }
    }
  }
  .footer-body {
    margin: 0 165px;
    display: grid;
    grid-template-columns: 46% 54%;
    grid-template-rows: 1fr auto;
    row-gap: 56px;
    max-width: 1110px;

    p {
      opacity: 0.5;
      color: #fff;
      margin-bottom: 0;
    }

    .footer-social-icons {
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 16px;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>