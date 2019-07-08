<template>
  <div class="eight-right-wrap">
    <div class="eight-right-container">
      <p>8大权益</p>
      <right-card 
        :imgUrl='imgUrl'
        :title='title'
        :desc='desc'>
      </right-card>
      <right-card 
        :imgUrl='imgUrl'
        :title='title'
        :desc='desc'>
      </right-card>
      <right-card 
        :imgUrl='imgUrl'
        :title='title'
        :desc='desc'>
      </right-card>
    </div>
  </div>
</template>


<script>
import RightCard from './RightCard'

export default {
  name: 'RightDetail',
  components: {
    RightCard
  },
  data () {
    return {
      imgUrl: require('../../../assets/enjoy.png'),
      title: '分享套餐奖励',
      desc: '分享代言人既享受产品差价180元'
    }
  }
}
</script>

<style lang="scss" scoped>
  .eight-right-wrap{
    width: 100%;
    background: #F3F3F3;
    .eight-right-container{
      width: 100%;
      background: #ffffff;
      p{
        line-height: 1rem;
        text-align: left;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 2px solid #3F86ED;
        font-weight: bold;
      }
    }
  }
</style>