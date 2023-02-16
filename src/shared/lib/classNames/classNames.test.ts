import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first arg', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional className', () => {
        expect(classNames('someClass', {}, ['active'])).toBe('someClass active')
    })

    test('with mode className', () => {
        expect(classNames('someClass', { hovered: true }, [])).toBe('someClass hovered')
    })

    test('with mode className false', () => {
        expect(
            classNames('someClass', { hovered: true, disable: false }, [])
        ).toBe('someClass hovered')
    })

    test('with all params', () => {
        expect(
            classNames('someClass', { hovered: true }, ['active'])
        ).toBe('someClass active hovered')
    })
})
