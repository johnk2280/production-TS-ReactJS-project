import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from 'entities/Article';
import TileIcon from 'shared/assets/icons/fe_tiled.svg';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onClickView?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon
    },
    {
        view: ArticleView.SMALL,
        icon: TileIcon
    }

];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props: ArticleViewSelectorProps) => {
    const {
        className = '',
        view,
        onClickView
    } = props;

    const onToggleView = (view: ArticleView) => {
        return () => onClickView?.(view);
    };

    return (
        <div className={ classNames(cls.ArticleViewSelector, {}, [className]) }>
            {
                viewTypes.map(viewType => (
                    <Button
                        key={ viewType.view }
                        theme={ ButtonTheme.CLEAR }
                        onClick={ onToggleView(viewType.view) }
                    >
                        <Icon
                            className={ classNames('', { [cls.notSelected]: viewType.view !== view }) }
                            Svg={ viewType.icon }
                        />
                    </Button>)
                )
            }
        </div>
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
