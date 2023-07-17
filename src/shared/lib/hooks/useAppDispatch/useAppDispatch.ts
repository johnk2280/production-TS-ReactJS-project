import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider';
import type { Dispatch } from '@reduxjs/toolkit';

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
