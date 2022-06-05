<script>
let id = 0

export default {
  data() {
    return {
      newItem: '',
      items: [
        { id: id++, text: 'Jajka' },
        { id: id++, text: 'Mleko' },
        { id: id++, text: 'Sok' }
      ]
    }
  },
  methods: {
    addItem() {
      this.items.push({ id: id++, text: this.newItem })
      this.newItem = ''
    },
    removeItem(item) {
      this.items = this.items.filter((t) => t !== item)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addItem">
    <input v-model="newItem">
    <button>Add Item</button>    
  </form>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
      <button @click="removeItem(item)">X</button>
    </li>
  </ul>
</template>