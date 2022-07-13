<template>
  <div class="shop-intro">
    <div class="shop-intro-content">
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="shop-into-image">
      <img src="../../assets/shared/desktop/image-best-gear.jpg" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.shop-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 125px;

  .shop-intro-content {
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
</style>