const RandGen = () => {
  return Math.round(Math.random() * 30 + 1);
};

const items = [
  {
    _id: "f841552e-45f0-4608-8cdf-0d2bedfc7ee2",
    name: "Poké Ball",
    description:
      "A device for capturing wild Pokémon. It's thrown like a ball at a Pokémon, comfortably encapsulating its target.",
    price: 5,
    categoryId: "0001",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 9,
    isLiked: false,
    imgUrl: "img/Balls/Poke_Ball.png"
  },
  {
    _id: "99b6af12-bcef-4162-8472-7730dd003299",
    name: "Great Ball",
    description:
      "A good, high-performance Poké Ball that provides a higher catch rate than a standard Poké Ball.",
    price: 10,
    categoryId: "0001",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 25,
    isLiked: false,
    imgUrl: "img/Balls/Great_Ball.png"
  },
  {
    _id: "02793234-3e78-4de0-a974-be58ac26ece3",
    name: "Ultra Ball",
    description:
      "An ultra-high performance Poké Ball that provides a higher Pokémon catch rate than a Great Ball.",
    price: 15,
    categoryId: "0001",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 18,
    isLiked: false,
    imgUrl: "img/Balls/Ultra_Ball.png"
  },
  {
    _id: "35511c03-dca2-4060-8700-54cc6d3918d4",
    name: "Premier Ball",
    description:
      "A special type of Poké Ball for capturing a Raid Boss in Bonus Challenge after defeating it in Raid Battle.",
    price: 20,
    categoryId: "0001",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 13,
    isLiked: false,
    imgUrl: "img/Balls/Premier_Ball.png"
  },
  {
    _id: "e01a8144-4b2d-483b-bffc-50131e259002",
    name: "Master Ball",
    description:
      "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",
    price: 25,
    categoryId: "0001",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 5,
    isLiked: false,
    imgUrl: "img/Balls/Master_Ball.png"
  },
  {
    _id: "c4dd9b35-0e76-4b00-9502-3fdb29b94e85",
    name: "Infinite Incubator",
    description:
      "A device that incubates an Egg as you walk until it is ready to hatch. Unlimited use!",
    price: 500,
    categoryId: "0005",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 24,
    isLiked: false,
    imgUrl: "img/Incubators/Egg_Incubator_Infinite.png"
  },
  {
    _id: "d8de896b-4bf3-42be-9313-3d145a7a9c07",
    name: "Super Incubator",
    description:
      "A more powerful Egg Incubator helps Eggs hatch quickly. Breaks after 3 uses.",
    price: 200,
    categoryId: "0005",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 21,
    isLiked: false,
    imgUrl: "img/Incubators/Super_Incubator.png"
  },
  {
    _id: "f74852ff-5a71-49d2-809e-47e9871e34b2",
    name: "Limited Incubator",
    description:
      "A device that incubates an Egg as you walk until it is ready to hatch. Breaks after 3 uses.",
    price: 150,
    categoryId: "0005",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 34,
    isLiked: false,
    imgUrl: "img/Incubators/Incubator_Limited.png"
  },
  {
    _id: "9c04bc8b-ad1a-4b4f-9593-c64cde3ea024",
    name: "Gift",
    description:
      "A box that you can send to a friend. Contains a variety of useful items.",
    price: 30,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 6,
    isLiked: false,
    imgUrl: "img/Misc/Gift.png"
  },
  {
    _id: "90537470-e4cf-4699-acda-79eccb77b3a5",
    name: "Incense",
    description:
      "Incense with a mysterious fragrance that lures wild Pokémon to your location for 30 minutes.",
    price: 80,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 6,
    isLiked: false,
    imgUrl: "img/Misc/Incense.png"
  },
  {
    _id: "909c8fc3-664e-44b6-b8b2-409597d4d4a3",
    name: "Lucky Egg",
    description:
      "A Lucky Egg that's filled with happiness! Earns double XP for 30 minutes.",
    price: 80,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 33,
    isLiked: false,
    imgUrl: "img/Misc/Lucky_Egg.png"
  },
  {
    _id: "46ef84e0-673d-49ff-9013-be9d3af0c6a7",
    name: "Lure Module",
    description:
      "A module that attracts Pokémon to a PokéStop for 30 min. The effect benefits other people nearby.",
    price: 100,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 9,
    isLiked: false,
    imgUrl: "img/Misc/Lure_Module.png"
  },
  {
    _id: "41a07f41-3b56-4538-97e5-80a1e5c5ee05",
    name: "Rare Candy",
    description: "The Rare Candy can transform into Candy for any Pokémon.",
    price: 30,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 21,
    isLiked: false,
    imgUrl: "img/Misc/Rare_Candy.png"
  },
  {
    _id: "4e5f7581-073d-409e-bc9d-0b402c611645",
    name: "Star Piece",
    description:
      "A small shard of a beautiful gem. Earns 50% more Stardust for 30 minutes.",
    price: 50,
    categoryId: "0008",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 13,
    isLiked: false,
    imgUrl: "img/Misc/Star_Piece.png"
  },
  {
    _id: "78428535-3ca1-42ee-8a00-458e2319dc55",
    name: "EX Raid Pass",
    description:
      "EX Raid Pass to join a field test for a special Raid Battle. You can use this pass only at the specified limited-time event.",
    price: 50,
    categoryId: "0006",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 7,
    isLiked: false,
    imgUrl: "img/Passes/EX_Raid_Pass.png"
  },
  {
    _id: "df13928c-96bb-4b2e-910e-562e2ca38292",
    name: "Premium Raid Pass",
    description: "A Raid Pass can be used to join a Raid Battle.",
    price: 100,
    categoryId: "0006",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 36,
    isLiked: false,
    imgUrl: "img/Passes/Premium_Raid_Pass.png"
  },
  {
    _id: "c977b297-f03c-4482-8663-7864e3c6e4cf",
    name: "Raid Pass",
    description:
      "A ticket that allows you to participate in Raid Boss Battles.",
    price: 50,
    categoryId: "0006",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 6,
    isLiked: false,
    imgUrl: "img/Passes/Raid_Pass.png"
  },
  {
    _id: "0be8150e-524d-4333-87be-d81923f456b2",
    name: "Potion ",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.",
    price: 5,
    categoryId: "0004",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 25,
    isLiked: false,
    imgUrl: "img/Potions/Potion.png"
  },
  {
    _id: "388ea631-b035-4aa5-8263-7dc512cf7ea6",
    name: "Super Potion ",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.",
    price: 10,
    categoryId: "0004",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 39,
    isLiked: false,
    imgUrl: "img/Potions/Super_Potion.png"
  },
  {
    _id: "39dd3b76-f454-4dfd-970a-9684a97d8a69",
    name: "Hyper Potion ",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.",
    price: 15,
    categoryId: "0004",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 26,
    isLiked: false,
    imgUrl: "img/Potions/Hyper_Potion.png"
  },
  {
    _id: "d18fe00a-30dd-4b27-a51c-d56378d1287a",
    name: "Max Potion",
    description:
      "A spray-type medicine for treating wounds. It will completely restore the max HP of a single Pokémon.",
    price: 20,
    categoryId: "0004",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 16,
    isLiked: false,
    imgUrl: "img/Potions/Max_Potion.png"
  },
  {
    _id: "bce1f2c7-e452-485d-88fa-b23202785fe9",
    name: "Revive",
    description:
      "A medicine that can revive fainted Pokémon. It also fully restores half of a fainted Pokémon's maximum HP.",
    price: 20,
    categoryId: "0003",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 31,
    isLiked: false,
    imgUrl: "img/Revives/Revive.png"
  },
  {
    _id: "3f31beaa-c8f3-49dc-a795-b2a2a85c8db1",
    name: "Max Revive",
    description:
      "A medicine that can revive fainted Pokémon. It also fully restores a fainted Pokémon's maximum HP.",
    price: 30,
    categoryId: "0003",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 31,
    isLiked: false,
    imgUrl: "img/Revives/Max_Revive.png"
  },
  {
    _id: "bedcba15-0e03-46e4-8f5c-fa306580811f",
    name: "Charged TM ",
    description:
      "This item works like the Fast TM but it teaches the Charged Attack instead of a Fast Attack. ",
    price: 50,
    categoryId: "0007",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 18,
    isLiked: false,
    imgUrl: "img/TMs/Fast_TM.png"
  },
  {
    _id: "58ebf299-0597-4599-be1e-e90d235cc076",
    name: "Fast TM",
    description:
      "This Technical Machine item is used to teach your Pokémon a new Fast Attack. ",
    price: 50,
    categoryId: "0007",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 28,
    isLiked: false,
    imgUrl: "img/TMs/Charged_TM.png"
  },
  {
    _id: "a37d33cc-b67d-48eb-ba83-0c86cb869ee5",
    name: "Razz Berry",
    description:
      "Feed this to a Pokémon, and it will be easier to catch on your next throw.",
    price: 5,
    categoryId: "0002",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 28,
    isLiked: false,
    imgUrl: "img/Berries/Razz_Berry.png"
  },
  {
    _id: "7730b2eb-f479-451b-ad25-cf9819fb535f",
    name: "Pinap Berry",
    description: "Feed this to a Pokémon to make it drop more candy.",
    price: 5,
    categoryId: "0002",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 16,
    isLiked: false,
    imgUrl: "img/Berries/Pinap_Berry.png"
  },
  {
    _id: "d8c57172-2f74-4396-bae0-7b0ad1ebcc1a",
    name: "Silver Pinap Berry",
    description:
      "Feed this to a Pokémon to receive more Candy when you catch it and make it easier to catch.",
    price: 5,
    categoryId: "0002",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 6,
    isLiked: false,
    imgUrl: "img/Berries/Silver_Pinap_Berry.png"
  },
  {
    _id: "b397f4be-050d-4e3c-a777-034bfc958a90",
    name: "Nanab Berry",
    description:
      "Feed this to a Pokémon to calm it down, making it less erratic.",
    price: 5,
    categoryId: "0002",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 18,
    isLiked: false,
    imgUrl: "img/Berries/Nanab_Berry.png"
  },
  {
    _id: "ff576bd0-dd74-474a-b716-1f044246c18c",
    name: "Golden Razz Berry",
    description:
      "Feed this to a wild Pokémon to make it much easier to catch. Feed this to a Pokémon on a Gym to fully restore its motivation.",
    price: 5,
    categoryId: "0002",
    qtyStock: RandGen(),
    qtyCart: 0,
    likes: 9,
    isLiked: false,
    imgUrl: "img/Berries/Golden_Razz_Berry.png"
  }
];

export default items;
