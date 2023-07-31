const menu = [
  {
    id: 1,
    title: 'idli sambar',
    category: 'Breakfast',
    fullPrice: 50,
    halfPrice: "N/A",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 2,
    title: 'samosa',
    category: 'Breakfast',
    fullPrice: 15,
    halfPrice: "N/A",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 3,
    title: 'vada',
    category: 'Breakfast',
    fullPrice: 50,
    halfPrice: "N/A",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 4,
    title: 'chole kulche',
    category: 'Breakfast',
    fullPrice: 30,
    halfPrice: "N/A",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 5,
    title: 'chilli potato',
    category: 'Chinese',
    fullPrice: 90,
    halfPrice: 50,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 6,
    title: 'honey chilli potato',
    category: 'Chinese',
    fullPrice: 90,
    halfPrice: 50,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 7,
    title: 'french fries',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 8,
    title: 'paneer momos (steam)',
    category: 'Chinese',
    fullPrice: "50 (8pcs.)",
    halfPrice: "30 (4pcs.)",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 9,
    title: 'paneer momos (fried)',
    category: 'Chinese',
    fullPrice: "60 (8pcs.)",
    halfPrice: "35 (4pcs.)",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 10,
    title: 'veg momos (steam)',
    category: 'Chinese',
    fullPrice: "40 (8pcs.)",
    halfPrice: "25 (4pcs.)",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 11,
    title: 'veg momos (fried)',
    category: 'Chinese',
    fullPrice: "50 (8pcs.)",
    halfPrice: "30 (4pcs.)",
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 12,
    title: 'manchurian',
    category: 'Chinese',
    fullPrice: 90,
    halfPrice: 50,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 13,
    title: 'fried rice',
    category: 'Chinese',
    fullPrice: 90,
    halfPrice: 50,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 14,
    title: 'chowmine',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 15,
    title: 'red sauce pasta',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 16,
    title: 'white sauce pasta',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 17,
    title: 'mix sauce pasta',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 18,
    title: 'spring roll',
    category: 'Chinese',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 19,
    title: 'pizza roll',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 20,
    title: 'pasta roll',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 21,
    title: 'cheese roll',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 22,
    title: 'maxican roll',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 23,
    title: 'sandwich',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 24,
    title: 'veg patty',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 25,
    title: 'paneer patty',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 26,
    title: 'pizza ring',
    category: 'Snacks',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 27,
    title: 'cold drinks',
    category: 'Beverages',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 28,
    title: 'cold coffee',
    category: 'Beverages',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 29,
    title: 'black current shake',
    category: 'Beverages',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 30,
    title: 'butterscotch shake',
    category: 'Beverages',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
  {
    id: 31,
    title: 'chocolate shake',
    category: 'Beverages',
    fullPrice: 80,
    halfPrice: 40,
    img: 'https://rakskitchen.net/wp-content/uploads/2022/07/honey-chilli.jpg',
  },
];
export default menu;
