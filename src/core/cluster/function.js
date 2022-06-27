import Cluster from './cluster.js'

class FunctionCluster extends Cluster {
    constructor(x, y) {
        super(x, y, 12, 1)
        const keys = 'F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12'.split(',').map(n => [n])
        for(let i = 0; i < this.width; i++) {
            this.keys[i][0] = keys[i][0]
        }
    }
}

export default FunctionCluster
