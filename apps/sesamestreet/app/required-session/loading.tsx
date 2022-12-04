'server-only';

// the user will be redirected to the landing page if they are not signed in
// check middleware.tsx to see how this routing rule is set
export default async function LoadingRequiredSession() {
    return <span>Hello juno loading...</span>;
}
