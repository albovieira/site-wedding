<template>
  <div>
    <b-container class="top">
      <b-row>
        <b-col cols="4">
          <b-card
                  img-src="/static/imgs/camila.jpeg"
                  img-alt="Camila Elias"
                  img-center>
              <p class="card-text text-center">
                  <strong>Camila Elias</strong>
              </p>
          </b-card>
        </b-col>
        <b-col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
          </b-col>
      </b-row>
      <b-row style="margin-top:4rem">
        <b-col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis ipsum. Nunc imperdiet est vitae lectus commodo, eu finibus eros tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan nulla vel tellus posuere, eget aliquet lectus malesuada. Sed tincidunt dolor id dignissim consequat. Aenean et ligula quam. Donec arcu lacus, sodales a bibendum sit amet, commodo sed tellus. Praesent in interdum est. Cras sit amet auctor turpis, at sagittis justo. Phasellus ut commodo quam. Donec in dui vulputate, posuere odio at, faucibus metus. Suspendisse nec justo eleifend, porttitor orci eget, viverra lacus.</p>
        </b-col>
        <b-col cols="4">
          <b-card
                  img-src="/static/imgs/albo.jpeg"
                  img-alt="Albo Vieira"
                  img-center>
              <p class="card-text text-center">
                  <strong>Albo Vieira</strong>
              </p>
          </b-card>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';

.card {
  background-repeat: no-repeat;
  padding: 1rem;
  background-color: #cccccc26;
  background-repeat: no-repeat;
  padding: 1rem;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
}
.card-img {
  width: 100%;
  height: 20rem;
}
p {
  font-size: 1.3rem;
  text-align: justify;
}
</style>

