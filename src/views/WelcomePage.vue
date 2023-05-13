<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="isEnabled">{{ subtitle }}</p>
  </div>
  <button @dblclick="toggle">トグルする</button>
  <p>{{ text }}</p>
</template>

<script>
export default {
  data () {
    return {
      title: '初めてのVue.jsアプリです！',
      subtitle: 'ようこそ',
      isEnabled: true
    }
  },
  computed: {
    text () {
      if (this.isEnabled) {
        return 'こんにちは！'
      } else {
        return 'さよなら！'
      }
    }
  },
  methods: {
    toggle () {
      this.isEnabled = !this.isEnabled
    }
  }
}
</script>
