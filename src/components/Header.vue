<template>
 <div>
  <b-navbar  toggleable="sm" type="dark" class="menu">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/"><img class="logo" src="/static/imgs/logo-vivo.png" /></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/">Inicio</b-nav-item>
      <b-nav-item href="/users">Usuarios</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto" >
      <b-nav-item @click="logout">Logout</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>

</template>

<script>
import storage from '@/services/storage';
import swal from 'sweetalert';
import toastr from 'toastr';

export default {
  name: 'header',
  data() {
    return {
      name: '',
      lastname: ''
    };
  },
  created() {
    const user = storage.getUser();
    this.name = user.name;
    this.lastname = user.lastname;
  },
  methods: {
    logout() {
      swal({
        title: 'Confirma logout?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          storage.clear();
          toastr.success('Usuário deslogado');
          this.$router.replace('/');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/index.scss';
.menu {
  background-color: #fff;
  box-shadow: 1px 1px 1px #ccc;
}
.nav-item,
.nav-link,
em {
  color: black !important;
}
.logo {
  width: 50px;
  height: 50px;
}
</style>

