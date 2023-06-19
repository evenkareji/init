<script setup>
// let { user } = useUserState();

// console.log(user.value.displayName);
</script>
<template>
  <h1 class="text-red-400 text-xl">TypeScriptを用いたfirebase開発</h1>

  <section class="mt-10">
    <span class="px-3">
      <NuxtLink to="/profile">profile</NuxtLink>
    </span>
    <span class="px-3">
      <NuxtLink to="/register">register</NuxtLink>
    </span>
    <span class="px-3">
      <NuxtLink to="/signIn">signIn</NuxtLink>
    </span>
    <span class="px-3">
      <NuxtLink to="/post">Post</NuxtLink>
    </span>
  </section>
  <!-- {{ user.uid }}
  {{ user.displayName }} -->
</template>
