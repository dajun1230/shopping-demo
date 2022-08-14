<template>
  <div class="user-manage">
    <div class="head">
      <n-space>
        <n-button type="primary">新增用户</n-button>
        <n-button strong secondary>批量导入</n-button>
      </n-space>
    </div>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NSpace, NButton, NDataTable } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';

type User = {
  id: number;
  username: string;
  age: number;
  sex: string;
  phone: string;
  email: string;
}

const data: User[] = [
  { id: 1, username: 'John Brown', age: 32, sex: '男', phone: '18122342535', email: '11233@google.com' },
  { id: 2, username: "Jim Green", age: 25, sex: '女', phone: '18122342535', email: '11233@google.com' },
  { id: 3, username: 'Jim Tom', age: 20, sex: '男', phone: '18122342535', email: '11233@google.com' }
];

const columns: DataTableColumns<User> = [
  {
    title: '用户ID',
    key: 'id'
  },
  {
    title: '用户名',
    key: 'username'
  },
  {
    title: '年龄',
    key: 'age'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '手机号码',
    key: 'phone'
  },
  {
    title: '邮箱',
    key: 'email'
  },
  {
    title: '操作',
    key: 'action',
    render: () => {
      return h(NButton, { text: '删除'});
    }
  }
];
const pagination = {
  pageSize: 10
};

</script>

<style scoped lang="scss">
.user-manage {
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  overflow: auto;
  .head {
    margin-bottom: 20px;
  }
}
</style>
