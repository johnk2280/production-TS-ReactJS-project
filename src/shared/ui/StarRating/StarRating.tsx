import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { type FC, memo } from 'react';
import StarIcon from '../../assets/icons/star-20-20.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {
    const {
        className = ''
    } = props;

    return (
        <div className={ classNames(cls.StarRating, {}, [className]) }>
            {
                stars.map(starNumber => (
                    <Icon
                        Svg={ StarIcon }
                        key={ starNumber }

                    />
                ))
            }

        </div>
    );
});

StarRating.displayName = 'StarRating';
