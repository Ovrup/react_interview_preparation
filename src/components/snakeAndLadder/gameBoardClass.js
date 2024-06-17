export class Board {
    constructor(row, col) {
        this.totalCells = row * col;
        this.row = row;
        this.col = col;
        this.grid = [];
    }

    assignSnakeLadderPosition() {
        // Snake positions
        this.grid[2].isSnake = true;
        this.grid[2].moveTo = 79;

        this.grid[16].isSnake = true;
        this.grid[16].moveTo = 20;

        this.grid[46].isSnake = true;
        this.grid[46].moveTo = 6;

        // Ladder Positions
        this.grid[93].isLadder = true;
        this.grid[93].moveTo = 14;

        this.grid[98].isLadder = true;
        this.grid[98].moveTo = 31;

        this.grid[77].isLadder = true;
        this.grid[77].moveTo = 84;

        this.grid[20].isLadder = true;
        this.grid[20].moveTo = 99;
    }

    constructBoard() {
        for (let i = 0; i < this.row; i++) {
            const isReverse = i % 2 === 0 ? false : true;
            const row = new Row(i, this.col, this.totalCells, isReverse);
            this.grid.push(...row.constructRow());
        }
        console.log(this.grid);

        this.assignSnakeLadderPosition();

        return this.grid;
    }
}

class Row {
    constructor(rowId, col, totalCells, isReverse) {
        this.rowId = rowId;
        this.col = col;
        this.totalCells = totalCells;
        this.isReverse = isReverse;
        this.row = [];
    }

    constructRow() {
        const start = this.totalCells - this.rowId * this.col;
        const end = this.totalCells - (this.rowId + 1) * this.col;

        if (this.isReverse) {
            for (let i = end + 1; i <= start; i++) {
                this.row.push(new Cell(i, false, false));
            }
        } else {
            for (let i = start; i >= end + 1; i--) {
                this.row.push(new Cell(i, false, false));
            }
        }

        return this.row;
    }
}

class Cell {
    constructor(val, isSnake, isLadder) {
        this.value = val;
        this.isSnake = isSnake;
        this.isLadder = isLadder;
    }
}
