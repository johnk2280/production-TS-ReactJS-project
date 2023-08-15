import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { ArticleViewSelector } from 'features/ArticleViewSelector';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticles());
    });

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames('', {}, [className]) }>
                <ArticleList
                    articleList={ articles }
                    view={ ArticleView.SMALL }
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
