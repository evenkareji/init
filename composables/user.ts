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
