import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'design-system';
import Login from '../components/Login';

export default function Page() {
    return (
        <div className='flex min-h-screen w-full items-center justify-center'>
            <Login />
        </div>
    );
}
