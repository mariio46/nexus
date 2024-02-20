import { useState } from 'react';

const useLoading = (initialState: boolean = false) => {
    const [loading, setLoading] = useState<boolean>(initialState);

    const startLoading = (): void => setLoading(true);

    const stopLoading = (): void => setLoading(false);

    return { loading, startLoading, stopLoading };
};

export default useLoading;
