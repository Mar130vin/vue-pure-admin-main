import { Directive } from "vue";
export const buried: Directive = {
  beforeMount(el, binding) {
    console.log(el, binding);
  }
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
};
