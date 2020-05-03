export default {
  animalsCount: (state) => {
    // return state.cats.length + state.dogs.length
    return state.pets.length
  },
  getAllCats: (state, getters) => { // getters can be used to call other getter methods
    // const bb = getters.animalsCount()
    // console.log('bb=', bb)
    return state.pets.filter(pet => pet.species === 'cats').length
  },
  getAllDogs: (state) => {
    // const aa = this.animalsCount()
    // console.log('aa=', aa)
    return state.pets.filter(pet => pet.species === 'dogs').length
  }
}
