import React, { type FC, Suspense, useState } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Modal } from 'shared/ui/Modal'

interface AppProps {
    props?: any
}

const App: FC<AppProps> = (props) => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames('app', {}, [theme ?? ''])}>
            <Suspense fallback="">
                <Navbar/>
                <button onClick={() => {
                    setIsOpen(true)
                }}>toggle
                </button>
                <Modal isOpen={isOpen} onClose={() => {
                    setIsOpen(false)
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga fugiat id qui sunt vero
                    vitae, voluptatibus. Architecto cupiditate distinctio, dolor ducimus error ex excepturi expedita
                    facilis id minima molestiae natus necessitatibus, nihil omnis perferendis provident quas quos
                    reprehenderit sunt voluptatem? Accusamus adipisci, alias aperiam, beatae dolorum earum est eveniet

                </Modal>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    )
}

export default App
