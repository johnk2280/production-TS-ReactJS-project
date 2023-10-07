import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { VStack, HStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { type FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
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

    const onClickSend = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const onClickCancel = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack gap={ '32' } max={ true }>
            <Text title={ feedbackTitle }/>
            <Input
                placeholder={ t('Ваш отзыв') }
                value={ feedback }
                onChange={ onChangeFeedback }
            />
            <HStack max={ true } gap={ '16' } justify={ 'end' }>
                <Button
                    onClick={ onClickSend }
                >
                    { t('Отправить') }
                </Button>
                <Button
                    theme={ ButtonTheme.OUTLINE_RED }
                    onClick={ onClickCancel }
                >
                    { t('Закрыть') }
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={ classNames(cls.RatingCard, {}, [className]) }>
            <VStack align={ 'center' } gap={ '8' }>
                <Text title={ title }/>
                <StarRating size={ 40 } onSelect={ onSelectStars }/>
            </VStack>
            <BrowserView>
                <Modal isOpen={ isModalOpen } lazy={ true }>
                    { modalContent }
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={ isModalOpen }>
                    { modalContent }
                </Drawer>
            </MobileView>

        </Card>
    );
});

RatingCard.displayName = 'RatingCard';
