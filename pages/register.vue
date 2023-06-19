<template>
  <div class="border border-gray-300 w-72 p-3 my-6">
    <h1 class="font-bold text-lg">新規登録</h1>
    <p><input type="text" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>

    <p><button @click="register">Submit</button></p>
    <!-- <p>
      <button
      class="bg-slate-400/100 w-64 rounded-md text-white p-1 my-5"
      @click="signInWithGoogle"
      >
      Sign In With Google
    </button>
  </p> -->
  </div>
</template>
<script setup>
import { ref } from 'vue';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';
const { login, user } = useUserState();
console.log(user.value); //ここで表示されないのでapp.vue
// でlogin関数を扱い。グローバルにstateを渡せるようにする必要がある
const email = ref();
const password = ref();

const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Succcessfully registered');
      router.push('/signIn');
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.message);
    });
};

// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(getAuth(), provider)
//     .then((result) => {
//       console.log(result.user);
//       router.push('/post');
//     })
//     .catch((error) => {
//       alert(error);
//     });
// };
</script>
