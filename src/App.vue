<template>
  <div class="contents">
    <section id="page">
      <div class="page__room_sell">
        <div class="menu">
          <a v-for="(a,i) in navdata" :key="i">{{a}}</a>
        </div>
        <img src="@/assets/logo.png" alt="logo">
        <div class="txt_area" v-for="(item, i) in name" :key="i">
          <h4>{{item}}원룸</h4>
          <p :style="fs">{{i+1}}0만원</p>
          <button @click="addNum(i)">신고수</button><br/>
          <span>{{num[i]}}</span>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      /* HTML속성도 데이터 바인딩 가능함 */
      fs: 'color:red',
      num:[], // 신고수
      navdata:['Home', 'Shop', 'About'],
      name:['역삼동', '천호동', '마포구'],
    }
  },
  mounted() {
    for(let i=0; i<this.navdata.length; i++){
      this.num.push(0);
    }
  },
  methods:{
    addNum(i){
      this.num[i] += 1;
    }
  }
}
</script>

<style>
  .contents{
    position: relative;
    margin: 0 auto;
    text-align: center;
  }
  .menu {
    background: rgb(4, 92, 73);
    padding: 15px;
    border-radius: 5px;
  }
  .menu a{
    color: #FFF;
    padding: 10px;
  }
</style>
