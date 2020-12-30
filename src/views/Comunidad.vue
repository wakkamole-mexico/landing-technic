<template>
    <v-container ref="contentv" fluid>
        <v-row justify="space-around">
            <v-card
                    outlined
                    color="black"
                    class="pa-2"
                    :elevation="10"
                    :width="$vuetify.breakpoint.mdAndUp?'60%':'85%'"
            >
                <v-card-text style="background-color: white">
                    <div class="font-blink text-center font-weight-bold texto-azul-fuerte ma-6" style="font-size: 3em; line-height: 1em">¿Ya conoces nuestra comunidad?</div>
                    <div class="font-blink text-center font-weight-bold texto-azul-claro ma-4" style="font-size: 2em; line-height: 1em;">Encuéntranos en</div>
                    <div class="font-blink text-center font-weight-black black--text ma-4" style="font-size: 1.5em; line-height: 1em">facebook.com/</div>
                </v-card-text>
                <v-img max-width="80" style="position: absolute; left: -15px; bottom: -15px" src="/img/png-06.png"></v-img>
            </v-card>
        </v-row>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600"
        >
            <v-card>
                <v-card-title class="headline">
                    Política de Cookies
                </v-card-title>
                <v-card-text>
                    En esta web se utilizan cookies de terceros y propias para conseguir
                    que tengas una mejor experiencia de navegación, si permanece aquí acepta su uso.
                    Puede leer más sobre el uso de cookies en nuestra <a href="/privacidad">política de privacidad</a>.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="aceptar()"
                    >
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-img style="position: absolute; bottom: 0px; left: 0px; z-index: 2"
                    max-width="100"
                    src="/img/png-16.png"></v-img>
            <v-img style="position: absolute; bottom: 0px; right: 0px; z-index: 2"
                   max-width="100"
                   src="/img/png-14.png"></v-img>
            <v-img class="animated-mario"
                   max-width="50"
                   src="/img/png-12.png"></v-img>
        </template>
    </v-container>
</template>

<script>

export default {
  name: "Home",
  mixins: [],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      model: null,
      sets: [
          {
              id: 1,
              img: '/img/sets/71360.jpg',
              url: 'https://www.juguetron.mx/productos/103471360?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471360-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471360-0'
          },
          {
              id: 2,
              img: '/img/sets/71361.jpg',
              url: 'https://www.juguetron.mx/productos/103471361?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471361-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471361-0'
          },
          {
              id: 3,
              img: '/img/sets/71362.jpg',
              url: 'https://www.juguetron.mx/productos/103471362?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471362-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471362-0'
          },
          {
              id: 4,
              img: '/img/sets/71363.jpg',
              url: 'https://www.juguetron.mx/productos/103471363?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471363-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471363-0'
          },
          {
              id: 5,
              img: '/img/sets/71363.jpg',
              url: 'https://www.juguetron.mx/productos/103471364?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471364-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471364-0'
          },
          {
              id: 6,
              img: '/img/sets/71366.jpg',
              url: 'https://www.juguetron.mx/productos/103471366?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471366-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471366-0'
          },
          {
              id: 7,
              img: '/img/sets/71367.jpg',
              url: 'https://www.juguetron.mx/productos/103471367?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471367-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471367-0'
          },
          {
              id: 8,
              img: '/img/sets/71368.jpg',
              url: 'https://www.juguetron.mx/productos/103471368?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471368-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471368-0'
          },
          {
              id: 9,
              img: '/img/sets/71369.jpg',
              url: 'https://www.juguetron.mx/productos/103471369?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471369-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471369-0'
          },
          {
              id: 10,
              img: '/img/sets/71370.jpg',
              url: 'https://www.juguetron.mx/productos/103471370?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471370-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471370-0'
          },
          {
              id: 11,
              img: '/img/sets/71371.jpg',
              url: 'https://www.juguetron.mx/productos/103471371?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471371-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471371-0'
          },
          {
              id: 12,
              img: '/img/sets/71372.jpg',
              url: 'https://www.juguetron.mx/productos/103471372?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471372-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471372-0'
          },
          {
              id: 13,
              img: '/img/sets/71373.jpg',
              url: 'https://www.juguetron.mx/productos/103471373?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471373-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471373-0'
          }
      ]
  }),
  created() {},
  mounted() {
  },
  computed: {
  },
  watch: {},
  methods: {

  }
};
</script>
