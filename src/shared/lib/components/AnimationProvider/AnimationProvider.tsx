import { createContext, type ReactNode, useRef, useState, useEffect, useMemo, useContext } from 'react';

export {};

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type SpringType = typeof import('@react-spring/web');
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

interface AnimationProviderProps {
    children: ReactNode;
}

const getAsyncAnimationModules = async (): Promise<Awaited<any>> => {
    return await Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react')
    ]);
};

export const useAnimationLibs = (): AnimationContextPayload => {
    return useContext(AnimationContext);
};

export const AnimationProvider = (props: AnimationProviderProps): JSX.Element => {
    const { children } = props;
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules()
            .then(([Spring, Gesture]) => {
                SpringRef.current = Spring;
                GestureRef.current = Gesture;
                setIsLoaded(true);
            });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={ value } >
            { children }
        </AnimationContext.Provider>
    );
};
