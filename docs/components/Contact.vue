<template>
  <div class="contact-wrapper">
    <h2 class="title">联系方式</h2>

    <p class="desc">
      请通过电话或邮箱联系业务团队，获取产品介绍及试用。
    </p>

    <div class="contact-card">
      <div class="contact-item">
        <span class="label">联系电话</span>
        <a class="value" href="tel:1300000000">1300000000</a>
      </div>

      <!--
      <div class="contact-item">
        <span class="label">联系邮箱</span>
        <a class="value" href="mailto:contact@example.com">
          contact@example.com
        </a>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  padding: 18px 14px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  margin: 0;
}

.desc {
  font-size: 13px;
  color: #4b5563;
  line-height: 1.5;
}

/* 联系方式卡片 */
.contact-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.label {
  color: #374151;
  font-weight: 500;
}

.value {
  color: #5672cd;
  font-weight: 600;
  text-decoration: none;
}

.value:hover {
  text-decoration: underline;
}

/* 桌面端微调 */
@media (min-width: 768px) {
  .contact-card {
    max-width: 360px;
  }

  .contact-item {
    font-size: 15px;
  }
}
</style>
