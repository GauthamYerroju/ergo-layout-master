import ClusterModel from './cluster'
import AlphaClusterModel from './alpha'
import NumberClusterModel from './number'
import FunctionClusterModel from './function'

const ClusterTypes = {
    'Generic': ClusterModel,
    'Alpha': AlphaClusterModel,
    'Number': NumberClusterModel,
    'Function': FunctionClusterModel,
};
// this.availableClusters = [
//     {
//         label: 'Alpha (10x5)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Alpha - Left (10x3)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Alpha - Right (10x3)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Numbers (10x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Fn Keys (12x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Fn Keys - 13-24 (12x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Thumb Keys - Left (3x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Thumb Keys - Right (3x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Thumb Keys - Centered (5x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Arrows (3x2)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Nav Cluster (3x2)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'PrntScrn, ScrlLk, Pause (3x1)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
//     {
//         label: 'Numpad (4x5)',
//         keyCodes: 'QWERTASDFGZXCVB'.split(''),
//     },
// ];

export default ClusterModel
export { ClusterTypes, ClusterModel, AlphaClusterModel, NumberClusterModel, FunctionClusterModel }
