import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  error: string;
  isLoggedIn: boolean; 
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setError: (error: string) => void;
  setIsLoggedIn: (status: boolean) => void; 
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  error: "",
  isLoggedIn: false, 
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
  setIsLoggedIn: (status) => set({ isLoggedIn: status }), 
  reset: () => set({ email: "", password: "", error: "", isLoggedIn: false }), 
}));
