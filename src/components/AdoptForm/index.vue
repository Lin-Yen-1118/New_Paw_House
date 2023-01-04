<template>
  <div class="">
    <n-space vertical>
      <n-form ref="formRef" :model="formValue">
        <n-form-item label="Name" path="user.name">
          <n-input
            v-model:value="formValue.user.name"
            placeholder="Input Name"
            type="text"
          />
        </n-form-item>
        <n-form-item label="Age" path="user.age">
          <n-input v-model:value="formValue.user.age" placeholder="Input Age" />
        </n-form-item>
        <n-form-item label="Address" path="user.address">
          <n-input
            v-model:value="formValue.user.address"
            placeholder="Input Address"
          />
        </n-form-item>
        <n-form-item label="Phone" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Phone Number" />
        </n-form-item>
      </n-form>
    </n-space>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import {
  NForm,
  NFormItem,
  NInput,
  NSpace,
  FormInst,
  FormItemRule,
  FormValidationError,
  useMessage,
} from 'naive-ui';
const formValue = ref({
  user: {
    name: '',
    age: '',
    address: '',
  },
  phone: '',
});
</script>
<style scoped>
:deep(.n-input__input-el[type='text']:focus) {
  outline: none;
  box-shadow: none;
}
</style>
