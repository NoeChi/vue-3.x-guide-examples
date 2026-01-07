<template>
  <main>
    <div>
      <!-- 动态组件默认每次渲染都会重新创建，数据会丢失，使用 <KeepAlive></KeepAlive> 组件可以缓存组件，避免数据丢失 -->
      <KeepAlive>
        <Component :is="currentForm" />
      </KeepAlive>
      <div class="buttons">
        <button
          v-if="currentForm === 'RegisterForm'"
          @click="currentForm = 'ProfileForm'"
        >
          下一步
        </button>
        <template v-else-if="currentForm === 'ProfileForm'">
          <button @click="currentForm = 'RegisterForm'">上一步</button>
          <button>完成</button>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";
import ProfileForm from "./components/ProfileForm.vue";
export default {
  components: {
    RegisterForm,
    ProfileForm,
  },
  data() {
    return {
      currentForm: "RegisterForm",
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.buttons {
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 12px;
  justify-content: space-between;
}
</style>
