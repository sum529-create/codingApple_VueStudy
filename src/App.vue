<template>
  <div class="contents">
    <section id="page">
      <div class="page__room_sell">
        <div v-show="is_show" class="morePage__popup" id="popup">
          <div class="black-bg">
            <div class="white-bg">
              <h4>{{onerooms[pnum].title}}</h4>
              <p>{{onerooms[pnum].content}}</p>
              <button @click="handle_popup(0)">닫기</button>
            </div>
          </div>
        </div>
        <div class="menu">
          <a v-for="(a,i) in navdata" :key="i">{{a}}</a>
        </div>
        <img src="@/assets/logo.png" alt="logo">
        <!-- <div class="txt_area" v-for="(item, i) in products" :key="i">
          <a @click="handle_popup"><img :src="item.url" class="roomImg-size"></a>
          <h4><a @click="handle_popup">{{item.name}}</a></h4>
          <p :style="fs">{{item.price}}만원</p>
          <button @click="addNum(i)">허위매물신고</button><br/>
          <span>{{num[i]}}</span>
        </div> -->

        <!-- 데이터 외부에서 불러와 사용하기 -->
        <div class="txt_area" v-for="(item, i) in onerooms" :key="i">
          <a @click="handle_popup(item.id)"><img :src="item.image" class="roomImg-size"></a>
          <h4><a @click="handle_popup(item.id)">{{item.title}}</a></h4>
          <p :style="fs">{{item.price}}만원</p>
          <button @click="addNum(i)">허위매물신고</button><br/>
          <span>{{num[i]}}</span>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
import onerooms from '@/assets/oneroom';
export default {
  name: 'App',
  data(){
    return {
      /* HTML속성도 데이터 바인딩 가능함 */
      fs: 'color:red',
      num:[], // 신고수
      products:[ // 저장되어 있는 상대주소는 단순 String이기 때문에 해당 경로를 import한다는 의미로 require을 사용해야함
        {url:require('./assets/room0.jpg'), name:'역삼동원룸', price:30},
        {url:require('./assets/room1.jpg'),name:'천호동원룸', price:50}, 
        {url:require('./assets/room2.jpg'),name:'마포구원룸', price:90},
      ],
      onerooms,
      navdata:['Home', 'Shop', 'About'],
      is_show:false,
      pnum:0
    }
  },
  // mounted 사용해보기 [별 의미xx]
  mounted() {
    for(let i=0; i<this.onerooms.length; i++){
      this.num.push(0);
    }
  },
  methods:{
    addNum(i){
      this.num[i] += 1;
    },
    handle_popup(i){
      this.pnum = i;
      this.is_show = !this.is_show;
    }
  }
}
</script>

<style>
  body{
    margin:0;
  }
  div{
    box-sizing: border-box;
  }
  a{
    cursor: pointer;
  }
  .black-bg{
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }
  .white-bg{
    width: 43%;
    background: #FFF;
    border-radius: 8px;
    padding: 20px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }
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
  .menu a:hover{
    color: rgb(170, 170, 170);
    padding: 10px;
  }
  .roomImg-size{
    width:50%;
    margin-top: 40px;
  }
</style>
