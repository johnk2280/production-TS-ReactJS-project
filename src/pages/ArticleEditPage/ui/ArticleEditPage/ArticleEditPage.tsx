import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={ classNames(cls.ArticleEditPage, {}, [className]) }>
            {
                isEdit ? t('Редактирование') : t('Создание')
            }
        </Page>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;
