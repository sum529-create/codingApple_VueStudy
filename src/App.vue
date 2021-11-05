<template>
  <div class="contents">
    <section id="page">
      <div class="page__room_sell">

        <!-- 
          <Modal :데이터이름="데이터이름"/> ':'는 v-bind와 동일 

          부모에게 메세지 보낼 땐
          $emit('작명', 데이터) / @작명="메서드"

          class명을 조건부로 넣으려면 { 클래스명: 조건(mehtod) }

          <transition>...</transition> 으로 감싸서 애니매이션 요소를 줘도 됨
            -  name="" 작명 지정
         -->
         <!-- <div class="start" :class="{ end : handle_popup }">
          <Modal @openModal="handle_popup" :onerooms="onerooms" :pnum="pnum" :is_show="is_show"/>
         </div> -->
         <transition name="fade">
          <Modal @openModal="handle_popup" :onerooms="onerooms" :pnum="pnum" :is_show="is_show"/>
         </transition>

        <div class="menu">
          <a v-for="(a,i) in navdata" :key="i">{{a}}</a>
        </div>

        <Discount v-if="showDiscount == true" />

        <button @click="priceSort">가격순정렬</button>
        <button @click="sortBack">되돌리기</button>
        <button @click="sortKor">가나다 정렬</button>
        <button @click="sortReverse">역순 정렬</button>
        <button @click="sortFifbelow">50만원 이하</button>

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
      orgOnerooms : [...onerooms], // [...name] -> shallow copy 다른 카피본을 미리 만들어둔다.(array/object 데이터 각각 별개 사본제작)
      onerooms,
      navdata:['Home', 'Shop', 'About'],
      is_show:false,
      pnum:0,
      showDiscount: true,
    }
  },
  // mounted 사용해보기 [별 의미xx]
  // 컴포넌트가 잘 적용이되어 index.html에 잘
  mounted() {
    for(let i=0; i<this.onerooms.length; i++){
      this.num.push(0);
    }
    setTimeout(() => {
      this.showDiscount = false
    },10000);
  },
  methods:{
    addNum(i){
      this.num[i] += 1;
    },
    handle_popup(i){
      this.pnum = i;
      this.is_show = !this.is_show;
    },
    priceSort(){
      // 원본변형:sort() <-> 원본보존:filter(), map()
      this.onerooms.sort(function(a,b){
        return a.price - b.price; // {}안에 있던 price항목
      })
    },
    sortBack(){
      this.onerooms = [...this.orgOnerooms];
    },
    sortKor(){
      this.onerooms.sort(function(a,b){
        return a.title<b.title ? -1: a.title==b.title ? 0:1;
      });
    },
    sortReverse(){
      return this.onerooms.reverse();
    },
    sortFifbelow(){
      return this.onerooms.price < 500000;
    },
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
  .start{
    opacity: 0;
    transition: all 1s;
  }
  .end{
    opacity: 1;
  }
/* 
  <transition name="작명"> .. </transition>
  .작명-enter-from { 시작스타일 }
  .작명-enter-active { transition }
  .작명-enter-to { 끝날때스타일 }
  <-> 퇴장 애니메이션
  .작명-leave-from { 시작스타일 }
  .작명-leave-active { transition }
  .작명-enter-to { 끝날때스타일 }
*/
  .fade-enter-from {
    /* 시작 시 스타일 */
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s;
  }
  .fade-enter-to {
    /* 끝날 시 스타일 */
    opacity: 1;
  }
</style>
