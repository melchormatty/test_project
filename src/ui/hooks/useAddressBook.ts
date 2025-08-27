// FILE: src/ui/hooks/useAddressBook.ts
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../core/store";
import {
  addAddress,
  clearAddresses,
  fetchAddresses,
  Address,
} from "../../core/reducers/addressBookSlice";
import { useCallback } from "react";

export function useAddressBook() {
  const dispatch = useDispatch<AppDispatch>();

  const { addresses, loading, error } = useSelector(
    (state: RootState) => state.addressBook
  );

  const add = useCallback(
    (address: Address) => {
      dispatch(addAddress(address));
    },
    [dispatch]
  );

  const clear = useCallback(() => {
    dispatch(clearAddresses());
  }, [dispatch]);

  const fetch = useCallback(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  return {
    addresses,
    loading,
    error,
    add,
    clear,
    fetch,
  };
}
