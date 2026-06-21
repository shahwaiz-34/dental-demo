import { HeroStat, heroStats } from "../content/heroStats";

export const getHeroStats = (): HeroStat[] => {
  return heroStats;
};

export const getHeroStatById = (id: string): HeroStat | undefined => {
  return heroStats.find((stat) => stat.id === id);
};
