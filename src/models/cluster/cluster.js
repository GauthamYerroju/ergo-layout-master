import transpose from "../transpose"

class ClusterModel {
    constructor(x, y, width, height, k) {
        this.state = {
            selected: false,
            lifted: false,
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.keys = this.makeKeys(k)
    }

    plain() {
        const { state, x, y, width, height, keys } = this
        return { state, x, y, width, height, keys }
    }

    log(g) {
        const display = []
        for (let x = 0; x < this.width; x++) {
            const col = []
            for (let y = 0; y < this.height; y++) {
                let k = this.keys[x][y]
                if (k === null || k === '') { k = ' ' }
                col.push(k)
            }
            display.push(col)
        }
        console.table(transpose(display))
    }

    lift() {
        this.state.lifted = true
    }

    drop() {
        this.state.lifted = false
    }

    clear() {
        this.keys = this.makeKeys(null)
    }

    makeKeys(k = null) {
        const keys = []
        for (let x = 0; x < this.width; x++) {
            const row = []
            for (let y = 0; y < this.height; y++) {
                row.push(k)
            }
            keys.push(row)
        }
        return keys
    }
}

export default ClusterModel
