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
.container-gallery {
  // box-shadow: 1px 0px 8px #ccc;
  // padding: 2rem;
}
#silentbox-group {
  text-align: center;

  img {
    margin: 0 2rem 0 0;
    padding: 2px;
    width: 20rem;
    height: 20rem;
  }
}
</style>

