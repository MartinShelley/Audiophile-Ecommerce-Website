<template>
  <section id="productCategoryNav">
    <div class="productCategoryCard">
      <img
        class="productCategoryImg"
        src="./../../assets/shared/desktop/image-headphones.png"
      />
      <h6 class="productCategoryLabel">Headphones</h6>
      <ButtonThree></ButtonThree>
    </div>
    <div class="productCategoryCard">
      <img
        class="productCategoryImg"
        src="./../../assets/shared/desktop/image-speakers.png"
      />
      <h6 class="productCategoryLabel">Speakers</h6>
      <ButtonThree></ButtonThree>
    </div>
    <div class="productCategoryCard">
      <img
        class="productCategoryImg"
        src="./../../assets/shared/desktop/image-earphones.png"
      />
      <h6 class="productCategoryLabel">Earphones</h6>
      <ButtonThree></ButtonThree>
    </div>
  </section>
</template>

<script>
import ButtonThree from "../UI/buttons/ButtonThree.vue";
export default {
  components: { ButtonThree },
};
</script>

<style scoped lang="scss">
#productCategoryNav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  margin: 160px 0 60px;

  .productCategoryCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(0deg, #f1f1f1 75%, #fff 25%);
    border-radius: 8px;

    .productCategoryImg {
      height: 160px;
      width: auto;
    }
    .productCategoryLabel {
      margin: 0 0 15px;
      text-transform: uppercase;
    }
  }

  .productCategoryCard:hover {
    cursor: pointer;
  }
}
</style>