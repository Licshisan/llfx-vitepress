<template>
  <div class="features-grid">
    <div v-for="feature in features" :key="feature.title" class="feature-card">
      <h3>{{ feature.title }}</h3>
      <ul>
        <li v-for="item in feature.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: '🤖 AI 替代人工客服',
    items: [
      '7 × 24 小时智能应答，全年无休',
      '承担前期咨询、课程介绍、价格说明',
      '自动识别潜在客户，持续提升新用户转化率'
    ]
  },
  {
    title: '📚 标准化 / 定制化课程体系',
    items: [
      'AI 自动向学员介绍课程内容与学习路径',
      '根据学员情况精准推荐课程方案',
      '显著提升下单效率与成交转化率'
    ]
  },
  {
    title: '🧠 智能调度系统',
    items: [
      '教练、车辆、订单统一调度',
      '冗余订单智能分配，避免资源浪费',
      '最大化减少车辆与教练空置率'
    ]
  },
  {
    title: '🗺 地图定位对接系统',
    items: [
      '教练与学员精准定位，实时可见',
      '上车流程清晰规范，减少沟通成本',
      '有效降低纠纷与服务争议'
    ]
  },
  {
    title: '🎓 电子化教学与学习反馈',
    items: [
      '课程全过程电子化记录',
      '学习轨迹清晰可回溯',
      '服务标准统一、教学透明'
    ]
  },
  {
    title: '🌐 多端数据全面打通',
    items: [
      '外部平台 / PC 管理端 / 手机端',
      '数据实时同步，避免重复操作',
      '统一视角掌控企业运营全局'
    ]
  },
  {
    title: '💰 财务结算与绩效统计',
    items: [
      '自动化财务结算，减少人工对账',
      '教练绩效清晰可查',
      '客户生命周期数据完整留存'
    ]
  }
]
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.feature-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}
</style>
