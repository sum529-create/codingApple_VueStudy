<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :instaData="instaData" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <div class="tab">
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>
      <button>버튼0</button>
      <button>버튼1</button>
      <button>버튼2</button>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container";
import instaData from "@/assets/instaData";
import axios from "axios";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      instaData,
      counter: 0,
    };
  },
  methods: {
    async more() {
      /* get -> data를 받아올 때 | post -> data를 전송할 때 */
      // 성공시 then() | 실패시 catch()
      // axios.post('URL', {name:'sumin'}).then().catch((error)=>{console.log(error)})
      await axios
        .get(`https://codingapple1.github.io/vue/more${this.counter}.json`)
        .then((e) => {
          console.log(e.data);
          this.instaData.push(e.data);
          this.counter++;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
