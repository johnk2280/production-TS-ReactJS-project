import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type Article, ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import cls from './ArticleListItem.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    onClick: (id: string) => void;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const {
        className = '',
        view,
        article,
        onClick
    } = props;

    const handleClickArticle = useCallback(() => {
        onClick(article.id);
    }, [article.id, onClick]);

    if (view === ArticleView.BIG) {
        return (
            <div className={ classNames('', {}, [className, cls[view]]) }>
                <Card >
                    <div className={ cls.header }>
                        <Avatar size={ 30 } src={ article.user.id }/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={ classNames('', {}, [className, cls[view]]) }>
            <Card onClick={ handleClickArticle }>
                <div className={ cls.imageWrapper }>
                    <img src={ article.img } alt={ article.title } className={ cls.img }/>
                    <Text text={ article.createdAt } className={ cls.date }/>
                </div>
                <div className={ cls.infoWrapper }>
                    <Text text={ article.type.join(', ') } className={ cls.types }/>
                    <>
                        <Text text={ String(article?.views) } className={ cls.views }/>
                        <Icon Svg={ EyeIcon }/>
                    </>
                </div>
                <Text text={ article.title } className={ cls.title }/>
            </Card>
        </div>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
