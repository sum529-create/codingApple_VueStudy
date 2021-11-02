<template>
  <div class="contents">
    <section id="page">
      <div class="page__room_sell">

        <!-- <Modal :데이터이름="데이터이름"/> ':'는 v-bind와 동일 -->
        <!-- 
          부모에게 메세지 보낼 땐
         -->
        <Modal @openModal="handle_popup" :onerooms="onerooms" :pnum="pnum" :is_show="is_show"/>

        <div class="menu">
          <a v-for="(a,i) in navdata" :key="i">{{a}}</a>
        </div>

        <Discount/>

        <!-- 내부에서 데이터 사용 -->
        <!-- <div class="txt_area" v-for="(item, i) in products" :key="i">
          <a @click="handle_popup"><img :src="item.url" class="roomImg-size"></a>
          <h4><a @click="handle_popup">{{item.name}}</a></h4>
          <p :style="fs">{{item.price}}만원</p>
          <button @click="addNum(i)">허위매물신고</button><br/>
          <span>{{num[i]}}</span>
        </div> -->

        <!-- 데이터 외부에서 불러와 사용하기 -->
        <Card @openModal="handle_popup" v-for="(item, i) in onerooms" :key="i" :num="num" :item="onerooms[i]"/>
      </div>
    </section>
  </div>
  
</template>

<script>
import onerooms from '@/assets/oneroom';
import Discount from '@/components/Discount';
import Modal from '@/components/Modal';
import Card from '@/components/Card';

export default {
  name: 'App',
  data(){
    return {
      /* HTML속성도 데이터 바인딩 가능함 */
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
  },
  components:{
    Discount,
    Modal,
    Card,
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
