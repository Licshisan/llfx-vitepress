<template>
  <div class="chat-widget">
    <!-- 悬浮按钮 -->
    <el-button
      :icon="ChatDotRound"
      color="#5672cd"
      round
      size="large"
      @click="toggleChat"
      v-show="!isOpen"
    >
      联系客服
    </el-button>

    <!-- 聊天窗口 -->
    <div class="chat-box" v-show="isOpen">
      <div class="chat-header">
        在线客服
        <el-icon :size="24" style="cursor: pointer;" @click="toggleChat">
          <Close />
        </el-icon>
      </div>

      <!-- 使用 Element Plus 滚动条 -->
      <el-scrollbar class="chat-messages">
        <div v-for="(msg, index) in messages" :key="index" :class="['chat-message', msg.from]">
          {{ msg.text }}
        </div>
      </el-scrollbar>

      <div class="chat-input-wrapper">
        <input
          type="text"
          v-model="inputText"
          @keyup.enter="sendMessage"
          placeholder="请输入消息..."
        />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChatDotRound, Close } from '@element-plus/icons-vue'
import { ref, nextTick } from 'vue'
import { ElScrollbar } from 'element-plus'

const isOpen = ref(false)
const inputText = ref('')
const messages = ref([
  { from: 'bot', text: '您好，有什么可以帮您的吗？' }
])

function toggleChat() {
  isOpen.value = !isOpen.value
  // 打开时滚动到底部
  nextTick(() => scrollToBottom())
}

function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return
  messages.value.push({ from: 'user', text })
  inputText.value = ''
  // 模拟客服回复
  setTimeout(() => {
    messages.value.push({ from: 'bot', text: '客服稍后会回复您...' })
    nextTick(() => scrollToBottom())
  }, 300)
}

// 滚动到底部
function scrollToBottom() {
  const el = document.querySelector('.chat-messages .el-scrollbar__wrap')
  if (el) el.scrollTop = el.scrollHeight
}
</script>

<style scoped>
.chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

/* 聊天窗口 */
.chat-box {
  width: 532px;
  height: 440px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
}

/* 头部 */
.chat-header {
  background-color: #5672cd;
  color: #fff;
  padding: 8px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 消息区域 */
.chat-messages {
  flex: 1;
  padding: 0 10px;
  background-color: #f9f9f9;
}

/* 消息内容 */
.chat-message {
  width: fit-content;
  margin: 10px 0;
  padding: 6px 10px;
  border-radius: 4px;
  max-width: 80%;
}

.chat-message.user {
  background-color: #5672cd;
  color: #fff;
  margin-left: auto; /* 左边占满空间 → 靠右 */
  align-self: end;
}

.chat-message.bot {
  background-color: #e5e5e5;
  color: #333;
  margin-right: auto;
  align-self: flex-start;
}

/* 输入框 */
.chat-input-wrapper {
  display: flex;
  border-top: 1px solid #ddd;
}

.chat-input-wrapper input {
  flex: 1;
  border: none;
  padding: 8px 16px;
  outline: none;
}

.chat-input-wrapper button {
  background-color: #5672cd;
  color: #fff;
  border: none;
  padding: 0 15px;
  cursor: pointer;
}
</style>
