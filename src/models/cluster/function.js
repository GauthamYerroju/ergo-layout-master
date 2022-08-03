import ClusterModel from './cluster.js'
import ColumnModel from '../column.js'
import KeyModel from '../key.js'

class FunctionClusterModel extends ClusterModel {
    constructor(x, y) {
        super(x, y)
        const keys = 'F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12'.split(',')
        for (let i = 0; i < keys.length; i++) {
            const key = new KeyModel(keys[i])
            const column = new ColumnModel([key])
            this.add(column)
        }
    }
}

export default FunctionClusterModel
