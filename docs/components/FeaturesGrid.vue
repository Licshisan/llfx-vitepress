<template>
	<h2>面向汽车陪练企业需求<br/>深度定制的 7 大核心功能</h2>
    <div class="feature-list">
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="feature-item"
    >
      <h4 class="title">{{ feature.title }}</h4>
      <p class="details">{{ feature.details }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  { title: 'AI 客服自动接待（24 小时上班）', details: '回答咨询、引导下单、筛选高意向客户 减少人工客服 提升新客转化率' },
  { title: '标准 / 定制 课程体系', details: 'AI 向用户介绍课程与差异 AI完善定制课程 提高成交效率' },
  { title: '智能调度系统（人、车、订单自动匹配）', details: '高峰期不堵，低谷期不闲置，最大化利用车辆和教练资源' },
  { title: '地图定位 + 教练对接', details: '自动匹配附近教练，减少沟通成本 员工少操心 客户体验更顺' },
  { title: '电子化教学记录 & 学习反馈', details: '教学过程全记录、可回溯减少纠纷，提升专业形象' },
  { title: '多端打通（电脑 / 手机 / 外部平台）', details: '一个后台管所有订单 告别重复录入' },
  { title: '财务结算 & 经营数据看板', details: '提成、利润、客户生命周期一目了然 让老板第一次真正“看懂账”' },
])
</script>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 12px;
  padding: 12px;
}

.feature-item {
  background-color: #fff;
  border-radius: 6px;
  padding: 10px 12px;
  background-color: #f9f9f9;
  min-height: 100px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin: 4px;
  color: #333;
}

.details {
  font-size: 12px;
  color: #666;
  margin: 0px;

}

@media (max-width: 480px) {
  .feature-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 8px;
    padding: 8px;
  }

  .feature-item {
    padding: 8px 10px;
  }
}
</style>
