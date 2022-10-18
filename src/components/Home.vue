<template>
  <div class="container">
    <list-user v-bind:title="title" v-on:changeTile="changeTile"></list-user>
  </div>

</template>
<script>
import ListUser from "@/components/homeComponent/ListUser";
    export default {
        name: 'HomeComponent',
        components: {
          ListUser
        },
        data(){
          return {
            title: "TTTTTTTT"
          }
        },
        methods: {
          changeTile() {
            this.title = "XXXXXXX"
          }
        }
    }
</script>