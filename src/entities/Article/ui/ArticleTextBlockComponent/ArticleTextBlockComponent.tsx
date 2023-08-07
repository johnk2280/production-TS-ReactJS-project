import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { type ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className = '',
        block
    } = props;

    return (
        <div className={ classNames(cls.ArticleTextBlockComponent, {}, [className]) }>
            {
                block.title && (
                    <Text title={ block.title } className={ cls.title }/>
                )
            }
            {
                block.paragraphs.map((paragraph, index) =>
                    <Text
                        text={ paragraph }
                        key={ `${index}-${paragraph}` }
                        className={ cls.paragraph }
                    />
                )
            }
        </div>
    );
});

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
