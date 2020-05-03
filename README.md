# vue2-adopt-pets

```
ref: https://www.youtube.com/watch?v=4deVCNJq3qc
by Gwendolyn Faraday via freeCodeCamp on yt.
Vuejs2 + bootstrap-vue + API(fetch) // till time 01:50:00
Vuex + Vue-Router
Suggested:
TheJaredWilcurt (Vue core team) - senior Vue developers
Sarah Drasner (Vue core team) - Vue animations expert
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

=============================================================

## Vue JS 2.0 (020520)

```
ref: https://www.youtube.com/watch?v=4deVCNJq3qc
Vuejs2 + bootstrap-vue + API(fetch) // till time 01:50:00
Vuex + Vue-Router
```

## ===DIRECTIVES:=====================================

```
- v-model // 2-way binding, msg is the data/state attribute
  <input v-model="msg" />

- v-if // evaluates expression in bool
  - chaining with if:
- v-else-if
- v-else

    <div v-if="count===1">Display if</div>
    <div v-else-if="count===2">Display else-if</div>
    <div v-else>Display else</div>

- v-show // same as v-if, but this is hidden and present in dom.

- : / v-bind: // binds html attributes with variable values.

  - :disabled (colon: is the shorthand for v-bind)
    <button onclick="alert('Submit clicked.')" v-bind:disabled="email.length<2" >Submit</button>
    <input v-model="email" :class="redBorderClass: email.lenght<2" />
    <input v-model="email" :class="[email.lenght<2 ? redBorderClass : GreenBorder]" /> // Another Syntax for multiple classes

- v-text // same as interpolation {{}}
    <p v-text="msg"></p>
    <p>{{msg}}</p>
- v-html // parse the text as html while rendering.
- v-once // no updates will be done to once rendered dom.

- v-for // looping an array.

- @ / v-on:event // event handling in vue

  - @click (@ is shorthand)
    <input v-on:keyup.enter="addCat" v-model="newCat" /> // adds new cat on enter.
    <button @click="addCat">Add</button> // adds new cat on button click
  - chaining can also be done.
    <button v-on:click.prevent.stop="addCat">Add</button> // chains event.preventDefault and stopPropagation by these shorthands.

- | filters // apply filter logic to the values using pipe sign |.

  - multiple filters can be chained
    <li>{{cat.name | capitalize | trimIt}}</li>

- {{}} computed // displays the computed value as per the logic
```

## ===new Vue({})=====================================

new Vue({options object}) - to create new app.

```
el: "#app1" // root dom element
component: [] // list of all components used
data: {} // data/state to be used in app
methods:{} // functions used in app
filters: {} // filters for value display
computed:{} // dynamic computation functions

created: function(){}
mounted: function(){} // very useful for manual mounting of Vue app (vm.\$mount(el))
updated: function(){}
destroyed: function(){}
and various other lifecycle methods... (refer lifecycle diagram on vue docs)
```

---

```
OPTIONS OBJECT in new Vue(
{
el: "#app1", // el to bind app to a dom element
component: [ // component to add re-usable components in app.
'cat-list'
]
data: { // data object to bind state variables in vue app.
msg: "hello Vue!",
cats : [{name: " cat1"},{name: "cat2"}],
newCat: ''
},
methods: { // methods provide various functions to be used in app.
addCat: function(){
return this.cats.push({name:this.newCat});
}
},
filters: { // filters to apply pipe filters on values while rendering.
capitalize: function(value){
return value.toUpperCase()
},
trimIt: function(value){return value.trim()}
},
computed: { // computed functions are used for display and more useful with vuex
kittify: function(){
if(this.newCat.length>2) return this.newCat+"y";
}
}
})
```

## ===VueX========================================

```
state,          // central state of the app
actions,        // actions to commit mutations on state
mutations,      // methods to modify state
getters         // selector methods to get specific data from state
mapActions      // used in components, mostly in methods object
mapGetters      // used in components, mostly in computed object to get latest/updated value
mapState        // used in components, mostly in computed object to get latest/updated value
context.commit  // used to call mutations method


===EXAMPLE of store.js file:===
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// all attributes in store are objects.
export default new Vuex.Store({
  state,        // store object is the central store for app  (like store in redux)
  mutations,    // mutations modifies the store. mutations methods are called via commit('mutationMethod',payload)  (like switch of reducer in redux)
  actions,      // side-effects / AJAX here. actions are called from components via ...mapActions in methods or other objects  (like actions in redux)
  getters,      // getters are selectors to query from store and can be used via ...mapGetters in computed or methods, etc. It works like view in RDB.
  modules: {    // modules help in breaking the state and finally combining while creating a store. each module can have its own state, mutations, actions, getters. (like multiple reducers in redux)
  }
})

```

## ===SASS/SCSS========================================

```
SCSS is implemented on app level.
SCSS files are not auto associated with components. They need to be imported appropriately and added in main.js file.
```
