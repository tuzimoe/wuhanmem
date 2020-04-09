<template>
  <div>
    <ipfs-info />
    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :clearable="true"
          :outlined="true"
          label="标题"
          v-model="story_title"
          :rules="[(v) => !!v || '请输入标题 可以「无题」']"
        ></v-text-field>
        <v-text-field
          :clearable="true"
          :outlined="true"
          label="作者"
          v-model="story_auth"
          :rules="[(v) => !!v || '请输入标题 可以「佚名」']"
        ></v-text-field>
        <v-textarea
          label="你的武汉记忆"
          :clearable="true"
          :outlined="true"
          v-model="story"
          :rules="[(v) => !!v || '请输入内容']"
        ></v-textarea>
      </v-form>
      <!-- Title: {{ story_title }} Auth: {{ story_auth }} Story: {{ story }} -->
    </v-container>
    <v-btn block :disabled="!valid" @click.native="submit()" x-large dark>提交</v-btn>
  </div>
</template>
<script>
import IpfsInfo from "../components/IpfsInfo.vue";
import VueIpfs from "../plugins/vue-ipfs";
import IPFS from "ipfs";
export default {
  name: "app",
  components: {
    IpfsInfo,
  },
  data() {
    return {
      valid: false,
      story: null,
      story_title: null,
      story_auth: null,
    };
  },
  methods: {
    async submit() {
      const story = this.$data.story;
      // const node = IPFS.create();
      const files = await IPFS.add(story);
      console.log(files[0].hash);
    },
  },
};
</script>
