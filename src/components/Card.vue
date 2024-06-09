<template>
    <div class="search">
        <input type="text" @keyup.enter="filteredCharacters()" v-model="searchText"
            placeholder="Informe seu personagem">
        <div class="buttons">
            <button @click="filteredCharacters">
                <icon name="magnifying-glass" />
            </button>
        </div>
    </div>
    <div v-if="searchText === '' || searchText === null">
        <div class="main">
            <div class="container" v-for="characters in lista">
                <div class="container-items">
                    <img :src="characters.image" alt={{characters.name}} class="character-image" />
                    <div class="character-specs">
                        <div class="card-name">
                            {{ characters.name }}
                        </div>
                        <div class="card-specs">
                            <p>{{ characters.species }}</p>
                            <p>{{ characters.status }}</p>
                            <p>{{ characters.location.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="main">
            <div class="container" v-for="characters in listaFiltrada">
                <div class="container-items">
                    <img :src="characters.image" alt={{characters.name}} class="character-image" />
                    <div class="character-specs">
                        <div class="card-name">
                            {{ characters.name }}
                        </div>
                        <div class="card-specs">
                            <p>{{ characters.species }}</p>
                            <p>{{ characters.status }}</p>
                            <p>{{ characters.location.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button @click="previousPage" :disabled="page === 1">
            <icon name="arrow-left" />
        </button>
        <button @click="nextPage" :disabled="page === 42">
            <icon name="arrow-right" />
        </button>
    </div>
</template>

<script>
const URL = "https://rickandmortyapi.com/api";

export default {
    name: "Card",
    data() {
        return {
            lista: [],
            totalPage: 42,
            page: 1,
            searchText: '',
            listaFiltrada: [],
        }
    },
    computed: {

    },
    mounted() {
        this.fetchRickAndMortyApi()
    },
    methods: {
        async fetchRickAndMortyApi() {
            const result = await fetch(`${URL}/character?page=${this.page}`);
            const json = await result.json();
            this.lista = json.results;
        },
        async nextPage() {
            if (this.page < this.totalPage) {
                this.page++;
                await this.fetchRickAndMortyApi();
            }
        },
        async previousPage() {
            if (this.page > 1) {
                this.page--;
                await this.fetchRickAndMortyApi();
            }
        },
        filteredCharacters() {
            this.listaFiltrada = this.lista.filter(character => character.name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    }
};
</script>
<style scoped>
.search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 32px;
}

.search input {
    width: 240px;
    height: 24px;
    margin-right: 16px;
    border: none;
    border-radius: 50px;
    background-color: var(--BTN-BACKGROUND);
    color: var(--FONT-COLOR);
    text-indent: 16px;
}

.search div {
    margin: 0;
    margin-left: 16px;
}

.container {
    padding: 12px;
    width: 18vw;
    border-radius: 10px;
    background-color: var(--CARD-BACKGROUND);
    align-items: center;
}

.container:hover {
    background-color: var(--CARD-BACKGROUND-HOVER);
    transition: background-color 0.3s ease;
}

.main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
}

.container-items {
    display: flex;
    flex-direction: column;
}

.character-image {
    border-radius: 8px;
    width: 100%;
    height: auto
}

.character-specs {
    margin: 16px 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 80px;
    color: var(--FONT-COLOR);
    padding-left: 16px;
}

.card-name {
    flex: 2;
    font-weight: bold;
    margin-bottom: 16px;
}

.card-specs {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.card-specs p {
    margin: 0px
}

.buttons {
    display: flex;
    margin: 64px;
    margin-bottom: 0px;
    justify-content: space-around;
}

.buttons button {
    margin-left: 16px;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    background-color: var(--BTN-BACKGROUND);
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
    font-size: 16px;
}
</style>
