import transpose from "../transpose"

class Cluster {
    constructor(x, y, width, height, k) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        const keys = []
        for (let x = 0; x <= this.width; x++) {
            const row = []
            for (let y = 0; y <= this.height; y++) {
                row.push(k)
            }
            keys.push(row)
        }
        this.keys = keys
    }


    log(g) {
        const display = []
        for (let x = 0; x <= this.width; x++) {
            const col = []
            for (let y = 0; y <= this.height; y++) {
                let k = this.keys[x][y]
                if (k === null || k === '') { k = ' ' }
                col.push(k)
            }
            display.push(col)
        }
        console.table(transpose(display))
    }
}

export default Cluster
