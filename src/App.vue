<template>
    <div class="container">
        <div class="container-cards">
            <Card />
        </div>
    </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
    name: "App",
    components: {
        Card,
    },
};
</script>

<style scoped>
.container-cards {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    padding: 64px 0px 80px;
    max-width: var(--MAX-CONTENT-WIDTH);
    width: 100%;
}

.container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
</style>
