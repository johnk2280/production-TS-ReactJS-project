import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    // reselect (другое название createSelector) здесь использовать не обязательно.
    getCounter,
    (counter) => counter.value
);
