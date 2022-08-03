import create from "zustand";
import GridModel from "./models/grid";
import { ClusterTypes } from "./models/cluster";

const model = new GridModel(10, 3)

export const useStore = create(set => ({
    model,
    grid: model.plain(),
}))

export default useStore

export const addCluster = (type, params=[0, 0]) => {
    console.log(`Add ${type}`)
    useStore.setState(state => {
        const cluster = new ClusterTypes[type](...params)
        state.model.add(cluster)
        return {
            grid: state.model.plain()
        }
    })
}

export const removeCluster = (clusterIndex) => {
    console.log(`Remove ${clusterIndex}`)
    useStore.setState(state => {
        const cluster = state.model.clusters[clusterIndex]
        state.model.remove(cluster)
        return {
            grid: state.model.plain()
        }
    })
}