import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useStatesArr = () => {
  const { data, error } = useSWR("/api/map/getStatesArr", fetcher, {
    revalidateOnFocus: false,
  });

  return {
    states: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useStatesArr;
