import Cluster from './cluster.js'

class NumberCluster extends Cluster {
    constructor(x, y) {
        super(x, y, 10, 1)
        const keys = '1234567890'.split('').map(n => [n])
        for(let i = 0; i < this.width; i++) {
            this.keys[i][0] = keys[i][0]
        }
    }
}

export default NumberCluster
