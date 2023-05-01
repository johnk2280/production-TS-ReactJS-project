import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps): JSX.Element => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const toggleBug = (): void => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={toggleBug} className={''}>
            { t('вызвать ошибку')}
        </Button>
    );
};
