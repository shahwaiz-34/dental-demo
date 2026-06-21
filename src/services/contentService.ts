import { HeroStat } from "../content/heroStats";
import { getHeroStats } from "./heroStatsService";

export const fetchHeroContent = (): HeroStat[] => {
  return getHeroStats();
};

export const fetchHeroContentById = (id: string): HeroStat | undefined => {
  return getHeroStats().find((stat) => stat.id === id);
};
