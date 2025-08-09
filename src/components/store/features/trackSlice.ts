import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/components/sharedTypes/types";

type initialStateType = {
  currentTrack: null | TrackType;
};

const initialState: initialStateType = {
  currentTrack: null,
};

const trackSlise = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = trackSlise.actions;
export const trackSliceReducer = trackSlise.reducer;
