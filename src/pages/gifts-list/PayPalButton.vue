<template>
  <div class="container-btn" >
    <img class="img" :src="this.img" />
    <p class="item">{{this.name}}</p>
      <p class="price">{{this.price}}</p>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="encrypted" :value="this.certificate">
          <button class="btn btn-success d-flex" name="submit" type="submit"><icon name="shopping-cart"></icon> <span>Adicionar ao Carrinho</span></button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'PayPalButton',
  components: {},
  props: ['name', 'price', 'certificate', 'img'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.d-flex {
  display: flex;
  svg {
    align-self: center;
  }
  span {
    align-self: center;
    padding-left: 0.5rem;
  }
}

.item {
  font-weight: bold;
}
.price {
  font-weight: bold;
  font-size: 1.5rem;
}
img {
  align-self: center;
  width: 10rem;
  height: 10rem;
  margin-bottom: 1rem;
  @include media-breakpoint-down(md) {
    padding: 1rem;
  }
}
</style>

