<template>
  <StepperHome :items="items" :stepconfig="stepconfig" :form="form">
    <template #item1>
      <h2>{{ items[0] }}</h2>
      <div class="check">
        <label class="container">
          Standard
          <input
            type="checkbox"
            name="standard"
            value="standard"
            id="standard"
            v-model="form.format.standard"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="check">
        <label class="container">
          Modern
          <input
            type="checkbox"
            name="modern"
            value="modern"
            id="modern"
            v-model="form.format.modern"
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="check">
        <label class="container">
          Pauper
          <input
            type="checkbox"
            value="pauper"
            name="pauper"
            id="pauper"
            v-model="form.format.pauper"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </template>
    <template #item2>
      <div><h3>Você sabe o que é Circuito LigaMagic?</h3></div>
      <div class="check">
        <label class="container">
          Sim
          <input type="radio" id="sim" value="Sim" v-model="form.picked" />
          <span class="radiomark"></span>
        </label>
      </div>
      <div class="check">
        <label class="container">
          Não
          <input type="radio" id="nao" value="Não" v-model="form.picked" />
          <span class="radiomark"></span>
        </label>
      </div>
    </template>
    <template #item3>
      <div class="input">
        <h3>Preenche seu nome abaixo</h3>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          id="nome"
          v-model="form.nome"
        />
      </div>
    </template>
    <template #item4>
      <h3>Torneio</h3>
      <StepperHome :items="tornments" :stepconfig="substepconfig">
        <template #item1>
          <input
            type="date"
            name="standard-data"
            id="data"
            v-model="form.tornment.standarddata"
          />
        </template>
        <template #item2>
          <input
            type="date"
            name="modern-data"
            id="data"
            v-model="form.tornment.moderndata"
          />
        </template>
        <template #item3>
          <input
            type="date"
            name="pauper-data"
            id="data"
            v-model="form.tornment.pauperdata"
          />
        </template>
      </StepperHome>
    </template>
  </StepperHome>
</template>

<script>
import StepperHome from "./components/StepperHome.vue";

export default {
  name: "App",
  components: { StepperHome },
  data() {
    return {
      stepconfig: {
        step: 0,
        btnSend: true
      },
      substepconfig: {
        step: 0,
        btnSend: false
      },
      form: {
        tornment: {
          standarddata: null,
          moderndata: null,
          pauperdata: null,
        },
        nome: '',
        picked: null,
        format: {
          pauper: null,
          modern: null,
          standard: null,
        },
      },
      items: [
        "Formato",
        "Questionario",
        "Pagamento",
        "Torneio"
      ],
      tornments: [
        "Standard",
        "Pauper",
        "Modern"
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
