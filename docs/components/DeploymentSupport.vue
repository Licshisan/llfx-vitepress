<template>
  <h2>部署上线与运维保障</h2>
  <div class="deploy-wrapper">
    <!-- 部署周期 -->
    <section class="block">
      <h4 class="block-title">部署与上线</h4>

      <div class="highlight">
        <div class="highlight-title">标准版</div>
        <div class="highlight-value">5 个工作日内上线</div>
        <div class="highlight-desc">
          上线前包含培训与基础配置<br />
          实际周期以具体工作量为准
        </div>
      </div>
    </section>

    <!-- 日常保障 -->
    <section class="block">
      <h4 class="block-title">日常运维保障</h4>

      <ul class="support-list">
        <li>
          <span class="label">系统监控</span>
          <span class="value">每日巡检</span>
        </li>
        <li>
          <span class="label">技术支持</span>
          <span class="value">工作日 9:00 – 20:00 在线响应</span>
        </li>
        <li class="response">
          <span class="label">故障响应</span>
          <div class="value">
            <div>普通问题 ≤ 2 小时</div>
            <div>严重故障 ≤ 30 分钟</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.deploy-wrapper {
  padding: 14px;
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr; /* 默认：移动端一行一个 */
}

.block {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 14px;
}

.block-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 9px;
  color: #1f2937;
}

/* 上线高亮区 */
.highlight {
  background: #f5f7ff;
  border-radius: 8px;
  padding: 14px;
  text-align: center;
}

.highlight-title {
  font-size: 14px;
  color: #5672cd;
  font-weight: 600;
}

.highlight-value {
  font-size: 20px;
  font-weight: 700;
  margin: 6px 0;
  color: #111827;
}

.highlight-desc {
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

/* 运维列表 */
.support-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.support-list li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  color: #374151;
}

.support-list .label {
  font-weight: 500;
  white-space: nowrap;
}

.support-list .value {
  text-align: right;
  line-height: 1.4;
}

.support-list li.response {
  align-items: flex-start;
}

@media (min-width: 768px) {
  .deploy-wrapper {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
  }
}
</style>
