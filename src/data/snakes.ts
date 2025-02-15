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
    imageUrl: "/img/ball-python.jpg",  
    isVenomous: false,  
    description: "A gentle snake species that's one of the most popular pet snakes worldwide.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Black Mamba",  
    imageUrl: "/img/black-mamba.jpg",  
    isVenomous: true,  
    description: "One of Africa's deadliest snakes known for its speed and potent venom.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Boa Constrictor",  
    imageUrl: "/img/boa-constrictor.jpg",  
    isVenomous: false,  
    description:  
      "A powerful constrictor with a distinctive pattern, native to Central and South America.",  
    continent: ["North America", "Central America", "South America", "Caribbean"],  
  },  
  {  
    name: "Boomslang",  
    imageUrl: "/img/boomslang.jpg",  
    isVenomous: true,  
    description:  
      "A slender and arboreal snake native to sub-Saharan Africa, noted for its potent venom and impressive eyesight.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Burmese Python",  
    imageUrl: "/img/burmese-python.jpg",  
    isVenomous: false,  
    description:  
      "A large non-venomous constrictor native to Southeast Asia, known for its impressive size.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Bushmaster",  
    imageUrl: "/img/bushmaster.jpg",  
    isVenomous: true,  
    description: "The longest venomous snake in the Americas.  A type of pit viper.",  
    continent: ["Central America", "South America"],  
  },  
  {  
    name: "Carpet Python",  
    imageUrl: "/img/carpet-python.jpg",  
    isVenomous: false,  
    description:  
      "A non-venomous snake popular in the pet trade, recognized for its beautiful and varied patterning, found in Australia and New Guinea.",  
    continent: ["Australia", "New Guinea"],  
  },  
  {  
    name: "Coastal Taipan",  
    imageUrl: "/img/coastal-taipan.jpg",  
    isVenomous: true,  
    description:  
      "A highly venomous snake, larger and more widespread than the Inland Taipan",  
    continent: ["Australia", "New Guinea"],  
  },  
  {  
    name: "Copperhead",  
    imageUrl: "/img/copperhead.png",  
    isVenomous: true,  
    description: "A venomous snake found in North America, known for its copper-colored head.",  
    continent: ["North America"],  
  },  
  {  
    name: "Corn Snake",  
    imageUrl: "/img/corn-snake.jpg",  
    isVenomous: false,  
    description: "A harmless and popular pet snake known for its docile nature.",  
    continent: ["North America"],  
  },  
  {  
    name: "Cottonmouth (Water Moccasin)",  
    imageUrl: "/img/cottonmouth.png",  
    isVenomous: true,  
    description:  
      "A venomous, semi-aquatic snake found in the southeastern United States.  Known for its white-lined mouth.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eastern Brown Snake",  
    imageUrl: "/img/eastern-brown-snake.jpg",  
    isVenomous: true,  
    description: "One of the most venomous snakes in the world, found in Australia.",  
    continent: ["Australia"],  
  },  
  {  
    name: "Eastern Coral Snake",  
    imageUrl: "/img/eastern-coral-snake.jpg",  
    isVenomous: true,  
    description:  
      "A highly venomous snake with a distinctive red, yellow, and black banding pattern.  'Red on yellow, kill a fellow; red on black, venom lack' is a rhyme to help distinguish it from similar-looking, non-venomous snakes.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eastern Diamondback Rattlesnake",  
    imageUrl: "/img/eastern-diamondback-rattlesnake.jpg",  
    isVenomous: true,  
    description:  
      "The largest rattlesnake in North America, known for its diamond-shaped patterns and dangerous venom.",  
    continent: ["North America"],  
  },  
  {  
    name: "Eyelash Viper",  
    imageUrl: "/img/eyelash-viper.jpg",  
    isVenomous: true,  
    description:  
      "A venomous pit viper known for the modified scales above its eyes that resemble eyelashes.",  
    continent: ["Central America", "South America"],  
  },  
  {  
    name: "Gaboon Viper",  
    imageUrl: "/img/gaboon-viper.jpg",  
    isVenomous: true,  
    description:  
      "A venomous snake celebrated for its extraordinarily long fangs and potent venom, native to Africa.",  
    continent: ["Africa"],  
  },  
  {  
    name: "Garter Snake",  
    imageUrl: "/img/garter-snake.jpg",  
    isVenomous: false,  
    description:  
      "A common, harmless snake found throughout North America, known for its striped pattern.",  
    continent: ["North America"],  
  },  
  {  
    name: "Green Anaconda",  
    imageUrl: "/img/green-anaconda.jpg",  
    isVenomous: false,  
    description:  
      "One of the largest and heaviest snakes in the world, thriving in the waters of South America.",  
    continent: ["South America"],  
  },  
  {  
    name: "Green Tree Python",  
    imageUrl: "/img/green-tree-python.jpg",  
    isVenomous: false,  
    description: "A beautiful non-venomous snake known for its emerald coloration.",  
    continent: ["Asia", "Australia"],  
  },  
  {  
    name: "Hognose Snake",  
    imageUrl: "/img/hognose-snake.jpg",  
    isVenomous: false,  
    description: "A non-venomous snake with a distinctive upturned snout.",  
    continent: ["North America"],  
  },  
  {  
    name: "Indian Cobra",  
    imageUrl: "/img/indian-cobra.jpg",  
    isVenomous: true,  
    description: "A highly venomous snake found in the Indian subcontinent, known for its hood.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Inland Taipan",  
    imageUrl: "/img/inland-taipan.jpg",  
    isVenomous: true,  
    description:  
      "Considered one of the most venomous snakes in the world, this reclusive species inhabits the arid regions of Australia.",  
    continent: ["Australia"],  
  },  
  {  
    name: "King Brown Snake",  
    imageUrl: "/img/king-brown-snake.jpg",  
    isVenomous: true,  
    description:  
      "Also known as the Mulga Snake, this robust and aggressive Australian snake is highly venomous.",  
    continent: ["Australia"],  
  },  
  {  
    name: "King Cobra",  
    imageUrl: "/img/king-cobra.jpg",  
    isVenomous: true,  
    description: "One of the world's most venomous snakes known for its distinctive hood.",  
    continent: ["Asia", "Southeast Asia"],  
  },  
  {  
    name: "King Snake",  
    imageUrl: "/img/king-snake.jpg",  
    isVenomous: false,  
    description:  
      "A non-venomous constrictor that is known to prey on other snakes, including venomous ones.",  
    continent: ["North America", "South America"],  
  },  
  {  
    name: "Milk Snake",  
    imageUrl: "/img/milk_snake.JPG",  
    isVenomous: false,  
    description:  
      "A non-venomous snake that often mimics the appearance of venomous coral snakes.",  
    continent: ["North America", "South America", "Central America"],  
  },  
  {  
    name: "Puff Adder",  
    imageUrl: "/img/puff-adder.jpg",  
    isVenomous: true,  
    description:  
      "A widespread venomous viper in Africa, responsible for numerous snakebites.",  
    continent: ["Africa", "Arabian Peninsula"],  
  },  
  {  
    name: "Rattlesnake",  
    imageUrl: "/img/rattlesnake.jpg",  
    isVenomous: true,  
    description: "A group of venomous snakes known for the rattle on their tail, used as a warning signal.",  
    continent: ["North America", "South America"],  
  },  
  {  
    name: "Reticulated Python",  
    imageUrl: "/img/reticulated-python.jpg",  
    isVenomous: false,  
    description:  
      "The world's longest snake, renowned for its intricate and beautiful skin patterns, found throughout Southeast Asia.",  
    continent: ["Asia", "Southeast Asia"],  
  },  
  {  
    name: "Russell's Viper",  
    imageUrl: "/img/russells-viper.jpg",  
    isVenomous: true,  
    description:  
      "Responsible for many snakebite incidents in Asia due to its proximity to human habitats.",  
    continent: ["Asia"],  
  },  
  {  
    name: "Saw-Scaled Viper",  
    imageUrl: "/img/saw-scaled-viper.jpg",  
    isVenomous: true,  
    description:  
      "A small but highly venomous viper responsible for many snakebite deaths.",  
    continent: ["Africa", "Asia", "Middle East"],  
  },  
  {  
    name: "Sidewinder",  
    imageUrl: "/img/sidewinder.jpg",  
    isVenomous: true,  
    description: "A venomous snake known for its unique sideways movement.",  
    continent: ["North America"],  
  },  
  {  
    name: "Tiger Snake",  
    imageUrl: "/img/tiger-snake.jpg",  
    isVenomous: true,  
    description:  
      "Highly venomous snake found in Australia. Displays a variety of patterns, often with bands.",  
    continent: ["Australia"],  
  },  
  {  
    name: "Yellow-bellied Sea Snake",  
    imageUrl: "/img/yellow-bellied-sea-snake.jpg",  
    isVenomous: true,  
    description:  
      "A highly venomous sea snake with a striking yellow underside, inhabiting the warm coastal waters of the Indo-Pacific.",  
    continent: ["Asia", "Australia"],  
  },  
];