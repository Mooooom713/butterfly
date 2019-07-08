<template>
  <div class="card-wrap">
   <div class="card-img-wrap">
     <img :src="imgUrl"/>
   </div>
   <div class="card-text-wrap">
     <p>{{title}}</p>
     <p>{{desc}}</p>
   </div>
  </div>
</template>


<script>
export default {
  name: 'RightCard',
  props: {
    imgUrl: String,
    title: String,
    desc: String
  }
}
</script>

<style lang="scss" scoped>
  .card-wrap{
    width: 100%;
    display: flex;
    height: 3rem;
    margin: 10px 0px;
    .card-img-wrap{
      flex: 0 0 20%;
    }
    .card-text-wrap{
      flex: 0 0 70%;
      text-align: left;
      p{
        margin: 0;
      }
      p:nth-child(1){
        font-size: .9rem;
        color:#000000;
      }
      p:nth-child(2){
        font-size: .8rem;
        color: #707070;
      }
    }
  }
</style>