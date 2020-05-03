export default {
  addPet: (context, payload) => {
    const { commit } = context
    commit('appendPet', payload)
  }
}
