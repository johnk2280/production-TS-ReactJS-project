export { ArticleView } from './model/types/article';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { getArticleDetailsData } from './model/selectors/articleDetails';

export {
    articleDetailsActions,
    articleDetailsReducer
} from './model/slice/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export type { ArticleDetailSchema } from './model/types/articleDetailSchema';
