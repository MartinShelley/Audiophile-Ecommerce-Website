<template>
  <main>
    <section>
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
  </main>
</template>


<script>
</script>


<style lang="scss" scoped>
section {
  color: #fff;
  background-image: url(http://localhost:8080/img/image-hero.149b597b.jpg);
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
</style>