import { type FC, memo } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = memo((props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            direction={ 'column' }
            align={ align }
            { ...props }
        />
    );
});

VStack.displayName = 'VStack';
