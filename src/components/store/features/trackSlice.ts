import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/components/sharedTypes/types";

type initialStateType = {
  currentTrack: null | TrackType;
  isPlay: boolean;
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
};

const trackSlise = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
  },
});

export const { setCurrentTrack, setIsPlay } = trackSlise.actions;
export const trackSliceReducer = trackSlise.reducer;
