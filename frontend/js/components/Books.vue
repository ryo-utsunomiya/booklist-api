<template>
    <ul>
        <li v-for="book in books">
            {{ book.title }}({{ book.rate }})
            <button @click="addRate(book.id)">+</button>
            <button @click="subRate(book.id)">-</button>
        </li>
    </ul>
</template>

<script>
  import Api from '../api';

  export default {
    data()
    {
      return {
        books: []
      };
    },
    created() {
      Api.Books.all(data => {
        this.books = data;
      });
    },
    methods: {
      addRate(id) {
        Api.Books.addRate(id, res => {
          const book = this.books.find(book => book.id === id);
          book.rate += 1;
        });
      },
      subRate(id) {
        Api.Books.decRate(id, res => {
          const book = this.books.find(book => book.id === id);
          book.rate -= 1;
        })
      },
    }
  }
</script>
