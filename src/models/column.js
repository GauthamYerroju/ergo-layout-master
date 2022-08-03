class ColumnModel {
    constructor(keys = []) {
        this.keys = keys
    }

    plain() {
        const { width, height, keys } = this
        return { width, height, keys: keys.map(key => key.plain()) }
    }

    get width() {
        return 1
    }

    get height() {
        return this.keys.length
    }

    add(key) {
        this.keys.push(key)
    }

    remove(key) {
        const index = this.clusters.indexOf(key)
        // assert(index >= 0, "Trying to remove a non-existent cluster.")
        this.keys.splice(index, 1)
    }

    log() {
        const display = []
        for (let i = 0; i < this.height; i++) {
            const key = this[i]
            const label = (key.code === null || key.label === '') ? ' ' : key.label
            display.push(label)
        }
        console.table(display)
    }
}
export default ColumnModel
