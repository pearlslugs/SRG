import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useSearch = (searchParams) => {
  const { data, error, mutate } = useSWR(
    searchParams ? `/api/user/search/${searchParams}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    searchData: data,
    searchErr: error,
    searchLoading: !error && !data,
    mutateSearch: mutate,
  };
};

export default useSearch;
