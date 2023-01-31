import { useContext } from 'react';
import { useGlobalContext } from '../context/GlobalContext.js';
import { useAuthContext } from '../context/AuthContext.js';

export function useGlobal() {
  useContext(useGlobalContext);
}

export function useAuth() {
  useContext(useAuthContext);
}
