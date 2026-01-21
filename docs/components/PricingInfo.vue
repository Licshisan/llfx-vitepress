<template>
  <h2>费用说明（年费制）</h2>
  <div class="pricing-wrapper">
    <!-- 成本说明 -->
	 <div class="block">
		 <h4 class="block-title">成本包含但不限于</h4>
		 <ul class="cost-list">
			 <li>服务器与带宽费用</li>
			 <li>用户与教练短信服务费用</li>
			 <li>地图信息接口使用费</li>
			 <li>AI 大模型调用费用</li>
			 <li>系统开发与人工配置成本</li>
		 </ul>
	</div>


    <!-- 价格表 -->
	<div class="block">

		<h4 class="block-title">按车辆规模收费</h4>
	
		<div class="price-table">
		  <div class="price-row header">
			<span>车辆规模</span>
			<span>年费</span>
		  </div>
	
		  <div class="price-row">
			<span>5 辆以下</span>
			<span><strong>3000 元 / 年</strong></span>
		  </div>
	
		  <div class="price-row highlight">
			<span>5–10 辆</span>
			<span>
			  <strong>7000 元 / 年</strong>
			  <em>开业促销：5000 元 / 年</em>
			</span>
		  </div>
	
		  <div class="price-row">
			<span>10–15 辆</span>
			<span><strong>9000 元 / 年</strong></span>
		  </div>
	
		  <div class="price-row">
			<span>15–20 辆</span>
			<span><strong>11000 元 / 年</strong></span>
		  </div>
		</div>
	
		<p class="remark">
		  支持按规模升级，费用透明，无隐藏收费
		</p>
	</div>
  </div>
</template>

<style scoped>
.pricing-wrapper {
  padding: 14px;
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr; /* 默认：移动端一行一个 */
}

.block-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 9px;
  color: #1f2937;
}

/* 价格表 */
.price-table {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
}

.price-row {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding: 10px 12px;
  font-size: 13px;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.price-row.header {
  background: #f1f5f9;
  font-weight: 600;
}

.price-row.highlight {
  background: #f5f7ff;
}

.price-row span:last-child {
  text-align: right;
}

.price-row em {
  display: block;
  font-size: 12px;
  color: #5672cd;
  font-style: normal;
  margin-top: 2px;
}

.remark {
  margin-top: 10px;
  font-size: 12px;
  color: #6b7280;
  text-align: center;
}

/* 桌面端优化 */
@media (min-width: 768px) {
  .pricing-wrapper {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
  }
}
</style>
