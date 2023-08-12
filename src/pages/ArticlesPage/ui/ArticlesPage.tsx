import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, type Article, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames('', {}, [className]) }>
            <ArticleList
                articleList={ [] }
                view={ ArticleView.BIG }
            />

        </div>
    );
};

export default memo(ArticlesPage);
