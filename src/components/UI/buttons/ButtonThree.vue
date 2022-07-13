<template>
  <div>
    <span class="productCategoryLink">Shop</span>
    <img
      class="linkArrow"
      src="./../../../assets/shared/desktop/icon-arrow-right.svg"
    />
  </div>
</template>


<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

div:hover {
  cursor: pointer;
}
.productCategoryLink {
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
}

.productCategoryLink:hover {
  color: #d87d4a;
}

.linkArrow {
  // width: 7px;
  padding-left: 10px;
}
</style>