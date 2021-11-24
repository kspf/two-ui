<script>
  import TwoButton from '../index'

  export default {
    data () {
      return {
        disabled: true,
        loading: false,
      }
    },
    components: {
      TwoButton
    },
    methods: {
      setDisabled (is) {
        this.disabled = !is;
      },
      setLoading (is) {
        this.loading = !is;
      }
    }
  }
</script>

<template>
  <two-button :disabled="disabled" :loading="loading">这是按钮</two-button>
  <br>
  <two-button @click="setDisabled(disabled)">{{ disabled ? '启用' : '禁用' }}</two-button>
  <br>
  <two-button @click="setLoading(loading)">{{ loading ? 'hideLoading' : 'loading' }}</two-button>
</template>

<style scoped>
</style>
