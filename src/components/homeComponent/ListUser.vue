<template>
  <div>
    <button v-on:click="changeTile" type="button" class="btn btn-outline-primary">Change Title</button>
    <p class="title">{{ title }}</p>
    <div class="list-user">
          <user v-for="user in listUser" v-bind:key=user.id v-bind:user="user" class="user" v-on:deleteUser="deleteUser"></user>
    </div>
  </div>
</template>
<script>
import User from "@/components/homeComponent/User";
export default {
  props: {
    title: String
  },
  name: "ListUser",
  components: {
    User
  },
  data() {
    return {
      listUser:[
        {id: 1, email: "test1@gmail.com", active: true},
        {id: 2, email: "test2@gmail.com", active: true},
        {id: 3, email: "test3@gmail.com", active: true},
        {id: 4, email: "test4@gmail.com", active: true},
        {id: 5, email: "test5@gmail.com", active: true},
        {id: 6, email: "test6@gmail.com", active: true},
      ]
    }
  },
  methods: {
    changeTile($event) {
      this.$emit('changeTile');
    },
    deleteUser(data) {
      let index = -1;
      index = this.listUser.filter((e, idx) => {
        if (data === e) return idx
      })
      console.log("eeee", index)
      // this.listUser.forEach((e, idx) => {
      //   if (e.id === data) {
      //     index = idx;
      //     console.log(index)
      //   }
      // })
      if(index !== -1) {
        this.listUser.splice(index, 1)
      }
      console.log('dddddd', data)
    }

  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
  }
  .list-user {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .user {
    padding: 30px;
    margin-bottom: 30px;
    border: 1px solid #333;
    width: calc(33.333% - 20px);
  }
</style>