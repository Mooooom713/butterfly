<template>
  <div class="card-block">
    <div class="img-wrap">
      <img :src='imgUrl'/>
    </div>
    <div class="text-wrap">
      <p class="name">{{foodName}}</p>
      <p class="sale-price">{{salePrice}}</p>
      <p class="price">{{normalPrice}}</p>
      <p class="price">{{marketPrice}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ImageCard',
  props: {
    imgUrl: String,
    foodName: String,
    salePrice: String,
    normalPrice: String,
    marketPrice: String
  }
}
</script>

<style lang="scss" scoped>
  .card-block{
    flex: 0 0 31%;
    margin: 0 4px 15px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    .img-wrap{
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #F5F5F5;
      img{
        width: 50%;
      }
    }
    .text-wrap{
      width: 100%;
      .name{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; 
        font-size: .75rem;
        font-weight: bold;
        text-align: left;
        margin-bottom: 5px;
      }
      .sale-price{
        color: #FF0013;
        margin: 0px;
        font-size: .7rem;
        text-align: left;
      }
      .price{
        color: #868686;
        margin: 0px;
        font-size: .65rem;
        text-align: left;
        margin: 2px 0;
      }
    }
  }
</style>