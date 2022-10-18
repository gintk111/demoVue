<template>
  <div class="user">
    <p>{{ user.email }}</p>
    <button type="button" class="delete btn" v-on:click="handleDelete"> delete</button>
    <button type="button" class="btn" v-on:click="uploadImg">Upload img</button>
    <input type="file" style="display: none" ref="uploadImg" multiple name="uploadFile" v-on:change="handelFileUpload">
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {}
  },
  data() {
    return {
      file:''
    }
  },
  methods: {
    handleDelete() {
      this.$emit('deleteUser', this.user.id)
    },
    uploadImg() {
      this.$refs.uploadImg.click()
      console.log(this.uploadFile)
    },
    handelFileUpload() {
      this.file = this.$refs.uploadImg.files[0].name;
      console.log(this.file)
    }
  }
}
</script>

<style scoped>
  .user {
    position: relative;
  }
  .user .delete {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10px;
  }
</style>