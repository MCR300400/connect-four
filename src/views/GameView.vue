<template>
  <div class="game-view">
    <header>
      <h1>Partita Connect Four</h1>
      <p>ID Partita: {{ idGame }}</p>
      <p>Giocatore Corrente: <span :class="currentPlayer">{{ currentPlayer }}</span></p>
    </header>
    <div class="game-container">
      <ScoreboardComponent :scores="scores" class="sidebar" />
      <ConnectFourBoard :board="board" @dropPiece="dropPiece" class="board-container" />
      <ChatComponent class="sidebar" />
    </div>
  </div>
</template>

<script>
import ChatComponent from '@/components/ChatComponent.vue';
import ConnectFourBoard from '@/components/ConnectFourBoard.vue';
import ScoreboardComponent from '@/components/ScoreboardComponent.vue';

export default {
  name: 'GameView',
  components: {
    ConnectFourBoard,
    ScoreboardComponent,
    ChatComponent
  },
  props: ['idGame'],
  data() {
    return {
      board: Array.from({ length: 6 }, () => Array(7).fill(null)),
      currentPlayer: 'red',
      scores: { red: 0, yellow: 0 }
    };
  },
  methods: {
    dropPiece(column) {
      for (let row = this.board.length - 1; row >= 0; row--) {
        if (!this.board[row][column]) {
          this.board[row][column] = this.currentPlayer;
          if (this.checkWin(row, column)) {
            alert(`Giocatore ${this.currentPlayer} ha vinto!`);
            this.scores[this.currentPlayer]++;
            this.resetBoard();
          } else {
            this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red';
          }
          break;
        }
      }
    },
    checkWin(row, column) {
      const directions = [
        { dr: 1, dc: 0 },  // verticale
        { dr: 0, dc: 1 },  // orizzontale
        { dr: 1, dc: 1 },  // diagonale in basso a destra
        { dr: 1, dc: -1 }  // diagonale in basso a sinistra
      ];
      
      for (let { dr, dc } of directions) {
        let count = 1;
        
        for (let i = 1; i <= 3; i++) {
          const r = row + dr * i;
          const c = column + dc * i;
          if (r < 0 || r >= 6 || c < 0 || c >= 7 || this.board[r][c] !== this.currentPlayer) break;
          count++;
        }
        
        for (let i = 1; i <= 3; i++) {
          const r = row - dr * i;
          const c = column - dc * i;
          if (r < 0 || r >= 6 || c < 0 || c >= 7 || this.board[r][c] !== this.currentPlayer) break;
          count++;
        }
        
        if (count >= 4) return true;
      }
      
      return false;
    },
    resetBoard() {
      this.board = Array.from({ length: 6 }, () => Array(7).fill(null));
      this.currentPlayer = 'red';
    }
  }
}
</script>

<style scoped>
.game-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

header {
  margin-bottom: 2rem;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2rem;

}

header p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

header p span {
  font-weight: bold;
  font-size: 1.2rem;
}

header p span.red {
  color: red;
}

header p span.yellow {
  color: yellow;
}

.game-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.board-container {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>
