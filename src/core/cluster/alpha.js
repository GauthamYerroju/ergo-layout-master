import Cluster from './cluster.js'

class AlphaCluster extends Cluster {
    constructor(x, y, layout='qwerty') {
        super(x, y, 10, 3)
        this.layout = layout
    }

    set layout(layout) {
        const keys = this.transpose(AlphaCluster.keysByLayout(layout))
        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                this.keys[i][j] = keys[i][j]
            }
        }
    }

    static keysByLayout(layout) {
        const layouts = {
            'qwerty': [
                'qwertyuiop'.split(''),
                'asdfghjkl;'.split(''),
                'zxcvbnm,./'.split('')
            ]        ,
            'colemak': [
                'qwfpgjluy;'.split(''),
                'arstdhneio'.split(''),
                'zxcvbkm,./'.split('')
            ],
            'colemak_dh': [
                'qwfpbjluy;'.split(''),
                'arstgkneio'.split(''),
                'zxcdvmh,./'.split('')
            ],
            'colemak_dhm': [
                'qwfpbjluy;'.split(''),
                'arstgmneio'.split(''),
                'zxcdvkh,./'.split('')
            ],
            'dvorak': [
                "',.pyfgcrl".split(''),
                'aoeuidhtns'.split(''),
                ';qjkxbmwvz'.split('')
            ],
            'workman': [
                'qdrwbjfup;'.split(''),
                'ashtgyneoi'.split(''),
                'zxmcvkl,./'.split('')
            ],
            'norman': [
                'qwdfkjurl;'.split(''),
                'asetgynioh'.split(''),
                'zxcvbpm,./'.split('')
            ]
        }

        return layouts[layout]
    }

    transpose(matrix) {
        const rows = matrix.length, cols = matrix[0].length;
        const grid = [];
        for (let j = 0; j < cols; j++) {
          grid[j] = Array(rows);
        }
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            grid[j][i] = matrix[i][j];
          }
        }
        return grid;
      }
}

export default AlphaCluster
