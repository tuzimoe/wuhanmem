<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-card class="mx-auto" outlined v-for="(item,index) in realComments" :key="index">
        <v-list-item three-line>
          <v-list-item-content>
            <v-card-title>{{ item['story_name']}}</v-card-title>
            <v-card-subtitle>作者：{{ item['story_auth'] }}</v-card-subtitle>
            <v-card-text>{{ item['story'] }}</v-card-text>
            <v-card-text
              ><v-text-field
                label="IPFS 唯一地址"
                v-model="ipfshash"
                disabled
                readonly
                height="10"
              ></v-text-field
            ></v-card-text>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      ipfshash: "QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A",
      realComments:[],
      results:[]
    };
  },
  methods:{
    async getRealContentFromIpfs(ipfspath) {
      try {
        const ipfs = await this.$ipfs;
        const chunks = []
        for await (const chunk of ipfs.cat(ipfspath)) {
          chunks.push(chunk)
        }
        return Buffer.concat(chunks).toString()
      } catch (err) {
       console.log(err,'error getRealContentFromIpfs')     
      }
    },
    async getDataResultsfromLeanCloud(){
     let res = await this.$axios.get('https://wuhan.tuzi.moe/1.1/scan/classes/Wuhan?limit=1000',{
      headers:{
        'X-LC-Id': 'Kb7ToPF7Gcaub6hCu3FndiGL-MdYXbMMI' ,
        'X-LC-Key': 'z5Ha9DJrUd8DvPhCBkqa8xiD,master'
      },
    })
    return res
    }
  },
  mounted(){
    this.getDataResultsfromLeanCloud().then(res=>{
      this.results = res.data.results
    })
  },
  watch:{
    results: function (n) {
      if(n.length!=0){
        n.forEach((item,index)=>{
          //遍历，根据一串字符去ipfs拿出真实的内容并展示到界面 
          this.getRealContentFromIpfs(item['story']).then(res=>{
              let obj = JSON.parse(res)
              this.realComments.push(obj)
          })    
        })
      }
    },
  }
};
</script>
