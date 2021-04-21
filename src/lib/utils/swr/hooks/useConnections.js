import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useConnections = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/comet/getConnections/${userId}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    connections: data,
    connectionsError: error,
    connectionsIsLoading: !error && !data,
    mutateConnections: mutate,
  };
};

export default useConnections;
