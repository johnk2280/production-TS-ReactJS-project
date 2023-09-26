import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetaisPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className = ''
    } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams();

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount={ true }>
            <Page className={ classNames(cls.ArticleDetailsPage, {}, [className]) }>
                <VStack gap={ '16' } max={ true }>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={ id }/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments articleId={ id }/>
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
