<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,
  },
};
</script>
