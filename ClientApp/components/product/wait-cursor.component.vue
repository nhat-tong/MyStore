<template>
    <div class="alert alert-info" v-if="busy">
        <i class="fas fa-spinner fa-spin"></i>
        {{ message }}
    </div>
</template>

<script src="./wait-cursor.component.ts"></script>

<style scoped>
    .fas .fa-spinner {
        color: red;
    }
</style>