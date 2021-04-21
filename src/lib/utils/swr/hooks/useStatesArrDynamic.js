import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useStatesArrDynamic = (load) => {
  const { data, error } = useSWR(
    load ? "/api/map/getStatesArr" : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    states: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useStatesArrDynamic;
