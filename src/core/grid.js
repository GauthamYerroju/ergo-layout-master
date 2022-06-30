import transpose from './transpose'

class Grid {
  constructor (minWidth, minHeight) {
    this.minWidth = minWidth
    this.minHeight = minHeight
    this.clusters = []
    this.collisions = {}

    this.cells = this.makeCells()
  }

  get width () {
    return Math.max(this.minWidth, ...this.clusters.map(o => o.x + o.width))
  }

  get height () {
    return Math.max(this.minHeight, ...this.clusters.map(o => o.y + o.height))
  }

  makeCells () {
    const cells = []
    for (let x = 0; x <= this.width; x++) {
      const row = []
      for (let y = 0; y <= this.height; y++) {
        row.push([])
      }
      cells.push(row)
    }
    return cells
  }

  updateCellsAndCollisions () {
    this.cells = this.makeCells()
    this.collisions = {}
    this.clusters.forEach(cluster => {
      for (let x = 0; x < cluster.width; x++) {
        for (let y = 0; y < cluster.height; y++) {
          const key = cluster.keys[x][y]
          if (key) {
            const cell = this.cells[cluster.x + x][cluster.y + y]
            cell.push(key)
            // Update collisions
            const collision = this.collisions[[x, y]]
            if (collision === undefined) {
              this.clusterMap[[x, y]] = [cluster]
            } else {
              this.clusterMap[[x, y]].push(cluster)
            }
          }
        }
      }
    })
  }

  get collisions () {
    return Object.entries(this.collisions)
      .map(([position, clusters]) =>
        clusters.length > 1 ? [position, clusters] : false
      )
      .filter(x => x)
  }

  get hasCollision () {
    return this.collisions.length > 0
  }

  add (cluster) {
    this.clusters.push(cluster)
  }

  remove (cluster) {
    const index = this.clusters.indexOf(cluster)
    // assert(index >= 0, "Trying to remove a non-existent cluster.")
    this.clusters.splice(index, 1)
  }

  log (g) {
    const display = []
    for (let x = 0; x <= this.width; x++) {
      const col = []
      for (let y = 0; y <= this.height; y++) {
        let k = this.cells[x][y].join(', ')
        if (k === null || k === '') {
          k = ' '
        }
        col.push(k)
      }
      display.push(col)
    }
    console.table(transpose(display))
  }
}
export default Grid
