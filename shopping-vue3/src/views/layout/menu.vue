<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-icon="renderMenuIcon"
      :expand-icon="expandIcon"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import { NLayoutSider, NMenu, NIcon } from "naive-ui";
import { CaretDownOutlined } from '@vicons/antd';

const collapsed = ref(false);
const menuOptions = [
  {
    label: '商品管理',
    key: 'good-manage',
    // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
    children: [
      {
        label: '商品列表',
        key: 'good-list'
      }
    ]
  },
  {
    label: '订单管理',
    key: 'order-manage',
    children: [
      {
        label: '订单列表',
        key: 'order-list'
      }
    ]
  },
  {
    label: '用户管理',
    key: 'user-manage',
    children: [
      {
        label: '用户列表',
        key: 'user-list'
      }
    ]
  }
];

const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h(
      'a',
      { href: option.href, target: '_blank' },
      option.label as string
    )
  }
  return option.label as string;
};

const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  // if (option.key === 'sheep-man') return true
  // // 返回 falsy 值，不再渲染图标及占位符
  if (!option.children) return true;
  return h(NIcon, null, { default: () => h(CaretDownOutlined) })
};

const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutlined) })
};

</script>

<style scoped lang="scss"></style>
