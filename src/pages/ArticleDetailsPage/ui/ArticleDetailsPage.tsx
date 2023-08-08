import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import cls from './ArticleDetaisPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    if (!id) {
        return (
            <div className={ classNames('', {}, [className]) }>
                { t('Статья не найдена') }
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ true }>
            <div className={ classNames('', {}, [className]) }>
                <ArticleDetails id={ id }/>
                <Text
                    className={ cls.commentTitle }
                    title={ t('Комментарии') }
                />
                <CommentList isLoading={ commentsIsLoading } comments={ comments }/>
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
