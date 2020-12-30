<template>
    <v-app>
        <v-app-bar elevation="0" style="background-color: rgb(0,0,0,.8);" inverted-scroll app height="80">
            <div :style="$vuetify.breakpoint.mdAndUp?'width: 200px;':'width: 140px;'">
                <v-img src="/img/technic.png"></v-img>
            </div>
            <v-spacer />
            <div :style="$vuetify.breakpoint.mdAndUp?'width: 180px;':'width: 120px;'">
                <v-img src="/img/juguetron.png"></v-img>
            </div>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main style="background-color: #000; background-image: url('/img/back.png');background-size: 100%;">
            <!-- Provides the application the proper gutter -->
            <v-container fluid class="fill-height">

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer dark app fixed style="background-color: #000; background-image: url('/img/footer.png'); background-size: 100%; background-repeat: no-repeat;">
            <v-col
                    class="text-left font-blink py-0"
                    cols="12" md="6"
            >
                {{ new Date().getFullYear() }} <strong>Juguetron. All Rights Reserved.</strong>
            </v-col>
            <v-col cols="12" md="6" class="text-right font-blink py-0">
                <v-btn
                        color="white"
                        text
                        rounded
                        :to="{name: 'Privacidad'}"
                >
                    Aviso de Privacidad
                </v-btn>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "Home",
        mixins: [],
        components: {},
        data: () => ({
            drawer: false,
            var: false,
            activeTab: `Home`,
            tabs: [
                { id: 1, name: "Home", route: `Home` },
                { id: 2, name: "Sets", route: `Sets` },
                { id: 3, name: "Comunidad", route: `Comunidad` },
                { id: 4, name: "Mundos Exclusivos", route: `Mundos` },
                { id: 5, name: "Instant Delivery", route: `Instant` },
                { id: 6, name: "Spotify", route: `Spotify` },
            ]
        }),
        created() {},
        mounted() {},
        computed: {},
        watch: {},
        methods: {}
    };
</script>
<style>
    .font-blink {
        font-family: "Blinker" !important;
    }
</style>