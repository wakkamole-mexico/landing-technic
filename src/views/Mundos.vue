<template>
    <v-container ref="contentv" fluid >
        <v-row justify="space-around">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
            >
                <v-card-text style="background-color: rgb(255,255,255,.2)">
                    <v-row>
                        <v-col cols="12" md="6" class="pb-0">
                            <v-row>
                                <v-col cols="12" class="mb-0">
                                    <div class="text-center font-blink white--text font-weight-bold" style="font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000">Regístrate y disfruta del contenido exclusivo que Mario tiene para ti</div>
                                </v-col>
                                <v-col cols="12" class="pt-6">
                                    <v-img class="hidden-sm-and-down" contain max-height="280" src="/img/png-04.png"></v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card
                                    outlined
                                    color="black"
                                    class="pa-2 fill-height"
                                    :elevation="10"
                            >
                                <v-card-text class="fill-height px-10" style="background-color: white">
                                    <v-form ref="formJoin">
                                        <v-row class="fill-height">
                                            <v-col cols="12">
                                                <div style="margin: auto; width: 100px;"><v-img align="center" contain max-width="100" src="/img/png-13.png"></v-img></div>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.nombre"
                                                        label="Nombre"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.apellido"
                                                        label="Apellidos"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.correo"
                                                        label="E-mail"
                                                        :rules="[rules.required, rules.email]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-dialog
                                                        ref="dialog"
                                                        v-model="modalFn"
                                                        persistent
                                                        width="290px"
                                                >
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field
                                                                dense
                                                                :hide-details="
                                          $vuetify.breakpoint.smAndDown
                                        "
                                                                v-model="computedDateFormatted"
                                                                label="Tu cumpleaños"
                                                                hint="DÍA / MES / AÑO"
                                                                persistent-hint
                                                                append-icon="mdi-cake-variant"
                                                                readonly
                                                                v-on="on"
                                                                :rules="[rules.required]"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                            ref="picker"
                                                            v-model="formJoin.fechaNacimiento"
                                                            :max="
                                        new Date().toISOString().substr(0, 10)
                                      "
                                                            min="1950-01-01"
                                                            @change="modalFn = false"
                                                    ></v-date-picker>
                                                </v-dialog>
                                            </v-col>
                                            <v-col cols="12" class="text-center">
                                                <v-btn
                                                        color="error"
                                                        class="font-blink"
                                                        @click="join()"
                                                >
                                                    Registrarme
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
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
    import { RULES } from "../mixins/rules";
export default {
  name: "Home",
  mixins: [RULES],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      modalFn: false,
      model: null,
      formJoin: {
          nombre: "",
          apellido: "",
          correo: "",
          fechaNacimiento: ""
      },
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
      computedDateFormatted() {
          return this.formatDate(this.formJoin.fechaNacimiento);
      }
  },
  watch: {
      modalFn(val) {
          val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
      }
  },
  methods: {
      formatDate(date) {
          if (!date) return null;
          const [year, month, day] = date.split("-");
          return `${day}/${month}/${year}`;
      },
      join() {
          this.error = '';
          if (this.$refs.formJoin.validate()) {
              setTimeout(() => {
                  axios
                      .post("/functions/save.php", {
                          email: this.formJoin.correo,
                          name: this.formJoin.nombre,
                          birthday: this.formJoin.fechaNacimiento
                      })
                      .then(response => {
                          if (response.data.result) {
                          }else{
                              this.error = response.data.msg;
                          }
                      })
                      .catch(err => {
                          this.loading = false;
                      })
                      .finally(() => {
                          this.loading = false;
                      });
              }, 500);
          } else {
              console.log("errores en formulario");
          }
      },
  }
};
</script>
