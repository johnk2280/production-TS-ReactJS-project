import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
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

    const onSelectStars = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <Card className={ classNames(cls.RatingCard, {}, [className]) }>
            <VStack align={ 'center' } gap={ '8' }>
                <Text title={ title }/>
                <StarRating size={ 40 } onSelect={ onSelectStars }/>
            </VStack>
            <Modal isOpen={ isModalOpen } lazy={ true }>
                <VStack gap={ '32' } max={ true }>
                    <Text title={ feedbackTitle }/>
                    <Input placeholder={ t('Ваш отзыв') }/>
                </VStack>
            </Modal>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard';
