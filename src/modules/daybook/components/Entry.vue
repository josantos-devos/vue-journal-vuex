<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'daybook-entry', params: { id: 10 } })">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2023, martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi veniam voluptate aperiam omnis odit architecto error
            nisi placeat animi ut earum, corrupti veritatis quam ratione ex quibusdam molestias expedita. Maiores.
        </div>
    </div>
</template>

<script>
export default {
    name: 'entry-component'
}
</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transform: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: gray, $amount: 45);
            transform: 0.2s all ease-in;
        }
    }

    .entry-description {
        font-size: 12px;
    }
</style>