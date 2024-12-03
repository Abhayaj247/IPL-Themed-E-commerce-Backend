import { IPL_TEAMS } from "../config/constants";

export const assignTeam = (): string => {
  const randomIndex = Math.floor(Math.random() * IPL_TEAMS.length);
  return IPL_TEAMS[randomIndex];
};
