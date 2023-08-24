import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsPageHasEditPermission } from '../../model/selectors/editPermissions';
import { getArticleDetailsData } from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const hasEditPermission = useSelector(getArticleDetailsPageHasEditPermission);
    const article = useSelector(getArticleDetailsData);

    const backToArticleList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        article && navigate(`${RoutePath.article_details}${article.id}/edit`);
    }, [article, navigate]);
    return (
        <div className={ classNames(cls.ArticleDetailsPageHeader, {}, [className]) }>
            <Button
                theme={ ButtonTheme.OUTLINE }
                onClick={ backToArticleList }
            >
                { t('< НАЗАД') }
            </Button>
            {
                hasEditPermission && (
                    <Button
                        className={ cls.editBtn }
                        theme={ ButtonTheme.OUTLINE }
                        onClick={ onEditArticle }
                    >
                        { t('Редактировать') }
                    </Button>
                )
            }

        </div>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
