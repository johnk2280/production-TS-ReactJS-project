import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'

interface MainPageProps {
    props?: any
}

const MainPage: FC<MainPageProps> = (props) => {
    const { t } = useTranslation(['mainPage', 'translation'])

    return (
        <div>
            <BugButton/>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
