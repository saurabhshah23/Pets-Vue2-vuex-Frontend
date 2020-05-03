<template>
  <div>
    <PetTable
      species="cats"
      :pets="cats"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  components: {
    PetTable
  },
  data () {
    return { }
  },
  // computed: {
  //   ...mapState([
  //     'cats'
  //   ])
  // }  // OR even below syntax can be used where state will be available as param to all methods in computed object.
  computed: mapState({
    cats: state => state.cats
  })
}
</script>
