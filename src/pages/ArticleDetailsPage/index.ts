export { articleDetailsPageReducer } from '../ArticleDetailsPage/model/slice';

export type { ArticleDetailsPageSchema } from './model/types';

export type {
    ArticleDetailsRecommendationsSchema
} from './model/types/ArticleDetailsRecommendationsSchema';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage.async';
