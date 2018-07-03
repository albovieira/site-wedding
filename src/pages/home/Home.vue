<template>
  <div>
    <b-container class="top">
      <h1 class="main-title">Nossa História</h1>
      <b-row>
        <b-col lg="4" sm="12">
          <b-card
                  img-src="/static/imgs/camila.jpeg"
                  img-alt="Camila Elias"
                  img-center>
              <div class="card-text text-left">
                  <p class="text-center"><strong>Camila Elias</strong></p>
                  <small>
                    Camila, belo-horizontina, 26 anos, geminiana, design, temperamento forte, opniões formadas, fã de Star Wars, The Walking Dead e Harry Potter.
                  </small>
              </div>
          </b-card>
        </b-col>
        <b-col>
            <p>
              Nos conhecemos em junho de 2010 e depois de tantas confusões e brigas finalmente começamos a nos entender em outubro de 2011, graças a série “The Walking Dead”.
            </p>
            <p>
              Depois de muito tempo, nos encontramos no Festival de Quadrinhos de Belo Horizonte/MG, onde percebemos algo de interessante um no outro.
            </p>
            <p>Albo não perdeu tempo, tratou logo de deixar bem claro seus interesses e intenções para mim e em dezembro de 2011 ele fez o tão esperado pedido de namoro (Depois de MUITA enrolação).</p>
            <p>
              Daí em diante não demorou muito para crescer o desejo de nos casarmos e ficarmos juntinhos. Nos organizamos, fizemos planos, juntamos grana e decidimos a data do casamento, tudo isso demorou mais de três anos para acontecer (Foi sofrido! KKKK)
            </p>
            <p>
              Contudo, o pedido de casamento não havia sido feito ainda. Eu já não aguentava mais esperar, então, com a ajudinha de alguns cupidos Albo finalmente o fez em 07 de janeiro de 2017 (Agradecimento especial aos cupidinhos =)
            </p>
            <p>
              Mais de um ano depois, o tão esperado e sonhado grande dia está cada vez mais próximo e esses dois corações se enchem de alegria, euforia e ansiedade a cada segundo que passa da contagem regressiva! (Misericórdia! Passa logo! KKKK)
            </p>


        </b-col>
      </b-row>
      <b-row style="margin-top:2rem">
        <b-col>
            <p>
              Esperamos que vocês se sintam importantes e parte dessa linda história, pois, cada um foi escolhido a dedo por fazer a diferença em nossas vidas.
            </p>
            <p>
              Criamos esse site para reunir de forma simples e fácil tudo que vocês precisam saber sobre nosso grande dia, desejamos que essa experiência seja tão empolgante e emocionante para vocês quanto está sendo para nós.
            </p>
            <p>
              <strong>Agradecemos por serem uma parte de um todo!</strong>
            </p>

          <div class="quote-container">
            <blockquote><p>E, acima de tudo, tenham amor. Pois o amor une perfeitamente todas as coisas.</p></blockquote>
            <small><strong>Colossences 3.14</strong></small>
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <b-card
                  img-src="/static/imgs/albo.jpeg"
                  img-alt="Albo Vieira"
                  img-center>
              <div class="card-text text-left">
                  <p class="text-center"><strong>Albo Vieira</strong></p>
                  <small>
                    Albo com B, capixaba, 28 anos, capricorniano, programador, mundo da lua, engraçado, fã de Star Wars, Walking Dead , cinema  e cultura pop.
                  </small>
              </div>
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
  @include media-breakpoint-down(md) {
    font-size: 1rem !important;
  }
}
.card-img {
  width: 100%;
  height: 15rem;
  @include media-breakpoint-down(md) {
    height: 10rem !important;
  }
}
p {
  font-size: 1.3rem;
  text-align: justify;
  @include media-breakpoint-down(md) {
    margin-top: 1rem;
    font-size: 0.8rem !important;
  }
}

.quote-container {
  margin-top: 2rem;
}
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: '\201C' '\201D' '\2018' '\2019';
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
  font-size: 1.4rem;
}

small {
  font-size: 0.8rem;
}
</style>

