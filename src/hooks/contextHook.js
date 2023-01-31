import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.js';

export function useGlobal() {
  useContext(GlobalContext);
}
