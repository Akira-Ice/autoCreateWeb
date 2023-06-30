const manageTemp = `<template>
  <lay-layer v-model="modelFormVisible" :area="['500px', 'auto']">
    <div style="padding: 20px 50px">
      <lay-form :model="model" ref="modelFormRef" label-position="left" required>
        <lay-form-item :label="item.title" :prop="item.key" v-for="item in columns.slice(2, columns.length - 2)" :key="item.key">
          <lay-input v-model="model[item.key]"></lay-input>
        </lay-form-item>
        <lay-form-item style="text-align: center">
          <lay-button type="primary" @click="submit">提交</lay-button>
          <lay-button @click="reset">重置</lay-button>
        </lay-form-item>
      </lay-form>
    </div>
  </lay-layer>
  <lay-table
    :page="page"
    :columns="columns"
    :loading="loading"
    :default-toolbar="true"
    :data-source="dataSource"
    :autoColsWidth="true"
    :even="true"
    v-model:selected-keys="selectedKeys"
    @change="change"
  >
    <template #status="{ row }">
      <lay-switch :model-value="row.status" @change="changeStatus($event, row)"></lay-switch>
    </template>
    <template v-slot:toolbar>
      <lay-button size="sm" type="primary" @click="changeVisible(null)">新增</lay-button>
      <lay-button size="sm" @click="remove">删除</lay-button>
    </template>
    <template v-slot:operator="{ row }">
      <lay-button size="xs" type="primary" @click="changeVisible(row)">编辑</lay-button>
    </template>
  </lay-table>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const loading = ref(false);
const selectedKeys = ref([]);

const page = reactive({ current: 1, limit: 10, total: 100 });

/**
* Akira
* 表头列配置，严格按照 layui-vue 设计
*/
const columns = ref([
  { title: "选项", width: "55px", type: "checkbox", fixed: "left" },
  { title: "编号", width: "80px", key: "id", fixed: "left", sort: "desc" },
  { title: "姓名", width: "80px", key: "name", sort: "desc" },
  { title: "邮箱", width: "120px", key: "email" },
  { title: "性别", width: "80px", key: "sex" },
  { title: "年龄", width: "80px", key: "age" },
  { title: "城市", width: "120px", key: "city" },
  { title: "签名", width: "260px", key: "remark" },
  { title: "时间", width: "120px", key: "joinTime" },
  { title: "状态", width: "80px", key: "status", customSlot: "status" },
  { title: "操作", width: "150px", customSlot: "operator", key: "operator", fixed: "right" },
]);

/** U */
const change = (page: any) => {
  loading.value = true;
  setTimeout(async () => {
    dataSource.value = (await loadDataSource(page.current, page.limit)) as any;
    loading.value = false;
  }, 500);
};

const changeStatus = async (isChecked: boolean, row: any) => {
  /**
   * Akira
   * 修改状态请求，建议使用 async await
   */
  row.status = isChecked;
};

/** U-END */

/** R */
const dataSource = ref([]);

const loadDataSource = async (page: any, pageSize: number) => {
  /**
   * Akira
   * 获取数据请求，并将 response 返回
   */

  // 假mock
  const response = [];
  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = page * pageSize;
  for (let i = startIndex; i <= endIndex; i++) {
    response.push({
      id: i,
      age: "18",
      sex: "男",
      name: "张三",
      email: "test@qq.com",
      remark: "花开堪折直须折,莫待无花空折枝.",
      joinTime: "2022-02-09",
      city: "浙江杭州",
      status: true,
    });
  }
  // 假mock - END
  return response;
};
/** R-END */

/** D */
const remove = async () => {
  if (selectedKeys.value.length != 0) {
    /**
     * Akira
     * 删除数据请求
     */
    change(page);
  }
};
/** D-END */

/** modelForm */
const model = reactive<any>({});
const modelFormRef = ref();
const modelFormVisible = ref(false);

// 重置表单
const reset = function () {
  modelFormRef.value.reset();
};

const changeVisible = (row: any) => {
  if (row) Object.assign(model, row);
  else {
    Object.keys(model).forEach((item: string) => {
      model[item] = "";
    });
  }
  modelFormVisible.value = !modelFormVisible.value;
};

const submit = function () {
  modelFormRef.value.validate(async (isValidate: boolean, model: any, errors: any) => {
    if (isValidate) {
      /**
       * Akira
       * 新增 或 修改 请求
       * 根据 model.id 判断，存在即是修改，不存在就是新增
       */
      console.log("AKira--------", model);
      modelFormVisible.value = !modelFormVisible.value;
    }
  });
};

/** modelForm-END */

onMounted(() => {
  change(page);
});
</script>`;
module.exports = manageTemp;
