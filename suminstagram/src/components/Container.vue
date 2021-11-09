<template>
  <div>
    컨테이너
    <Post :instaData="instaData" />
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    instaData: Object,
  },
};
</script>

<style></style>
