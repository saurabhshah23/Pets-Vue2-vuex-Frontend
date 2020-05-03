<template>
  <div class="home-container">
    <h1>{{headline|capitalizeText}}</h1>
    <p>Cats:{{allCats}}/{{animalsCount}}</p>
    <p>Dogs:{{getAllDogs}}/{{animalsCount}}</p>
    <button class="btn btn-primary" @click="togglePetForm">Add new pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="isPetFormActive">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1"
      description="Name of the new pet">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>{{formData.name}}

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="species"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Age:" label-for="input-3">
        <b-form-input id="input-3"
        v-model="formData.age"
        required placeholder="Enter age"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      headline: 'Adopt a new friend',
      isPetFormActive: false,
      formData: {
        name: '',
        age: 0,
        species: null
      },
      species: ['cats', 'dogs']
    }
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats', 'getAllDogs']),
    // it can also be used directly via this.$store.getters.<methodname> as below example
    allCats () {
      return this.$store.getters.getAllCats
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.isPetFormActive = !this.isPetFormActive
    },
    handleSubmit () {
      console.log('form submit...')
      const { species, name, age } = this.formData
      const payload = {
        species,
        pet: {
          name, age, species
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  filters: {
    capitalizeText (value) {
      return value.toUpperCase()
    }
  }
}
</script>
