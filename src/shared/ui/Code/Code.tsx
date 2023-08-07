import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const {
        className = '',
        text
    } = props;

    return (
        <pre className={ classNames(cls.Code, {}, [className]) }>
            <Button
                className={ cls.copyBtn }
            >
                Копировать
            </Button>
            <code >
                { text }
            </code>
        </pre>

    );
});

Code.displayName = 'Code';
