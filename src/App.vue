<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="add($event)">

    <h2>进行中</h2>

    <ul>
      <li v-for="(item,k) in list" v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()">{{item.title}} <button @click="remove(k)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>

    <ul>
      <li v-for="(item,k) in list" v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()">{{item.title}} <button @click="remove(k)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>

import storage from './model/localStorage.js';

console.log(storage);

export default {
  name: 'app',
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods: {
      add(e){
        if (e.keyCode==13) {
            this.list.push({
              title: this.todo,
              checked: false
            });
        }
        storage.set('list',this.list);
      },
      remove(k){
        this.list.splice(k,1);

        storage.set('list',this.list);
        
      },
      saveList(){
        storage.set('list',this.list);
        
      } 
  },
  mounted(){
        var list=storage.get('list');
        
        if (list) {
          this.list=list;
        }
      }
}
</script>

<style>
  .purple {
    color: purple;
  }

  .pink {
    color: pink;
  }

  .fuchsia {
    color: fuchsia;
  }

  .box {
    width: 300px;
    height: 100px;
    border: 1px solid #ccc;
  }
</style>
