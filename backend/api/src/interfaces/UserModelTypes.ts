export interface IUser {
  username: string;
  email: string;
  password: string;
  rank: Rank;
  score: Score;
  points: number;
  image: string;
  validated: boolean;
}

interface Score {
  wins: number;
  losses: number;
}

export enum Rank {
  Beginner = 1,
  Novice = 2,
  Intermediate = 3,
  Advanced = 4,
  Expert = 5,
}
