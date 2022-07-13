<template>
  <!-- TO DO 
Create Button Components
Make Home Page Responsive
Mobile Nav


-->
  <main>
    <section class="hero">
      <div>
        <p class="subTitle">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p class="heroDescription">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOne></ButtonOne>
      </div>
    </section>
    <div class="container">
      <ProductCategoriesNav></ProductCategoriesNav>
      <div class="productBanners">
        <div class="zx9-speaker">
          <img src="../assets/home/desktop/image-speaker-zx9.png" />
          <div class="zx9-speaker-content">
            <h1>ZX9 Speaker</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>See Product</button>
          </div>
        </div>
        <div class="zx7-speaker-banner">
          <div>
            <h4>zx7 speaker</h4>
            <ButtonTwo>See Product</ButtonTwo>
          </div>
        </div>
        <div class="yx1-earphones-banner">
          <div class="yx1-earphones-image">
            <img src="../assets/home/desktop/image-earphones-yx1.jpg" />
          </div>
          <div class="yx1-earphones-text">
            <h4>yx1 earphones</h4>
            <ButtonTwo></ButtonTwo>
          </div>
        </div>
      </div>
      <ShopIntro></ShopIntro>
    </div>
  </main>
</template>


<script>
import ProductCategoriesNav from "../components/ProductCategories/ProductCategoriesNav.vue";
import ShopIntro from "../components/ShopIntroBanner/ShopIntro.vue";
import ButtonOne from "@/components/UI/buttons/ButtonOne.vue";
import ButtonTwo from "@/components/UI/buttons/ButtonTwo.vue";
export default {
  components: { ProductCategoriesNav, ShopIntro, ButtonOne, ButtonTwo },
};
</script>


<style lang="scss" scoped>
main {
  .hero {
    color: #fff;
    background-image: url("../assets/home/desktop/image-hero.jpg");
    background-position: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);

    div {
      display: flex;
      flex-direction: column;
      max-width: 398px;
      margin-left: 165px;
      padding: 225px 0 158px;

      .subTitle {
        opacity: 0.5;
      }

      h1 {
        text-transform: uppercase;
      }

      .heroDescription {
        margin: 0;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.75;
      }

      button {
        margin-top: 40px;
        padding: 0;
      }
    }
  }

  .container {
    margin: 0 165px;
    max-width: 1110px;
    width: 100%;

    .zx9-speaker {
      height: 560px;
      margin-bottom: 48px;
      background-color: #d87d4a;
      background-image: url(../assets/home/desktop/pattern-circles.svg);
      background-repeat: no-repeat;
      background-position: -205% 10%;
      background-size: 90%;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 148px;

      img {
        max-height: 470px;
        position: relative;
        top: 57px;
        left: 80px;
      }

      .zx9-speaker-content {
        max-width: 349px;
        color: #fff;

        h1 {
          margin: 0 0 24px;
          text-transform: uppercase;
        }

        button {
          background-color: #000;
          border: 1px solid #000;
          color: #fff;
          height: 48px;
          width: 160px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 1px;
          margin-top: 40px;
        }

        button:hover {
          background-color: #4c4c4c;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      }
    }
    .zx7-speaker-banner {
      background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
      height: 320px;
      margin-block: 100px;
      display: flex;
      align-items: center;

      div {
        padding-left: 95px;

        h4 {
          text-transform: uppercase;
          margin-top: 0;
        }
      }
    }
    .yx1-earphones-banner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 200px;

      div {
        img {
          border-radius: 8px;
        }
      }

      .yx1-earphones-text {
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 95px;
        border-radius: 8px;

        h4 {
          text-transform: uppercase;
          margin-top: 0;
        }

        button {
          width: 160px;
          height: 48px;
          text-transform: uppercase;
          font-weight: 700;
          border: 1px solid #000;
        }
      }
    }
  }
}
</style>