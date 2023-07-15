import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

interface User {
  id: string;
  title: string;
  content: string;
  date: string;
  userId?: string;
  author: string;
}

const initialState: User[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    author: 'tolstoy',
  },
  {
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    author: 'murakami',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addA: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const selectAllUsers = (state: any) => state.users;
export type { User };
export const { addA } = userSlice.actions;
export default userSlice.reducer;
