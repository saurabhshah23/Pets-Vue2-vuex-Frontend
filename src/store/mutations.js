export default {
  appendPet: (state, payload) => {
    const { pet, species } = payload
    state[species].push(pet)
    state.pets.push(pet)
  }
}
