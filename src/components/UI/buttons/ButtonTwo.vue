<template>
  <button><slot>See Product</slot></button>
</template>

<style lang="scss" scoped>
button {
  background-color: transparent;
  width: 160px;
  height: 48px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid #000;
}

button:hover {
  cursor: pointer;
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
}
</style>