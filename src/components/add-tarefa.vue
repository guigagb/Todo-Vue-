<template>
  <div class="add-tarefa">
    <input
      @keypress.enter="adicionarTarefa"
      type="text"
      maxlength="25"
      placeholder="nova tarefa"
      v-model="descricao"
    />
    <button @click="adicionarTarefa" title="Adicionar Tarefa">+</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  data() {
    return {
      descricao: "",
      count: 0
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.descricao.trim() === "") return;

      this.count++;

      let tarefa = {
        id: this.count,
        descricao: this.descricao.trim(),
        concluida: false
      };

      barramento.adicionarTarefa(tarefa);
      this.descricao = "";
    }
  }
};
</script>

<style>
.add-tarefa {
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 15px;
}

.add-tarefa input {
  height: 25px;
  width: 50%;
  padding: 5px;
  background-color: rgb(26, 43, 141);
  border: 1px solid gray;
  border-right-style: none;
  color: #fff;
}

.add-tarefa button {
  height: 37px;
  padding: 5px;
  width: 37px;
  border: 1px solid gray;
  border-left-style: none;
  background-color: rgb(0, 98, 255);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
</style>