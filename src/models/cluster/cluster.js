import transpose from "../transpose"

class ClusterModel {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.columns = []
    }

    plain() {
        const { x, y, width, height, columns } = this
        return { x, y, width, height, columns: columns.map(c => c.plain()) }
    }

    get width() {
        return this.columns.length
    }

    get height() {
        return Math.max(0, ...this.columns.map(column => column.length))
    }

    add(column) {
        this.columns.push(column)
    }

    remove(column) {
        const index = this.columns.indexOf(column)
        // assert(index >= 0, "Trying to remove a non-existent cluster.")
        this.columns.splice(index, 1)
    }

    clear() {
        this.columns = []
    }

    log() {
        const display = []
        for (let x = 0; x < this.width; x++) {
            const col = []
            for (let y = 0; y < this.height; y++) {
                const k = this.columns[x].keys[y]
                const label = (k.code === null || k.label === '') ? ' ' : k.label
                col.push(label)
            }
            display.push(col)
        }
        console.table(transpose(display))
    }
}

export default ClusterModel
