import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_STATUS, type ApiStatus } from "../../constants/apiStatus";

type AuthState = {
  token: string | null;
  loginApiStatus: ApiStatus;
  error: string | null;
};

const initialState: AuthState = {
  token: null,
  loginApiStatus: API_STATUS.IDLE,
  error: null,
};

export const login = createAsyncThunk<
  { token: string },
  { email: string; password: string }
>("auth/login", async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 500));
  if (email && password) return { token: "mock-jwt-token" };
  throw new Error("Invalid credentials");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.loginApiStatus = API_STATUS.IDLE;
      state.error = null;
      localStorage.removeItem("cf_token");
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    resetLoginStatus(state) {
      state.loginApiStatus = API_STATUS.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginApiStatus = API_STATUS.LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginApiStatus = API_STATUS.SUCCEEDED;
        state.token = action.payload.token;
        localStorage.setItem("cf_token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loginApiStatus = API_STATUS.FAILED;
        state.error = action.error.message ?? "Login failed";
      });
  },
});

export const { logout, setToken, resetLoginStatus } = authSlice.actions;
export default authSlice.reducer;
