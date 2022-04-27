<template>
    <div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    name: 'Layout',
    components: { Nav },
};
</script>

<style></style>
