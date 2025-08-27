// FILE: src/core/reducers/addressBookSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: string;
}

interface AddressBookState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressBookState = {
  addresses: [],
  loading: false,
  error: null,
};

export const fetchAddresses = createAsyncThunk(
  "addressBook/fetch",
  async () => {
    // Could call an API, for now return empty
    return [] as Address[];
  }
);

const addressBookSlice = createSlice({
  name: "addressBook",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<Address>) {
      const exists = state.addresses.some((a) => a.id === action.payload.id);
      if (!exists) {
        state.addresses.push(action.payload);
      }
    },
    clearAddresses(state) {
      state.addresses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch addresses";
      });
  },
});

export const { addAddress, clearAddresses } = addressBookSlice.actions;
export default addressBookSlice.reducer;
