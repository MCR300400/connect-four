<template>
  <div :class="['piece', color]" />
</template>

<script>
export default {
  name: 'ConnectFourPiece',
  props: ['color']
}
</script>

<style scoped>
.piece {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000; /* Bordi neri per i pezzi */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Ombra esterna per profondità */
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}
</style>
