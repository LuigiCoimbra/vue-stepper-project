<style>
#app {
  display: grid;
  gap: 15px;
  justify-items: center;
}
form {
  display: grid;
  justify-items: center;
  width: 85%;
  height: auto;
}
section {
  display: grid;
  justify-items: center;
  align-content: center;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.container input:checked ~ .checkmark {
  background-color: #ff5a00;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container input:checked ~ .checkmark {
  background-color: #ff5a00;
}
.radiomark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #7c7c7c;
}
.radiomark:after {
  content: "";
  position: absolute;
  display: none;
}
.container .radiomark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.container input:checked ~ .radiomark:after {
  display: block;
  background-color: #7c7c7c;
  transition: 1s;
}
form button {
  margin-top: 25px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ff5a00;
  background-color: #fff;
}
form button:hover {
  border: 1px solid #fff;
  background-color: #ff5a00;
  color: #fff;
  transition: 1s;
}
.header {
  display: flex;
  width: 85%;
  justify-content: center;
}
.header-item {
  display: flex;
  align-items: center;
}
.step-header {
  color: #7c7c7c;
  cursor: pointer;
}
.active-step {
  color: black;
}
.form-actions {
  display: flex;
}
</style>
<template>
  <form>
    <div class="header">
      <div class="header-item" v-for="(item, index) in items" :key="item" :style="{'width': 100 / items.length + '%'}" @click="clickToNav(index)">
        <h3 class="step-header" :class="stepconfig.step == index ? 'active-step' : ''">{{ item }}</h3>
        <hr size="2" width="100%">
      </div>
    </div>
    <template v-for="(item, index) in items" :key="item">
      <section :id="`step${index}`" v-if="stepconfig.step == index">
        <slot :name="`item${index+1}`"></slot>
      </section>
    </template>
    <div class="form-actions">
      <button v-if="stepconfig.step != 0" @click.prevent="prevStep" class="prevStep">
        Anterior
      </button>
      <button
        v-if="stepconfig.step != items.length-1"
        @click.prevent="nextStep"
        class="nextStep"
      >
        Proximo
      </button>
      <button
        v-if="stepconfig.step == items.length-1 && stepconfig.btnSend == true"
        @click.prevent="submit"
        class="submit"
      >
        Enviar
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "StepperHome",
  props: ["items", "stepconfig", "form"],
  data() {
    return {
      objetoEnvio: [],
    };
  },
  methods: {
    nextStep() {
      this.$props.stepconfig.step++;
    },
    clickToNav(index) {
      this.$props.stepconfig.step = index
    },
    prevStep() {
      this.$props.stepconfig.step--;
    },
    submit() {
      this.objetoEnvio.push({
        format: this.form.format,
        picked: this.form.picked,
        nome: this.form.nome,
        tornment: this.form.tornment
      })
      console.log(this.objetoEnvio)
    },
  },
};
</script>
