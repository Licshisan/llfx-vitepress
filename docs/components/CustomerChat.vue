<template>
  <div>
    <!-- 悬浮按钮：始终固定右下角 -->
    <el-button
      :icon="ChatDotRound"
      color="#5672cd"
      round
      size="large"
      @click="toggleChat"
      v-show="!isOpen"
      class="chat-button"
    >
      联系客服
    </el-button>

    <!-- 聊天窗口 -->
    <div
      v-show="isOpen"
      class="chat-box"
      :style="{
        top: posY !== null ? posY + 'px' : 'auto',
        left: posX !== null ? posX + 'px' : 'auto',
      }"
    >
      <!-- 头部可拖动 -->
      <div class="chat-header" @mousedown.prevent="startDrag">
        在线客服
        <el-icon :size="24" style="cursor: pointer;" @click="toggleChat">
          <Close />
        </el-icon>
      </div>

      <!-- 消息滚动区 -->
      <el-scrollbar class="chat-messages">
        <div v-for="(msg, index) in messages" :key="index" :class="['chat-message', msg.from]">
          {{ msg.text }}
        </div>

        <div class="chat-message bot" v-if="isStreaming">
          <span class="typing-dot">●</span>
          <span class="typing-dot">●</span>
          <span class="typing-dot">●</span>
        </div>
      </el-scrollbar>

      <!-- 输入框 -->
      <div class="chat-input-wrapper">
        <input
          type="text"
          v-model="inputText"
          @keyup.enter="sendMessage"
          placeholder="请输入消息..."
        />
        <button @click="sendMessage" :disabled="isStreaming">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { ChatDotRound, Close } from '@element-plus/icons-vue'

const isOpen = ref(false)
const isStreaming = ref(false)
const inputText = ref('')
const messages = ref([{ from: 'bot', text: '您好！我是汽车陪练预约系统的 AI 客服，请问有什么可以帮您？' }])

let sessionId = null

// 拖动相关
const posX = ref(null)
const posY = ref(null)
let dragging = false
let dragOffsetX = 0
let dragOffsetY = 0

function toggleChat() {
  posX.value = null
  posY.value = null

  isOpen.value = !isOpen.value
  nextTick(scrollToBottom)
}

function scrollToBottom() {
  const el = document.querySelector('.chat-messages .el-scrollbar__wrap')
  if (el) el.scrollTop = el.scrollHeight
}

// 拖动事件
function startDrag(e) {
  if (window.innerWidth <= 768) return // 手机禁用拖动
  dragging = true

  const chatBox = e.currentTarget.parentElement // chat-box
  const rect = chatBox.getBoundingClientRect()

  // 第一次拖动时，初始化 posX/posY
  if (posX.value === null) posX.value = rect.left
  if (posY.value === null) posY.value = rect.top

  dragOffsetX = e.clientX - posX.value
  dragOffsetY = e.clientY - posY.value

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

function onDrag(e) {
  if (!dragging) return
  posX.value = e.clientX - dragOffsetX
  posY.value = e.clientY - dragOffsetY
}

function stopDrag() {
  dragging = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
}

// 发送消息 (简化版，保留流式)
async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || isStreaming.value) return

  messages.value.push({ from: 'user', text })
  inputText.value = ''
  isStreaming.value = true

  nextTick(scrollToBottom)
  try {
    const res = await fetch('http://60.205.108.91:8000/api/chat/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, session_id: sessionId })
    })
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let typingMsg = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const chunks = buffer.split('\n\n')
      buffer = chunks.pop() || ''

      for (const chunk of chunks) {
        const line = chunk.trim()
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6))
            if (data.type === 'session') sessionId = data.session_id
            else if (data.type === 'content') typingMsg += data.text
            else if (data.type === 'done') isStreaming.value = false
          } catch {}
          nextTick(scrollToBottom)
        }
      }
    }

    messages.value.push({ from: 'bot', text: typingMsg })
  } catch {
    isStreaming.value = false
    messages.value.push({ from: 'bot', text: '网络错误，请稍后重试' })
  } finally {
    isStreaming.value = false
    nextTick(scrollToBottom)
  }
}
</script>

<style scoped>
.chat-button{
  position: fixed;
  right: 20px;
  bottom: 60px;
  z-index: 1000;
}

.chat-box {
  width: 532px;
  height: 440px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  position: fixed;
  z-index: 1000;

  right: 20px;
  bottom: 60px;
}

.chat-header {
  background-color: #5672cd;
  color: #fff;
  padding: 8px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
}

.chat-messages {
  flex: 1;
  padding: 0 10px;
  background-color: #f9f9f9;
}

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
  margin-left: auto;
  align-self: flex-end;
}

.chat-message.bot {
  background-color: #e5e5e5;
  color: #333;
  margin-right: auto;
  align-self: flex-start;
}

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

@media (max-width: 768px) {
  .chat-box {
    width: calc(100vw - 24px);   /* 左右各留 12px */
    max-width: 420px;            /* 防止大屏手机太宽 */
    height: 65vh;                /* 高度适中，不压屏 */
    max-height: 520px;
    border-radius: 10px;
    right: 12px;
  }
}

.typing-dot {
  display: inline-block;
  margin-right: 2px;
  animation: blink 1s infinite;
  color: #5672cd;
}
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
</style>
