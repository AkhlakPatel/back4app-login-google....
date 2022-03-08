<template>
  <h2>Back4App </h2>
</template>
<script>
import b4a from '../back4app/Back4AppService'
export default {
  name:"HelloWorld",
  mounted(){
    // b4a.create()
    // b4a.retrive()
    // b4a.query()
    // b4a.sorting()
    // b4a.container()
    // b4a.one2one()
    // b4a.one2many()
    b4a.user()
  }
}
</script>