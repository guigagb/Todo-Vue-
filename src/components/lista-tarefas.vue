<template>
  <div>
    <div class="loading">

    </div>
    <div class="lista-tarefas">
      <tarefa v-for="tarefa in tarefas" :tarefa="tarefa" :key="tarefa.descricao"></tarefa>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento";
import tarefa from "./tarefa.vue";

export default {
  components: { tarefa },
  data() {
    return {
      tarefas: []
    };
  },
  created() {
    barramento.onAdicionarTarefa(tarefa => {
      this.tarefas.push(tarefa);
    });
  }
};
</script>

<style>

.lista-tarefas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;
  height: 300px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}

</style>