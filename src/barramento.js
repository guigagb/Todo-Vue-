import Vue from 'vue';

export default new Vue({
    methods: {
        adicionarTarefa(tarefa) {
            this.$emit('tarefaAdicionada', tarefa)
        },
        onAdicionarTarefa(callback) {
            this.$on('tarefaAdicionada', callback);
        },
        alterarStatus(boolean) {
            this.$emit('statusAlterado', boolean);
        },
        onAlterarStatus(callback) {
            this.$on('statusAlterado', callback);
        },
        deletarTarefa(index, tarefa) {
            this.$emit('tarefaDeletada', index, tarefa);
        },
        onDeletarTarefa(callback) {
            this.$on('tarefaDeletada', callback);
        }
    }
});