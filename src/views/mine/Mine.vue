<template>
  <div id="#mine">
    <nav-bar class="nav-bar">
      <div slot="center">个人信息</div>
    </nav-bar>
    <div class="mine-info">
      <div class="touxiang">
        <img src="~assets/img/profile/avatar.svg" />
      </div>
      <div class="info">
        <span>登录/注册</span>
        <span><img src="~assets/img/profile/phone.svg" />暂无绑定手机号</span>
        <span class="next">></span>
      </div>
    </div>
    <div class="account">
      <div class="account-item">
        <span>0.00元</span>
        <span>我的余额</span>
      </div>
      <div class="account-item">
        <span>0个</span>
        <span>我的优惠</span>
      </div>
      <div class="account-item">
        <span>0分</span>
        <span>我的积分</span>
      </div>
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/message.svg" />
      <div>
        <span>我的消息</span>
      </div>
    </div>
    <div class="info-item border">
      <img src="~assets/img/profile/shopping.svg" />
      <div>
        <span>积分商城</span>
      </div>
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/vip.svg" />
      <div>
        <span>会员卡</span>
      </div>
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/cart.svg" />
      <div>
        <span>我的购物车</span>
      </div>
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/pointer.svg" />
      <div>
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
//我的信息
import NavBar from "components/common/navbar/NavBar"; //顶部导航条
export default {
  components: {
    NavBar
  },
  methods: {},
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.mine-info {
  height: 110px;
  display: flex;
  margin-top: 44px;
  background-color: var(--color-tint);
}

.touxiang {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 25px;
  margin-left: 15px;
}
.touxiang img {
  width: 62px;
  height: 62px;
}
.info {
  width: 260px;
  height: 60px;
  margin-top: 25px;
  margin-left: 10px;
}
.info span {
  display: block;
  color: #fff;
  margin-top: 5px;
}
.info span img {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.next {
  position: absolute;
  right: 20px;
  top: 89px;
}
.account {
  width: 100%;
  height: 83px;
  display: flex;
  border-bottom: 10px solid #f2f2f2;
}
.account-item {
  flex: 1;
}

.account-item span:nth-child(1) {
  display: block;
  color: #ff5f3e;
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
}
.account-item span:nth-child(2) {
  display: block;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
}
.info-item {
  height: 44px;
  width: 100%;
}
.border {
  border-bottom: 10px solid #f2f2f2;
}
.info-item img {
  width: 20px;
  height: 20px;
  margin-top: 15px;
}
.info-item div {
  display: inline-block;
}
.info-item div span {
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  margin-left: 8px;
}
</style>
