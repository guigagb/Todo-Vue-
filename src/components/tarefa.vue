<template>
  <div class="card-tarefa" :class="{concluida: tarefa.concluida}">
    <label>{{tarefa.descricao}}</label>
    <button>x</button>
  </div>
</template>

<script>
export default {
  props: ['tarefa'],
  data() {
    return {};
  }
};
</script>

<style>
.card-tarefa {
  background: rgb(206, 3, 3);
  width: calc(20% - 25px);
  height: 100px;
  border-radius: 10px;
  border-left: 7px solid rgb(133, 2, 2);
  padding: 10px;
  box-sizing: border-box;
  margin-right: 5px;
  margin-bottom: 5px;
}

.card-tarefa.concluida {
  background: rgb(16, 128, 16);
  border-left: 7px solid rgb(21, 95, 2);
}

.card-tarefa label {
  font-size: 20px;
  font-weight: 500;
  position: relative;
  top: 30px;
}

.card-tarefa button {
  float: right;
  right: 5px;
  top: 0px;
  border-radius: 50%;
  background-color: rgba(116, 0, 0, 0.794);
  border: 1px solid red;
  color: white;
  cursor: pointer;
}
.card-tarefa.concluida button {
  background-color: rgba(21, 95, 2, 0.794);
  border: 1px solid green;
}
</style>