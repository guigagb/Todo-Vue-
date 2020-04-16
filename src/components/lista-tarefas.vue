<template>
  <div>
    <div class="loading">

    </div>
    <div class="lista-tarefas">
      <tarefa 
        v-for="(tarefa,i) in tarefas" 
        :tarefa="tarefa" 
        :key="i" 
        :index="i">
      </tarefa>
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
      tarefas: [],
    };
  },
  methods:{
   
  },
  created() {
    barramento.onAdicionarTarefa(tarefa => {
      this.tarefas.push(tarefa)
    });

    barramento.onDeletarTarefa(index =>{
      this.tarefas.splice(index,1);
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