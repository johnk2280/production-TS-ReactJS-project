import { type FC, memo } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = memo((props: VStackProps) => {
    return (
        <Flex
            direction={ 'column' }
            { ...props }
        />
    );
});

VStack.displayName = 'VStack';
