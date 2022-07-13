<template>
  <button><slot>See Product</slot></button>
</template>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  background-color: #d87d4a;
  padding: 15px 30px;
  color: #fff;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  width: 160px;
  height: 48px;
  border: none;
}

button:hover {
  background-color: #fbaf85;
  cursor: pointer;
}
</style>