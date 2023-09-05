import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { Text } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props: ArticleInfiniteListProps) => {
    const {
        className = ''
    } = props;
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (<Text text={ error }/>);
    }

    return (
        <ArticleList
            className={ classNames('', {}, [className]) }
            isLoading={ isLoading }
            articleList={ articles }
            view={ view }
        />
    );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
