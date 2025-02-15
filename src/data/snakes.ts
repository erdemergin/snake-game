export interface Snake {
  imageUrl: string;
  name: string;
  isVenomous: boolean;
  description: string;
  continent: string[];
}

export const snakes: Snake[] = [  
  {  
    name: "Ball Python",  
    imageUrl: "https://images.unsplash.com/photo-1582167371270-68a4c033e732",  
    isVenomous: false,  
    description: "A gentle snake species that's one of the most popular pet snakes worldwide.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Black Mamba",  
    imageUrl: "https://images.unsplash.com/photo-1550172268-9a48af98ac5f",  
    isVenomous: true,  
    description: "One of Africa's deadliest snakes known for its speed and potent venom.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Boa Constrictor",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A powerful constrictor with a distinctive pattern, native to Central and South America.",  
    continent: ["North America", "Central America", "South America", "Caribbean"],  
  },  
  {  
    name: "Boomslang",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A slender and arboreal snake native to sub-Saharan Africa, noted for its potent venom and impressive eyesight.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Burmese Python",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A large non-venomous constrictor native to Southeast Asia, known for its impressive size.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Bushmaster",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "The longest venomous snake in the Americas.  A type of pit viper.",  
    continent: ["Central America", "South America"],  
  },  
  {  
    name: "Carpet Python",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A non-venomous snake popular in the pet trade, recognized for its beautiful and varied patterning, found in Australia and New Guinea.",  
    continent: ["Australia", "New Guinea"],  
  },  
  {  
    name: "Coastal Taipan",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A highly venomous snake, larger and more widespread than the Inland Taipan",  
    continent: ["Australia", "New Guinea"],  
  },  
  {  
    name: "Copperhead",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "A venomous snake found in North America, known for its copper-colored head.",  
    continent: ["North America"],  
  },  
  {  
    name: "Corn Snake",  
    imageUrl: "https://images.unsplash.com/photo-1590601494697-adb5c4459834",  
    isVenomous: false,  
    description: "A harmless and popular pet snake known for its docile nature.",  
    continent: ["North America"],  
  },  
  {  
    name: "Cottonmouth (Water Moccasin)",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A venomous, semi-aquatic snake found in the southeastern United States.  Known for its white-lined mouth.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eastern Brown Snake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "One of the most venomous snakes in the world, found in Australia.",  
    continent: ["Australia"],  
  },  
  {  
    name: "Eastern Coral Snake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A highly venomous snake with a distinctive red, yellow, and black banding pattern.  'Red on yellow, kill a fellow; red on black, venom lack' is a rhyme to help distinguish it from similar-looking, non-venomous snakes.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eastern Diamondback Rattlesnake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "The largest rattlesnake in North America, known for its diamond-shaped patterns and dangerous venom.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eyelash Viper",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A venomous pit viper known for the modified scales above its eyes that resemble eyelashes.",  
    continent: ["Central America", "South America"],  
  },  
  {  
    name: "Gaboon Viper",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A venomous snake celebrated for its extraordinarily long fangs and potent venom, native to Africa.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Garter Snake",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A common, harmless snake found throughout North America, known for its striped pattern.",  
    continent: ["North America"],  
  },  
  {  
    name: "Green Anaconda",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "One of the largest and heaviest snakes in the world, thriving in the waters of South America.",  
    continent: ["South America"],  
  },  
  {  
    name: "Green Tree Python",  
    imageUrl: "https://images.unsplash.com/photo-1585095595274-aeffac35e6bf",  
    isVenomous: false,  
    description: "A beautiful non-venomous snake known for its emerald coloration.",  
    continent: ["Asia", "Australia"],  
  },  
  {  
    name: "Hognose Snake",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description: "A non-venomous snake with a distinctive upturned snout.",  
    continent: ["North America"],  
  },  
  {  
    name: "Indian Cobra",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "A highly venomous snake found in the Indian subcontinent, known for its hood.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Inland Taipan",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "Considered one of the most venomous snakes in the world, this reclusive species inhabits the arid regions of Australia.",  
    continent: ["Australia"],  
  },  
  {  
    name: "King Brown Snake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "Also known as the Mulga Snake, this robust and aggressive Australian snake is highly venomous.",  
    continent: ["Australia"],  
  },  
  {  
    name: "King Cobra",  
    imageUrl: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f",  
    isVenomous: true,  
    description: "One of the world's most venomous snakes known for its distinctive hood.",  
    continent: ["Asia", "Southeast Asia"],  
  },  
  {  
    name: "King Snake",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A non-venomous constrictor that is known to prey on other snakes, including venomous ones.",  
    continent: ["North America", "South America"],  
  },  
  {  
    name: "Kingsnake",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A non-venomous snake known for eating other snakes, including venomous species.",  
    continent: ["North America"],  
  },  
  {  
    name: "Milk Snake",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "A non-venomous snake that often mimics the appearance of venomous coral snakes.",  
    continent: ["North America", "South America", "Central America"],  
  },  
  {  
    name: "Puff Adder",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A widespread venomous viper in Africa, responsible for numerous snakebites.",  
    continent: ["Africa", "Arabian Peninsula"],  
  },  
  {  
    name: "Rattlesnake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "A group of venomous snakes known for the rattle on their tail, used as a warning signal.",  
    continent: ["North America", "South America"],  
  },  
  {  
    name: "Reticulated Python",  
    imageUrl: "#blank",  
    isVenomous: false,  
    description:  
      "The world's longest snake, renowned for its intricate and beautiful skin patterns, found throughout Southeast Asia.",  
    continent: ["Asia", "Southeast Asia"],  
  },  
  {  
    name: "Russell's Viper",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "Responsible for many snakebite incidents in Asia due to its proximity to human habitats.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Saw-Scaled Viper",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A small but highly venomous viper responsible for many snakebite deaths.",  
    continent: ["Africa", "Asia", "Middle East"],  
  },  
  {  
    name: "Sidewinder",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description: "A venomous snake known for its unique sideways movement.",  
    continent: ["North America"],  
  },  
  {  
    name: "Tiger Snake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "Highly venomous snake found in Australia. Displays a variety of patterns, often with bands.",  
    continent: ["Australia"],  
  },  
  {  
    name: "Yellow-bellied Sea Snake",  
    imageUrl: "#blank",  
    isVenomous: true,  
    description:  
      "A highly venomous sea snake with a striking yellow underside, inhabiting the warm coastal waters of the Indo-Pacific.",  
    continent: ["Asia", "Australia"],  
  },  
];
