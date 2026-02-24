import { deleteUser, getUser, setUser } from '@/services/user.service';
import { create } from 'zustand';

interface AuthStore {
  isLoggedIn: boolean | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: null,
  checkAuth: async () => {
    const {success, user} = await getUser();
    if (success && user) {
      set({ isLoggedIn: true });
    }
    else {
      set({ isLoggedIn: false });
    }
  },
  login: async (email: string, password: string) => {
    console.log('login', email, password);
    //let result = await setUser(email, password);
    await setUser(email, password);
    //if (result.success) {
        set({ isLoggedIn: true });
//}
  },
  logout: async () => {
    await deleteUser();
    set({ isLoggedIn: false });
  },
}))

export default useAuthStore;