import ClusterModel from './cluster'
import transpose from '../transpose'
import ColumnModel from '../column'
import KeyModel from '../key'

class AlphaClusterModel extends ClusterModel {
    constructor(x, y, layout = 'qwerty') {
        super(x, y)
        this.layout = layout
    }

    set layout(layout) {
        const columns = transpose(AlphaClusterModel.columnsByLayout(layout))
        columns.forEach(col => {
            const keys = col.map(keyCode => new KeyModel(keyCode))
            const column = new ColumnModel(keys)
            console.log(column)
            this.add(column)
        })
    }

    static columnsByLayout(layout) {
        const layouts = {
            'qwerty': [
                'QWERTYUIOP'.split(''),
                'ASDFGHJKL;'.split(''),
                'ZXCVBNM,./'.split('')
            ],
            'colemak': [
                'QWFPGJLUY;'.split(''),
                'ARSTDHNEIO'.split(''),
                'ZXCVBKM,./'.split('')
            ],
            'colemak_dh': [
                'QWFPBJLUY;'.split(''),
                'ARSTGKNEIO'.split(''),
                'ZXCDVMH,./'.split('')
            ],
            'colemak_dhm': [
                'QWFPBJLUY;'.split(''),
                'ARSTGMNEIO'.split(''),
                'ZXCDVKH,./'.split('')
            ],
            'dvorak': [
                "',.PYFGCRL".split(''),
                'AOEUIDHTNS'.split(''),
                ';QJKXBMWVZ'.split('')
            ],
            'workman': [
                'QDRWBJFUP;'.split(''),
                'ASHTGYNEOI'.split(''),
                'ZXMCVKL,./'.split('')
            ],
            'norman': [
                'QWDFKJURL;'.split(''),
                'ASETGYNIOH'.split(''),
                'ZXCVBPM,./'.split('')
            ]
        }

        return layouts[layout]
    }
}

export default AlphaClusterModel
