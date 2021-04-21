import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useMap = (state) => {
  const { data, error } = useSWR(
    state != null ? `/api/map/getAllMaps/${state}` : "/api/map/getAllMaps/USA",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMap;
