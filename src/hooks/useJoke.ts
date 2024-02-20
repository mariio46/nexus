import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useLoading from './useLoading';

const useJoke = () => {
    const { loading, startLoading, stopLoading } = useLoading();

    const {
        data: joke,
        isError,
        isFetching,
        refetch,
    } = useQuery({
        queryKey: ['jokes'],
        queryFn: async () =>
            await axios.get(`https://api.chucknorris.io/jokes/random`).then((response) => response.data.value),
    });

    const handleRefetch = () => {
        refetch();
        startLoading();
        setTimeout(() => stopLoading(), 1000);
    };

    return { joke, isError, isFetching, handleRefetch, loading };
};

export default useJoke;
