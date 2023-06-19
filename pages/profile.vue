<script setup>
const { user } = useUserState();

console.log(user.value.displayName, 'profile');
</script>
<template>
  <h1 class="text-red-400 text-xl">profile</h1>
  <span class="px-3">
    <NuxtLink to="/post">Post</NuxtLink>
  </span>
</template>
<!-- const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            // 変化するユーザー情報authUserにlogin情報を登録
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    }); -->
