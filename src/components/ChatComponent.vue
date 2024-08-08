<template>
  <div class="chat">
    <h2>Chat</h2>
    <div class="messages">
      <div class="message" v-for="(msg, index) in messages" :key="index">
        <strong>{{ msg.user }}:</strong> {{ msg.text }}
      </div>
    </div>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Scrivi un messaggio..." />
  </div>
</template>

<script>
export default {
  name: 'ChatComponent',
  data() {
    return {
      messages: [],
      newMessage: '',
      currentUser: 'Giocatore'
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ user: this.currentUser, text: this.newMessage });
        this.newMessage = '';
      }
    }
  }
}
</script>

<style scoped>
.chat {
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  height: 300px;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
}

.message {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
