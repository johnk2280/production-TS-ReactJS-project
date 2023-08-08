import { ArticleDetails } from 'entities/Article';
import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetaisPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');

    const { id } = useParams();

    if (!id) {
        return (
            <div className={ classNames('', {}, [className]) }>
                { t('Статья не найдена') }
            </div>
        );
    }

    return (
        <div className={ classNames('', {}, [className]) }>
            <ArticleDetails id={ id }/>
            <Text
                className={ cls.commentTitle }
                title={ t('Комментарии') }
            />
            <CommentList isLoading={ true } />
        </div>
    );
};

export default memo(ArticleDetailsPage);
