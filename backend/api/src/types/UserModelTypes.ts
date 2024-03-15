export type TUser = {
  username: string;
  email: string;
  password: string;
  rank: Rank;
  score: IScore;
  points: number;
  image: string;
  validated: boolean;
};

export type TNewUser = {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

interface IScore {
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
