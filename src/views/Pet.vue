<template>
  <div>
    <h1>{{pet.breed}} ({{$route.params.species}})</h1>
    <p>{{pet.age}} years old</p>
    <p>Breed: {{pet.breed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats', 'dogs'
    ])
  },
  mounted () {
    this.getPet()
  },
  methods: {
    getPet () {
      const animal = this[this.$route.params.species][this.$route.params.id] // this.cats.0 OR this['cats'][0]
      this.pet = animal
    }
  }
}
</script>
