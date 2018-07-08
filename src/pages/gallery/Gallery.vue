<template>
  <div>
    <b-container class="top">
      <h1 class="main-title">Fotos</h1>
      <div class="container-gallery">
          <silentbox-group>
            <silentbox-item v-for="n in 36" :key="n"  :src="`/static/imgs/gallery/${n}.jpeg`">
                <img :src="`/static/imgs/gallery/${n}.jpeg`">
            </silentbox-item>
          </silentbox-group>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.main-title {
  margin-bottom: 0rem !important;
}
.container-gallery {
  // box-shadow: 1px 0px 8px #ccc;
  // padding: 2rem;
}
#silentbox-group {
  text-align: center;

  img {
    padding: 2px;
    width: 20rem;
    height: 20rem;
    margin: 1.5rem;
    border: #54505469 solid 3px;
    @include media-breakpoint-down(md) {
      margin: 0rem;
      margin-top: 1rem;
    }
  }
}
</style>

