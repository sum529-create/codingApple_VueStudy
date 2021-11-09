<template>
  <div>
    <div class="post" v-for="(item, i) in instaData" :key="i">
      <div class="post-header">
        <div
          class="profile"
          :style="{ backgroundImage: `url(${instaData[i].userImage})` }"
        ></div>
        <span class="profile-name">{{ instaData[i].name }}</span>
      </div>
      <div
        class="post-body"
        :style="{ backgroundImage: `url(${instaData[i].postImage})` }"
      ></div>
      <div class="post-content">
        <p>{{ instaData[i].likes }} Likes</p>
        <p>
          <strong>{{ instaData[i].filter }}</strong> {{ instaData[i].content }}
        </p>
        <p class="date">{{ instaData[i].date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    instaData: Array,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  /* background-image: url("https://placeimg.com/100/100/arch"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  overflow: hidden;
}
.post-body {
  /* background-image: url("https://placeimg.com/640/480/animals"); */
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
