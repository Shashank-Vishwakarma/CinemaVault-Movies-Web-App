import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('cinemavault-data')),
    setUser: (user) => set({ user })
}));

export default useAuthStore;