<script setup lang="ts">
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../src/plugins/firebase';
import { ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const { user } = useUserState();
const posts = ref();
const inputtingCompany = ref();
const inputtingOccupation = ref();
const inputtingThoughts = ref();
const router = useRouter();
type Post = {
  // userId: string;
  // username: string;
  company: string;
  occupation: string;
  desc: string;
  // timestamp: string;
};

let auth: any;
onMounted(() => {
  auth = getAuth();
  console.log(auth, 'post.vue auth');
  console.log(user.value, 'post.vue');

  // マウントした時にpushで配列に入れて展開
  onSnapshot(collection(db, 'users'), (querySnapshot) => {
    posts.value = [];
    querySnapshot.forEach((doc) => {
      const post: Post = {
        ...user.value,
        desc: doc.data().desc,
        company: doc.data().company,
        occupation: doc.data().occupation,
      };

      posts.value.push(post);
    });
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log('logout');

    router.push('/');
  });
};
const addFirebase = (
  registerCompany: string,
  registerOccupation: string,
  registerThoughts: string,
) => {
  console.log(registerCompany);
  console.log(registerOccupation);
  console.log(registerThoughts);
  addDoc(collection(db, 'users'), {
    ...user.value,
    occupation: registerOccupation,
    company: registerCompany,
    desc: registerThoughts,
  });
  inputtingCompany.value = '';
  inputtingOccupation.value = '';
  inputtingThoughts.value = '';
};
</script>

<template>
  <div class="text-center my-5">
    <button
      class="bg-slate-400/100 w-64 rounded-md text-white p-1 my-5"
      @click="handleSignOut"
    >
      sign out
    </button>
    <span class="px-3">
      <NuxtLink to="/profile">profile</NuxtLink>
    </span>
    <form
      class="w-96 mx-auto"
      @submit.prevent="
        addFirebase(inputtingCompany, inputtingOccupation, inputtingThoughts)
      "
    >
      <input
        class="block w-full focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
        placeholder="会社名"
        type="text"
        v-model="inputtingCompany"
      />
      <input
        class="block w-full focus:outline-none mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
        placeholder="職種"
        type="text"
        v-model="inputtingOccupation"
      />
      <textarea
        id="message"
        rows="4"
        class="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="感想..."
        v-model="inputtingThoughts"
      ></textarea>
      <input
        type="submit"
        class="bg-sky-500/100 w-full rounded-md text-white p-1 my-5"
        value="送信"
      />
    </form>

    <div class="my-9">
      <div class="my-9 w-96 m-auto">
        <div
          class="rounded-md border-2 border-stone-400 p-5 my-3 text-left"
          v-for="post in posts"
          :key="post.id"
        >
          <!-- <div class="pr-4">名前：{{ post.username }}</div> -->
          <div class="pr-4">会社名：{{ post.company }}</div>
          <div class="pr-4">職種：{{ post.occupation }}</div>
          <div>感想：{{ post.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
