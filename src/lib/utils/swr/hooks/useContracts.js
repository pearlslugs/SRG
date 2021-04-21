import useSWR from "swr";
import fetcher from "src/lib/utils/swr/fetcher";

const useContracts = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/contracts/${userId}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    contracts: data,
    contractsErr: error,
    contractsLoading: !error && !data,
    mutateContracts: mutate,
  };
};

export default useContracts;

export const useActiveContracts = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/contracts/${userId}/active` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    contracts: data,
    contractsErr: error,
    contractsLoading: !error && !data,
    mutateContracts: mutate,
  };
};

export const usePreviousContracts = (userId) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/user/contracts/${userId}/closed` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    contracts: data,
    contractsErr: error,
    contractsLoading: !error && !data,
    mutateContracts: mutate,
  };
};
