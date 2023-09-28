import { type EntityState } from '@reduxjs/toolkit';
import { type IComment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
