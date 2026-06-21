export type HeroStat = {
  id: string;
  name: string;
  description: string;
  value: number;
  unit?: string;
};

export const heroStats: HeroStat[] = [
  {
    id: "strength",
    name: "Strength",
    description: "Physical power and force.",
    value: 85,
    unit: "pts",
  },
  {
    id: "speed",
    name: "Speed",
    description: "Movement and reaction speed.",
    value: 72,
    unit: "pts",
  },
  {
    id: "intelligence",
    name: "Intelligence",
    description: "Mental sharpness and strategy.",
    value: 93,
    unit: "pts",
  },
];
