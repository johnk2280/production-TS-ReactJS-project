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

const getAsyncAnimationModules = async (): Promise<Awaited<any>> => {
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react')
    ]);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
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
