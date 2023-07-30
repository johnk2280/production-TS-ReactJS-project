import { useDispatch } from 'react-redux';
import type { AppDispatch, StateSchema } from 'app/providers/StoreProvider';
import { type AnyAction, type Dispatch, type ThunkDispatch } from '@reduxjs/toolkit';

// Возвращаемые типы взял из вызова useAppDispatch()
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
