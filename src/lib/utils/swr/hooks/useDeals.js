import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useDeals = (ids) => {
  const { data, error, mutate } = useSWR(
    ids ? `/api/comet/getConnections/${ids}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    deals: data,
    dealsError: error,
    dealsIsLoading: !error && !data,
    mutateDeals: mutate,
  };
};

export default useDeals;
