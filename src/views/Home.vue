<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-card-title>{{ story_title }}</v-card-title>
            <v-card-subtitle>作者：{{ story_auth }}</v-card-subtitle>
            <v-card-text>{{ story }}</v-card-text>
            <v-card-text
              ><v-text-field
                label="IPFS 唯一地址"
                v-model="ipfshash"
                disabled="true"
                readonly="true"
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
      story:
        "那个坐在阳台上敲锣鸣病的人。那个深夜追着殡车凄厉地喊着“妈妈”的人。那个在一千人共用一个卫生间的隔离所看《政治秩序的起源》的人。那个开着货车在高速路上流离失所没有归处的人。那个坐着死去被家人抱住头等待殡葬车的人。那个隔离在家中被饿死的人。 那个花了20万最终",
      story_title: "无题",
      story_auth: "玛丽莲梦六",
      ipfshash: "QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A",
    };
  },
};
</script>
