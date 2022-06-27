class Cluster {
    constructor(x, y, width, height, k) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        const keys = []
        for(let x = 0; x <= this.width; x++) {
            const row = []
            for(let y = 0; y <= this.height; y++) {
                row.push(k)
            }
            keys.push(row)
        }
        this.keys = keys
    }
}

export default Cluster
