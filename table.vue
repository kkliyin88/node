<template>
  <div>
  <el-button @click="add">添加</el-button>
  <el-button @click="delete1">删除</el-button>
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection">
      </el-table-column>
      <el-table-column type="index" prop="index1" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      
      <el-table-column prop="name" label="姓名" width="180">
      <template slot-scope="scope">
      <div v-if="scope.row.date">
      <el-select v-model="scope.row.name" placeholder="请选择" @change="changeName">
    <el-option
      v-for="(item,index) in names"
      :key="index"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
      </div>
      </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
      <template slot-scope="scope">
      <div v-if="scope.row.date">
      <el-select v-model="scope.row.address" placeholder="请选择">
    <el-option
      v-for="(item,index) in addresss"
      :key="index"
      :label="item.address"
      :value="item.address">
    </el-option>
  </el-select>
      </div>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2019',
          name: '',
          address: ''
        }],
        names: [
          {
            name:"小张",
            value:"01"
          },
          {
            name:"小王",
            value:"02"
          },
          {
            name:"小李",
            value:"03"
          }
        ],
        addresss:[
          {
            address:"北京",
            value:"01"
          },
          {
            address:"上海",
            value:"02"
          },
          {
            address:"广州",
            value:"03"
          },
        ],
        selectedName:[],
        vals:[]
      }
    },
    methods: {
      // 添加行
      add(){
        let i=this.tableData.length;
      let obj={
        date:'2019',
        name:'',
        address:''
      }
      this.tableData.unshift(obj)
      },
      changeName(item){
         
      },
      // 选中行
      handleSelectionChange(val){
        this.vals=val
        console.log(this.tableData)
        console.log(this.names)
       
      },
      // 删除行
      delete1(){
        for(let i=0;i<this.vals.length;i++){
          for(let j=0;j<this.tableData.length;j++){
            if(this.vals[i].name==this.tableData[j].name){
              this.tableData.splice(0,1)
            }
          }
        }
      }
    },
    watch: {
         handler(data){
        for(let i=0;i<this.tableData.length;i++){
          for(let j=0;j<this.names.length;j++){
            if(this.tableData[i].name==this.names[j].name){
              console.log('--')
              this.names.splice(j,1)
            }
          }
        }
      },
      deep:true
    },
  }
</script>