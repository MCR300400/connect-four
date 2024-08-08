<template>
  <div class="board">
    <div
      class="column"
      v-for="(column, colIndex) in columns"
      :key="colIndex"
      @click="handleColumnClick(colIndex)"
    >
      <ConnectFourCell
        v-for="(cell, rowIndex) in rows"
        :key="rowIndex"
        :piece="board[rowIndex][colIndex]"
        :isFalling="fallingPiece && fallingPiece.column === colIndex && rowIndex <= fallingPiece.row"
      />
    </div>
  </div>
</template>

<script>
import ConnectFourCell from '@/components/ConnectFourCell.vue';

export default {
  name: 'ConnectFourBoard',
  components: {
    ConnectFourCell
  },
  props: ['board'],
  data() {
    return {
      rows: Array.from({ length: 6 }),
      columns: Array.from({ length: 7 }),
      fallingPiece: null,
    };
  },
  methods: {
    handleColumnClick(columnIndex) {
      const row = this.findAvailableRow(columnIndex);
      if (row !== null) {
        this.fallingPiece = { column: columnIndex, row };
        this.$emit('dropPiece', columnIndex);
      }
    },
    findAvailableRow(columnIndex) {
      for (let row = this.rows.length - 1; row >= 0; row--) {
        if (!this.board[row][columnIndex]) {
          return row;
        }
      }
      return null;
    }
  },
  watch: {
    board() {
      setTimeout(() => {
        this.fallingPiece = null;
      }, 600); // Match animation duration
    }
  }
}
</script>

<style scoped>
.board {
  display: flex;
  justify-content: center;
  background-color: #031153;
  border: 4px solid #000;
  border-radius: 10px;
  width: 420px;
  height: 370px;
}
.column {
  display: flex;
  flex-direction: column;
  margin: 0 0.2rem;
  cursor: pointer;
  width: 60px;
}
</style>
