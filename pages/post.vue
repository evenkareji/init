<script setup lang="ts">
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../src/plugins/firebase';
import { ref } from 'vue';
const posts = ref();
type User = {
  userId: string;
  username: string;
  email: string;
  company: string;
  occupation: string;
  desc: string;
};

onMounted(() => {
  // マウントした時にpushで配列に入れて展開
  onSnapshot(collection(db, 'users'), (querySnapshot) => {
    posts.value = [];
    querySnapshot.forEach((doc) => {
      const post: User = {
        userId: doc.id,
        desc: doc.data().desc,
        company: doc.data().company,
        occupation: doc.data().occupation,
        username: doc.data().username, //名前いらないかも
        email: doc.data().email,
      };

      posts.value.push(post);
    });
  });
});

// const addFirebase = () => {

// }
</script>

<template>
  <div class="text-center my-5">
    <h1>Firebase</h1>
    <p>CRUD操作</p>

    <div class="my-9">
      <div class="my-9 w-96 m-auto">
        <div
          class="rounded-md border-2 border-stone-400 p-5 my-3 text-left"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="pr-4">名前：{{ post.username }}</div>
          <div class="pr-4">会社名：{{ post.company }}</div>
          <div class="pr-4">職種：{{ post.occupation }}</div>
          <div>感想：{{ post.desc }}</div>
        </div>
      </div>
    </div>

    <!-- <button　@click='func'>送信</button> -->
  </div>
</template>
