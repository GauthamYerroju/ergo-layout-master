import ClusterModel from './cluster'
import transpose from '../transpose'

class AlphaClusterModel extends ClusterModel {
    constructor(x, y, layout='qwerty') {
        super(x, y, 10, 3)
        this.layout = layout
    }

    set layout(layout) {
        const keys = transpose(AlphaClusterModel.keysByLayout(layout))
        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                this.keys[i][j] = keys[i][j]
            }
        }
    }

    static keysByLayout(layout) {
        const layouts = {
            'qwerty': [
                'QWERTYUIOP'.split(''),
                'ASDFGHJKL;'.split(''),
                'ZXCVBNM,./'.split('')
            ]        ,
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
