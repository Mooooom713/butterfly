<template>
  <div class="menu-wrap">
    <p>代言人套餐</p>
    <p>购超值商品套装（任选其一）尊享代言人权益</p>
   <div class="card-block">
      <image-card 
        :imgUrl='imgUrl'
        :foodName='foodName'
        :salePrice='salePrice'
        :normalPrice='normalPrice'
        :marketPrice='marketPrice'></image-card>
      <image-card
         :imgUrl='imgUrl'
        :foodName='foodName'
        :salePrice='salePrice'
        :normalPrice='normalPrice'
        :marketPrice='marketPrice'></image-card>
      <image-card
         :imgUrl='imgUrl'
        :foodName='foodName'
        :salePrice='salePrice'
        :normalPrice='normalPrice'
        :marketPrice='marketPrice'></image-card>
   </div>
  </div>
</template>


<script>
import ImageCard from './ImageCard'

export default {
  name: 'RightMenu',
  components: {
    ImageCard
  },
  data () {
    return {
      imgUrl: require('../../../assets/oil.png'),
     foodName: '南极磷虾油南极磷虾油南极磷虾油',
      salePrice: '超值价¥399/5甁  ',
      normalPrice: '复购价169/5甁',
      marketPrice: '市场价2990/5甁'
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-wrap{
    background: #ffffff;
    padding: 5px;
    p:nth-child(1){
      text-align: left;
      border-left: 2px solid #3F86ED;
      line-height: 1rem;
      margin-left: 5px;
      padding-left: 10px;
      margin-bottom: 8px;
      font-weight: bold;
    }
    p:nth-child(2){
      font-size: .8rem;
      margin-left: 5px;
      color: #707070;
      text-align: left;
      margin-top: 0px;  
    }
    .card-block{
      display: flex;
    }
  }
</style>