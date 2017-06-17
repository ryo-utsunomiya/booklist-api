<template>
    <ul>
        <li v-for="book in books">
            {{ book.title }}
        </li>
    </ul>
</template>

<script>
  export default {
    mounted() {
      console.log('Books Component mounted.')
    },
    data() {
      return {
        books: [
          {title: 'Learning JavaScript'},
          {title: 'Secrets of JavaScript Ninja'},
        ]
      };
    }
  }
</script>