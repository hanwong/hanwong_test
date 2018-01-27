<template>
  <div>
    <router-link to="/" tag="h2">
      Homeworks
    </router-link>
    <h3>#2</h3>
    
    <section>
      <el-row>
        <el-table
          :data="pageTodos"
          style="width: 100%"
          align="left"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="userId"
            label="userId"
            width="100">
          </el-table-column>
          <el-table-column
            prop="id"
            label="id"
            width="100">
          </el-table-column>
          <el-table-column
            prop="title"
            label="title">
          </el-table-column>
        </el-table>
      </el-row>

      <el-row>
        <el-pagination
          small
          layout="prev, pager, next"
          page-size="40"
          :current-page.sync="currentPage"
          :total="todos.length">
        </el-pagination>

      </el-row>
      
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'NumberTwo',

  data () {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      'todos': 'getTodos'
    }),
    pageTodos () {
      return this.todos.slice(this.currentPage===1 ? 0 : (this.currentPage-1)*40, (this.currentPage-1)*40+40)
    }
  },

  methods: {
    ...mapActions([
      'setTodos'
    ]),
    tableRowClassName({row, rowIndex}) {
      if (row.completed) {
        return 'success-row';
      } else {
        return 'warning-row';
      }
      return '';
    }
  },

  created () {
    this.setTodos()
  }

}
</script>

<style>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
