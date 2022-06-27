class Grid {
    constructor(minWidth, minHeight) {
        this.minWidth = minWidth
        this.minHeight = minHeight
        this.clusters = []
    }

    get width() {
        return Math.max(this.minWidth, ...this.clusters.map(o => o.x + o.width))
    }


    get height() {
        return Math.max(this.minHeight, ...this.clusters.map(o => o.y + o.height))
    }

    add(cluster) {
        this.clusters.push(cluster)
    }

    remove(cluster) {
        const index = this.clusters.indexOf(cluster);
        if (index >= 0) {
            this.clusters.splice(index, 1)
        }
    }

    get keys() {
        const keys = []
        for(let x = 0; x <= this.width; x++) {
            const row = []
            for(let y = 0; y <= this.height; y++) {
                row.push([])
            }
            keys.push(row)
        }
        
        this.clusters.forEach(cluster => {
            for(let x = 0; x < cluster.width; x++) {
                for(let y = 0; y < cluster.height; y++) {
                    const key = cluster.keys[x][y]
                    console.log(key === null)
                    if (key) {
                        keys[cluster.x + x][cluster.y + y].push(key)
                    }
                }
            }
        })

        for(let x = 0; x <= this.width; x++) {
            console.log(keys[x].join('\t'))
        }
        return keys
    }

}
export default Grid