<template>
    <v-container ref="contentv" fluid class="fill-height">
        <v-row justify="space-around">
            <v-card class="ma-0 pa-0 white">
                    <v-card-text class="ma-0 pa-0">
                        <video-player class="video-player-box"
                                      ref="videoPlayer"
                                      :options="playerOptions"
                                      :playsinline="true">
                        </video-player>
                    </v-card-text>
            </v-card>
        </v-row>
        <v-row justify="space-around" class="mb-12">
            <v-card
                    color="transparent"
                    class="pa-2 mt-12"
                    flat
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
                    style="height: calc(100vh - 140px)"
            >
                <v-card-text class="mb-12">
                    <v-row>
                        <v-col cols="12" class="mt-12">
                            <div class="text-center font-blink white--text font-weight-bold mb-4" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000':'font-size: 2em; line-height: 1em; text-shadow: 2px 2px 4px #000000'">
                                ¡Bienvenido a la primera fase del</div>
                            <div class="text-center font-blink white--text font-weight-bold mb-4" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000':'font-size: 2em; line-height: 1em; text-shadow: 2px 2px 4px #000000'">
                                Grand Prix! Recuerda que el rally tendrá tres fases, para ganar deberás participar y cumplir los requisitos de las tres fases.</div>
                        </v-col>
                        <v-col cols="12" class="mt-12">
                            <div class="text-center font-blink white--text font-weight-bold mb-4" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000':'font-size: 2em; line-height: 1em; text-shadow: 2px 2px 4px #000000'">Participa escogiendo entre estos dos interactivos</div>
                        </v-col>
                        <v-col cols="12" md="6" class="px-12">
                            <a href="https://a.cstmapp.com/p/901390" target="_blank">
                                <v-img :width="$vuetify.breakpoint.mdAndUp?'60%':'80%'" src="/img/auto.png" class="mx-auto" style="cursor:pointer;"></v-img>
                            </a>
                        </v-col>
                        <v-col cols="12" md="6" class="px-12">
                            <a href="https://a.cstmapp.com/promotions/901192" target="_blank">
                                <v-img :width="$vuetify.breakpoint.mdAndUp?'60%':'80%'" src="/img/piloto.png" class="mx-auto" style="cursor:pointer;"></v-img>
                            </a>
                            <div v-if="$vuetify.breakpoint.smAndDown" style="height: 30px; width: 100%; color: #FFF"></div>
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
    </v-container>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
export default {
  name: "Home",
  mixins: [],
  components: {
      videoPlayer
  },
  data: () => ({
      var: false,
      dialog: false,
      playerOptions: {
          // videojs options
          autoplay: false,
          muted: false,
          language: 'es',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
              type: "video/mp4",
              src: "/video/technic.mp4"
          }],
          width: '',
          height: 100,
      }
  }),
  created() {},
  mounted() {
      this.calcularVideo();
      window.addEventListener('resize', this.myEventHandler)
      //this.playerOptions.width = 80 * window.innerWidth / 100;

      this.dialog = true;
  },
  computed: {
      player() {
          return this.$refs.videoPlayer.player
      }
  },
  watch: {},
  methods: {
      calcularVideo(){
          if(this.$vuetify.breakpoint.width>1200){
              this.playerOptions.width = '';
              this.playerOptions.height = window.innerHeight - 200;
          }else{
              this.playerOptions.height = '';
              this.playerOptions.width = 90 * window.innerWidth / 100;
          }
      },
      aceptar(){
          this.dialog = false;
          this.player.play();
      },
      myEventHandler(e) {
          this.calcularVideo();
      }
  }
};
</script>
<style>
    .vjs-big-play-button{
        top: calc(50% - 20px) !important;
        left: calc(50% - 45px) !important;
    }
</style>
