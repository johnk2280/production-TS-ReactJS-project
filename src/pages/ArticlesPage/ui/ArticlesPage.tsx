import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames('', {}, [className]) }>

        </div>
    );
};

export default memo(ArticlesPage);
