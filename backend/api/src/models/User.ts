import { Schema, model } from "mongoose";

import { TUser, Rank } from "../types/UserModelTypes";

const userSchema = new Schema<TUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rank: { type: Number, required: false, enum: Object.keys(Rank), default: Rank.Beginner },
  score: {
    type: {
      wins: { type: Number, required: true },
      losses: { type: Number, required: true },
    },
    default: { wins: 0, losses: 0 },
    required: false,
  },
  points: { type: Number, required: false, default: 0 },
  image: { type: String, required: false, default: "" },
  validated: { type: Boolean, required: false, default: false },
});

export default model<TUser>("User", userSchema);
