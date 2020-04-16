import Vue from 'vue';

export default new Vue({
    methods: {
        adicionarTarefa(tarefa){
            this.$emit('tarefaAdicionada',tarefa)
        },
        onAdicionarTarefa(callback){
            this.$on('tarefaAdicionada',callback);
        }
    }
});