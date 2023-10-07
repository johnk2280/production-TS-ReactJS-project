import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { VStack, HStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { type FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedBack?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
}

export const RatingCard: FC<RatingCardProps> = memo((props: RatingCardProps) => {
    const {
        className = '',
        title,
        onAccept,
        onCancel,
        hasFeedBack,
        feedbackTitle
    } = props;
    const { t } = useTranslation(['main', 'translation']);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStartsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStartsCount(selectedStarsCount);
        if (hasFeedBack) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedBack, onAccept]);

    const onChangeFeedback = useCallback((val: string) => {
        setFeedback(val);
    }, []);
    console.log(feedback);

    return (
        <Card className={ classNames(cls.RatingCard, {}, [className]) }>
            <VStack align={ 'center' } gap={ '8' }>
                <Text title={ title }/>
                <StarRating size={ 40 } onSelect={ onSelectStars }/>
            </VStack>
            <Modal isOpen={ isModalOpen } lazy={ true }>
                <VStack gap={ '32' } max={ true }>
                    <Text title={ feedbackTitle }/>
                    <Input
                        placeholder={ t('Ваш отзыв') }
                        value={ feedback }
                        onChange={ onChangeFeedback }
                    />
                    <HStack max={ true } gap={ '16' } justify={ 'end' }>
                        <Button>
                            { t('Отправить') }
                        </Button>
                        <Button theme={ ButtonTheme.OUTLINE_RED }>
                            { t('Закрыть') }
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard';
