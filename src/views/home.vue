<template>
    <HelloWorld msg="test msg"/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import HelloWorld from '@/components/HelloWorld.vue'
    export default defineComponent({
        components:{HelloWorld}
    })

</script>

