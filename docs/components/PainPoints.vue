<template>
	<h2>行业痛点</h2>
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
  <p>两只熊系统，帮你降人力、控风险提复购、让管理变得可追溯！</p>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  { title: '电话预约反复沟通', details: '员工忙到爆 订单还是流失' },
  { title: '外部平台来单，人工登记', details: '对账、统计，越做越乱' },
  { title: '教练、车辆无法调度', details: '高峰期忙不过来，平时大量闲置' },
  { title: '教练教学无标准', details: '过程无记录 纠纷全靠嘴说' },
  { title: '财务结算、提成、促销效果算不清', details: '越干越心虚' },
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
