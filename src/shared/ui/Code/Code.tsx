import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const {
        className = '',
        text
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={ classNames(cls.Code, {}, [className]) }>
            <Button
                className={ cls.copyBtn }
                theme={ ButtonTheme.CLEAR }
                onClick={ onCopy }
            >
                <CopyIcon className={ cls.copyIcon }/>
            </Button>
            <code >
                { text }
            </code>
        </pre>

    );
});

Code.displayName = 'Code';
