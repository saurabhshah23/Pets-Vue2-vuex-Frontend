<template>
  <div>
      <h1>{{species|capitalizeInitial}} for adoption</h1>
    <b-table striped hover :items="pets">
        <template v-slot:cell(name)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <!-- <a :href="`/pets/:${data.index}`">{{ data.value }}</a> -->
            <router-link :to="`/pets/${species}/${data.index}`">
                {{data.value}}
            </router-link>
        </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  },
  filters: {
    capitalizeInitial (value) {
      const result = value.length > 0
        ? value[0].toUpperCase() + value.substr(1) : value
      return result
    }
  }
}
</script>
