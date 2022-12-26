'use server';

export default function NavigationBar() {
    return (
        <div className='fixed top-0 left-0 flex h-16 w-full items-center justify-center border-b border-gray-100 bg-gray-800 p-4'>
            <span className='text-3xl font-extrabold text-green-900'>Line two!</span>
        </div>
    );
}
