<template>
  <div>
    <!-- <ipfs-info /> -->
    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :clearable="true"
          :outlined="true"
          label="标题"
          v-model="formdata['story_name']"
          :rules="[(v) => !!v || '请输入标题 可以「无题」']"
        ></v-text-field>
        <v-text-field
          :clearable="true"
          :outlined="true"
          label="作者"
          v-model="formdata['story_auth']"
          :rules="[(v) => !!v || '请输入标题 可以「佚名」']"
        ></v-text-field>
        <v-textarea
          label="你的武汉记忆"
          :clearable="true"
          :outlined="true"
          v-model="formdata.story"
          :rules="[(v) => !!v || '请输入内容']"
        ></v-textarea>
      </v-form>
      <!-- Title: {{ story_title }} Auth: {{ story_auth }} Story: {{ story }} -->
    </v-container>
    <v-btn block :disabled="!valid" @click.native="submit()" x-large dark>提交</v-btn>
  </div>
</template>
<script>
// import IpfsInfo from "../components/IpfsInfo.vue";
// import VueIpfs from "../plugins/vue-ipfs";
import IPFS from "ipfs";
export default {
  name: "app",
  components: {
    // IpfsInfo,
  },
  data() {
    return {
      valid: false,
      formdata:{
        story: null,
        story_name: null,
        story_auth: null,
      }
    };
  },
  methods: {
    async postSubmitDataToLeanCloud(story){
      let res = await this.$axios.post('https://wuhan.tuzi.moe/1.1/classes/Wuhan',{story},
        {
          headers:{
            'X-LC-Id': 'Kb7ToPF7Gcaub6hCu3FndiGL-MdYXbMMI' ,
            'X-LC-Key': 'y35VDWqNe7SDlUd3oteRBB31'
          },
        }
      )
      return res
    },
    async submit() {
      const story = JSON.stringify(this.$data.formdata)
      const ipfs = await this.$ipfs;
      for await (const result of ipfs.add(story)) {
        this.postSubmitDataToLeanCloud(result.path).then(res=>{
          // console.log('存ipfs str in leancloud成功',res)
          if(res.data.createdAt){
            this.formdata = {
              story: null,
              story_name: null,
              story_auth: null,
            }
            alert('发布成功')
          }
        })
      }
    },
  },
};
</script>
