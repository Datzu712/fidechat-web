import '@scss/app.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router';
import ChannelHeader from '@components/ChannelHeader';
import Sidebar from '@components/Sidebar';
import { GlobalContext } from '../contexts/GlobalContext';
import Chat from '@components/Chat';
import useWebsocketConnection from '../hooks/useWebsocketConnection';
import useAuth from '../hooks/useAuth';

function App() {
    const { selectedChannel, apiPing, isAuthenticated, setIsAuthenticated } =
        useContext(GlobalContext);
    const navigate = useNavigate();

    useAuth(setIsAuthenticated, navigate);
    useWebsocketConnection({ isAuthenticated });

    if (!isAuthenticated) {
        return;
    }

    return (
        <div className="d-flex vh-100">
            <Sidebar />
            {selectedChannel ? (
                <main className="card flex-grow-1 main-content">
                    <ChannelHeader />
                    <Chat />
                </main>
            ) : (
                <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center main-content">
                    <h1>Welcome to Fidechat</h1>
                    {apiPing !== null && <h3>API Ping & DB: {apiPing} ms</h3>}
                </main>
            )}
        </div>
    );
}
export default App;
