import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text/Text';
import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { type Article, type ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const {
        className = '',
        view = ArticleView.SMALL,
        article,
        target
    } = props;
    const { t } = useTranslation('article-details');

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div className={ classNames('', {}, [className, cls[view]]) }>
                <Card >
                    <div className={ cls.header }>
                        <Avatar size={ 30 } src={ article.user?.avatar }/>
                        <Text text={ article.user.username } className={ cls.username }/>
                        <Text text={ article.createdAt } className={ cls.date }/>
                    </div>
                    <Text title={ article.title } className={ cls.title }/>
                    <Text text={ article.type.join(', ') } className={ cls.types }/>
                    <img src={ article.img } alt={ article.title } className={ cls.img }/>
                    { textBlock && <ArticleTextBlockComponent block={ textBlock } className={ cls.textBlock } /> }
                    <div className={ cls.footer }>
                        <AppLink
                            target={ target }
                            to={ RoutePath.article_details + article.id }
                        >
                            <Button theme={ ButtonTheme.OUTLINE }>
                                { t('Читать далее ...') }
                            </Button>
                        </AppLink>
                        <>
                            <Text text={ String(article?.views) } className={ cls.views }/>
                            <Icon Svg={ EyeIcon }/>
                        </>

                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={ target }
            className={ classNames('', {}, [className, cls[view]]) }
            to={ RoutePath.article_details + article.id }
        >
            <Card >
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
        </AppLink>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
