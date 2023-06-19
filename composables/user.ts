import type { Ref } from 'vue';

export const login =
  (user: Ref<{ uid: string; displayName: string }>) =>
  (value: { uid: string; displayName: string }) =>
    (user.value = value);
export const useUserState = () => {
  const user = useState<{ uid: string; displayName: string }>('user', () => ({
    uid: '',
    displayName: '',
  }));
  return {
    user: readonly(user),
    login: login(user), //一つ目のアロー関数内部に入る
  };
};

// export const inc = (counter: Ref<number>) => () => counter.value++;
// export const dec = (counter: Ref<number>) => () => counter.value--;

// export const useNotSharedCounter = () => {
//   const counter = useState('counter', () => 0);
//   return {
//     counter: readonly(counter),
//     inc: inc(counter),
//     dec: dec(counter),
//   };
// };
