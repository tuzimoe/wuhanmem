<template>
  <v-app id="inspire" class="noto">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>首页 </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/submit">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>提交</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>武汉记忆</v-toolbar-title>
    </v-app-bar>

    <v-content>
     <router-view/>
    </v-content>
    <v-footer color="black" app>
      <span class="white--text">&copy; 2020 每一个有记忆的人</span>
    </v-footer>
  </v-app>
</template>

<script>
import './theme/noto.scss'
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss">
.v-application {
  font-family: 'Noto Serif SC', serif !important;
  //  .title { // To pin point specific classes of some components
  //     font-family: 'Noto Serif TC', serif !important;
  //  }
}
</style>