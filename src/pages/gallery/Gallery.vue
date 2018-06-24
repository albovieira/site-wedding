<template>
  <div>
    <b-container class="top">
      <h1 class="main-title">Fotos</h1>
      <div class="container-gallery">
          <silentbox-group>
            <silentbox-item v-for="n in 37" :key="n"  :src="`/static/imgs/gallery/${n}.jpeg`">
                <img :src="`/static/imgs/gallery/${n}.jpeg`" height="200px" width="200px">
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
  box-shadow: 1px 0px 8px #ccc;
}
#silentbox-group {
  text-align: center;

  img {
    padding: 0 1rem 0 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>

