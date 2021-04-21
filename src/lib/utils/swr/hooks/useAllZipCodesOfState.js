import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useAllZipCodesOfState = (state) => {
  const { data, error } = useSWR(
    state ? `/api/zipCodes/${state}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    zips: data,
    isZipsLoading: !error && !data,
    isZipsError: error,
  };
};

export default useAllZipCodesOfState;
