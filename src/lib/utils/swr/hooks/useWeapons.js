import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useWeapons = (ids) => {
  const { data, error, mutate } = useSWR(`/api/getWeapons`, fetcher, {
    revalidateOnFocus: false,
  });
  console.log(data);
  return {
    weapons: data,
    weaponsError: error,
    weaponsIsLoading: !error && !data,
    mutateWeapons: mutate,
  };
};

export default useWeapons;
