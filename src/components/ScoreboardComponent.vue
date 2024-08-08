<template>
  <div class="scoreboard">
    <h2>Punteggio</h2>
    <div class="player-score">
      <p>Giocatore Rosso: {{ scores.red }}</p>
      <p>Giocatore Giallo: {{ scores.yellow }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreboardComponent',
  props: ['scores']
}
</script>

<style scoped>
.scoreboard {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
}

.player-score {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
