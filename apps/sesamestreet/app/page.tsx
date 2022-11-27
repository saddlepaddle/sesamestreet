import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'design-system';

export default function Page() {
    return (
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='flex items-center space-x-3'>
                <h1 className='text-lg font-bold'>Docs</h1>
                <Button />
                <FontAwesomeIcon className='h-5 w-5' icon={faWaveSquare} />
            </div>
        </div>
    );
}
