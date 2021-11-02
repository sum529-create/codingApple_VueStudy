<template>
    <div v-show="is_show" class="morePage__popup" id="popup">
        <div class="black-bg">
        <div class="white-bg">
            <img :src="onerooms[pnum].image" alt="원룸이미지">
            <h4>{{onerooms[pnum].title}}</h4>
            <p>{{onerooms[pnum].content}}</p>
            <!-- <input type="number" @input="month = $event.target.value">  -->
            <input v-model="month">
            <!-- 
              @input : 입력시 마다 반응
              $event : addEventListner
              $event.target: 이벤트가 일어나고 있는 부분
              사용자가 입력한 값을 month에 저장
            -->
            <p>{{month}}개월 선택함: {{onerooms[pnum].price * month}}원</p>
            <!-- 
              input에 입력되는 값은 대다수 text로 저장이 됨
              다만 js에서는 text와 숫자와의 곱셉은 잘 이루어짐
              '+'를 사용하면 문제점이 발생
             -->
            <button @click="$emit('openModal', 0)">닫기</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    // 자식은 props로 받은것으로 등록
    data(){
      return {
        month:1, // 초기값을 생성하고자 할시 값의 타입을 잘 생각할것 ex) String -> month:'asd'
      }
    },
    // 데이터감시
    watch:{
      // 감시할 데이터 (ex.month라는 데이터가 변할 때마다 여기있는 코드 실행됨)
      // ex)month(a){ ... }   a -> month데이터
      month(data){
        if(data > 12){
          alert('12개월안으로 입력해주십시오');
          this.month = 12;
        }
        else if(typeof(data) === 'string'){
          // alert('문자입력 불가');
          this.month = 1;
        }
      },
    },
    props: {
        onerooms: Array, // 데이터이름 : 자료형이름(Array, Object, String ,...대문자로 작성)
        pnum: Number,
        is_show: Boolean,
    }
}
</script>

<style>
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
    word-break: keep-all;
  }  
  .white-bg img{
    width:70%;
    margin-top: 40px;
  }
</style>