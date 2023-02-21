import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }: BugButtonProps): JSX.Element => {
    const [error, setError] = useState(false)
    const toggleBug = (): void => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={toggleBug} className={''}>
            throw error
        </Button>
    )
}
