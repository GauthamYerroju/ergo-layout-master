import ClusterModel from './cluster.js'
import ColumnModel from '../column.js'
import KeyModel from '../key.js'

class NumberClusterModel extends ClusterModel {
    constructor(x, y) {
        super(x, y)
        const keys = '1234567890'.split('')
        for (let i = 0; i < keys.length; i++) {
            const key = new KeyModel(keys[i])
            const column = new ColumnModel([key])
            this.add(column)
        }
    }
}

export default NumberClusterModel
