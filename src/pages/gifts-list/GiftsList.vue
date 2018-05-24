<template>
  <div>
    <Header></Header>
    <b-container class="top">
        <b-row>
          <b-col>
            <img class="img" src="/static/imgs/jogo_jantar.jpg" />
            <p class="item">Jogo de jantar</p>
            <p class="price">R$ 200,00</p>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
              ">
              <input type="image" src="https://www.paypalobjects.com/pt_BR/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
            </form>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'GifstList',
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.img{
  width:200px
}
.item{
  font-weight: bold
}
.price{
  font-weight: bold;
  font-size: 1.5rem
}
</style>

