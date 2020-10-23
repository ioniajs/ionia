import create from 'zustand'

const carStore = create(set => ({
    carNumber: 0,
    increaseNumber: () => set(state => ({ carNumber: state.carNumber + 1 })),
    reduceNumber: () => set(state => ({ carNumber: state.carNumber - 1 })),
    removeNumber: () => set({ carNumber: 0 }),
}))

 export default carStore