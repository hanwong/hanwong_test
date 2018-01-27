<template>
  <div>
    <router-link to="/" tag="h2">
      Homeworks
    </router-link>
    <h3>#1</h3>

    <section>
      <el-row>
        <el-col :span="17">
          <el-input placeholder="Please input" v-model="inputTodo"></el-input>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-button 
            @click="addTodo(inputTodo)"
            type="primary" 
            style="width: 100%">추가하기</el-button>
        </el-col>
      </el-row>
      <el-row>
         <el-table
          :data="searchTodos"
          align="left"
          style="width: 100%"
          empty-text="항목이 없습니다."
          >
          <el-table-column
            type="index"
            label="순서">
          </el-table-column>
          <el-table-column
            prop="todo"
            label="할 일">
          </el-table-column>
          <el-table-column
            label="기능">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteTodo(scope.$index)"
                type="text">
                삭제
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NumberOne',
  
  data () {
    return {
      inputTodo: '',
      todoList: [
        { todo: '청소' },
        { todo: '빨래' }
      ]
    }
  },

  computed: {
    searchTodos () {
      if (this.inputTodo) {
        let result = []
        this.todoList.forEach((t) => {
          if (t.todo.indexOf(this.inputTodo) !== -1) {
            result.push(t)
          }
        })
        return result
      } else {
        return this.todoList
      }
    }
  },

  methods: {
    addTodo (typedTodo) {
      let duplicated = this.searchTodos.find((t) => {
          return t.todo === typedTodo
        })
      if (!duplicated) {
        this.todoList.push({todo: typedTodo})
        return this.inputTodo = ''
      } else {
        return this.$message.error('중복된 할 일이 있습니다.')
      }
    },
    deleteTodo (idx) {
      return this.todoList.splice(idx,1)
    }
  }
}
</script>

<style>
.el-table__header th {
  background-color: #f5f7fa;
}
</style>
