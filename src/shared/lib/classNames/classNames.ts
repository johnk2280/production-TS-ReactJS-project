
type Mods = Record<string, boolean | string>;

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value)) // key: sting = className, value: boolean
            .map(([key, value]) => key) // key: sting = className, value: boolean
    ].join(' ').trim();
}

// Пример использования функции classNames
// classNames('someClassName', {hovered: true, active: false, enabled: true}, []);
