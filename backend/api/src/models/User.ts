import { Schema, model } from "mongoose";

import { TUser, Rank } from "../types/UserModelTypes";

const userSchema = new Schema<TUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rank: { type: Number, required: true, enum: Object.values(Rank) },
  score: {
    type: {
      wins: { type: Number, required: true },
      losses: { type: Number, required: true },
    },
    required: true,
  },
  points: { type: Number, required: true },
  image: { type: String, required: false },
  validated: { type: Boolean, required: true },
});

export default model<TUser>("User", userSchema);
