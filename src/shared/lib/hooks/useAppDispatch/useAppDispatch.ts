import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider';

// Возвращаемые типы взял из вызова useAppDispatch()
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
