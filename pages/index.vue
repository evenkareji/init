<script setup lang="ts">
const { login, user } = useUserState();
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Auth from './auth.vue';
import Post from './post.vue';

let auth: any;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (authUser) => {
    console.log(authUser, 'auth');

    if (authUser) {
      const loginUser: any = {
        uid: authUser.uid,
        displayName: authUser.displayName,
      };
      console.log(user.value, 'before');

      login(loginUser);
      console.log(user.value, 'after');
    }
  });
});
</script>
<template>
  <div v-if="user">
    <Post />
  </div>
  <div v-else>
    <Auth />
  </div>
</template>
