import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import PrematchMenu from './prematch-menu.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrematchMenu/>
    </StrictMode>,
)
