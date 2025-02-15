export interface Snake {
  imageUrl: string;
  name: string;
  isVenomous: boolean;
  description: string;
  continent: string[];
}

export const snakes: Snake[] = [
  {
    name: "King Cobra",
    imageUrl: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f",
    isVenomous: true,
    description: "One of the world's most venomous snakes known for its distinctive hood.",
    continent: ["Asia", "Southeast Asia"]
  },
  {
    name: "Corn Snake",
    imageUrl: "https://images.unsplash.com/photo-1590601494697-adb5c4459834",
    isVenomous: false,
    description: "A harmless and popular pet snake known for its docile nature.",
    continent: ["North America"]
  },
  {
    name: "Green Tree Python",
    imageUrl: "https://images.unsplash.com/photo-1585095595274-aeffac35e6bf",
    isVenomous: false,
    description: "A beautiful non-venomous snake known for its emerald coloration.",
    continent: ["Asia", "Australia"]
  },
  {
    name: "Black Mamba",
    imageUrl: "https://images.unsplash.com/photo-1550172268-9a48af98ac5f",
    isVenomous: true,
    description: "One of Africa's deadliest snakes known for its speed and potent venom.",
    continent: ["Africa"]
  },
  {
    name: "Ball Python",
    imageUrl: "https://images.unsplash.com/photo-1582167371270-68a4c033e732",
    isVenomous: false,
    description: "A gentle snake species that's one of the most popular pet snakes worldwide.",
    continent: ["Africa"]
  }
];