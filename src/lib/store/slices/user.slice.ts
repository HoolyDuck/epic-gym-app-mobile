import { createSlice } from "@reduxjs/toolkit/react";
import { type User } from "@/common/types";

type State = {
  user: User | null;
};

const initialState: State = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export { userSlice };
