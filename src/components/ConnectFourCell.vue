<template>
  <div :class="['cell', { 'falling': isFalling }]">
    <ConnectFourPiece :color="piece" />
  </div>
</template>

<script>
import ConnectFourPiece from '@/components/ConnectFourPiece.vue';

export default {
  name: 'ConnectFourCell',
  components: {
    ConnectFourPiece
  },
  props: ['piece', 'isFalling']
}
</script>

<style scoped>
.cell {
  width: 60px;
  height: 60px;
  border: 2px solid #fff;
  background-color: #003d00;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 2px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
}

.cell.falling {
  animation: fall 0.6s ease forwards;
}

@keyframes fall {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
