import { type StateSchema } from 'app/providers/StoreProvider';
import { type ScrollSchema } from 'features/UI/model/types/UISchema';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state: StateSchema): ScrollSchema => state.ui.scroll;
export const getUIScrollPath = createSelector(
    getUIScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0
);
