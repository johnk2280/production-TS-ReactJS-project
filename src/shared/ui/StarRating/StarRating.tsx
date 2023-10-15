import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import { type FC, memo, useState, useCallback } from 'react';
import StarIcon from '../../assets/icons/star-20-20.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {
    const {
        className = '',
        size = 30,
        selectedStars = 0,
        onSelect
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    }, [isSelected]);

    const onLeave = useCallback(() => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    }, [isSelected]);

    const onClick = useCallback((starsCount: number) => () => {
        if (!isSelected) {
            setIsSelected(true);
            setCurrentStarsCount(starsCount);
            onSelect?.(starsCount);
        }
    }, [isSelected, onSelect]);

    return (
        <div className={ classNames(cls.StarRating, {}, [className]) }>
            {
                stars.map(starNumber => (
                    <Icon
                        Svg={ StarIcon }
                        key={ starNumber }
                        className={ classNames(cls.icon, {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected]: isSelected
                        })
                        }
                        height={ size }
                        width={ size }
                        onMouseEnter={ onHover(starNumber) }
                        onMouseLeave={ onLeave }
                        onClick={ onClick(starNumber) }
                    />
                ))
            }

        </div>
    );
});

StarRating.displayName = 'StarRating';
