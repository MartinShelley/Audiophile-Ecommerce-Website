<template>
  <main>
    <section class="hero">
      <div>
        <p class="subTitle">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p class="heroDescription">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button class="default1">See Product</button>
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
          <!-- <img src="../assets/home/desktop/image-speaker-zx7.jpg" /> -->
          <div>
            <h4>zx7 speaker</h4>
            <button>See Product</button>
          </div>
        </div>
        <div class="yx1-earphones-banner">
          <div class="yx1-earphones-image">
            <img src="../assets/home/desktop/image-earphones-yx1.jpg" />
          </div>
          <div class="yx1-earphones-text">
            <h4>yx1 earphones</h4>
            <button>See Product</button>
          </div>
        </div>
      </div>
      <div class="audiophile-intro">
        <div class="audiophile-intro-content">
          <h2>Bringing you the <span>best</span> audio gear</h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div class="audiophile-into-image">
          <img src="../assets/shared/desktop/image-best-gear.jpg" />
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import ProductCategoriesNav from "../components/productCategories/ProductCategoriesNav.vue";

export default {
  components: { ProductCategoriesNav },
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

      button.default1 {
        margin-top: 40px;
        text-transform: uppercase;
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

        button {
          background-color: transparent;
          width: 160px;
          height: 48px;
          color: #000;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
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
        }
      }
    }

    .audiophile-intro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 125px;

      .audiophile-intro-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          text-transform: uppercase;

          span {
            color: #d87d4a;
          }
        }
        p {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>