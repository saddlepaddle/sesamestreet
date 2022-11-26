import { Button } from 'design-system';

export default function Page() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-slate-500">
            <div className="flex items-center space-x-3">
                <h1 className="text-lg font-bold">Docs</h1>
                <Button />
            </div>
        </div>
    );
}
