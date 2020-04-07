<template>
  <div>
    <ipfs-info />
    <v-container fluid>
      <v-textarea
        label="你的武汉记忆"
        :value="story"
        :clearable="true"
        :outlined="true"
        v-model="story"
      ></v-textarea>
      Value: {{ story }}
    </v-container>

    <v-btn large @click.native="submit()" color="primary">提交</v-btn>
  </div>
</template>
<script>
import IpfsInfo from "../components/IpfsInfo.vue";
import VueIpfs from '../plugins/vue-ipfs';
import IPFS from 'ipfs'
export default {
  name: "app",
  components: {
    IpfsInfo,
  },
  data() {
    return {
      story: null,
      story_title: null,
      story_auth: null,
    };
  },
  methods: {
    async submit() {
      const story = this.$data.story
      // const node = IPFS.create();
      const files = await IPFS.add(story)
      console.log(files[0].hash)
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
