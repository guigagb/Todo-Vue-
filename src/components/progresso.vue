<template>
	<div class="progresso">
		<div class="progresso-concluido" :style="{width: progresso + '%'}">
			<span>{{progresso}}%</span>
		</div>
	</div>
</template>

<script>
import barramento from "@/barramento";

export default {
  data() {
    return {
      qtdTarefas: 0,
      qtdTarefasOk: 0
    };
  },
  computed: {
    progresso: function() {
      if (this.qtdTarefas === 0) return 100;
      return ((100 * this.qtdTarefasOk) / this.qtdTarefas).toFixed(2);
    }
  },
  created() {
    barramento.onAdicionarTarefa(() => {
      this.qtdTarefas++;
    });
    barramento.onAlterarStatus(status => {
      if (status) this.qtdTarefasOk++;
      else this.qtdTarefasOk--;
    });
    barramento.onDeletarTarefa((index, tarefa) => {
      if (tarefa.concluida) 
        this.qtdTarefasOk--;
      this.qtdTarefas--;
    });
  }
};
</script>

<style>
.progresso {
	width: 80%;
	border: 1px solid #000;
	margin-bottom: 20px;
}

.progresso-concluido {
	background-color: green;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	line-height: 25px;
}

.progresso-concluido span {
	position: absolute;
	left: 50%;
	line-height: 25px;
}
</style>