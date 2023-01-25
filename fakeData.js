import { faker } from "@faker-js/faker";
import uuid from "react-native-uuid";

const products = (num) => {
    let items = num;
    if (!num || num === undefined) {
        items = 5;
    }
    let arr = [];
    for (let i = 0; i < items; i++) {
        arr.push({
            title: faker.commerce.product(),
            id: uuid.v4(),
            price: faker.commerce.price(),
            image: faker.image.image(100, 100),
            img: "https://picsum.photos/700",
        });
    }
    return arr;
};

const categories = [
    {
        id: uuid.v4(),
        title: "Convenience",
        icon: ["MaterialCommunityIcons", "store-marker"],
    },
    {
        id: uuid.v4(),
        title: "Grocery",
        icon: ["MaterialIcons", "cart"],
    },
    {
        id: uuid.v4(),
        title: "Alcohol",
        icon: ["Entypo", "beer"],
    },
    {
        id: uuid.v4(),
        title: "Pets",
        icon: ["MaterialIcons", "dog"],
    },
    {
        id: uuid.v4(),
        title: "Offers",
        icon: ["MaterialIcons", "offer"],
    },

    {
        id: uuid.v4(),
        title: "Catering",
        icon: ["MaterialCommunityIcons", "food-variant"],
    },
    {
        id: uuid.v4(),
        title: "Retail",
        icon: ["Entypo", "store"],
    },
    {
        id: uuid.v4(),
        title: "Flowers",
        icon: ["MaterialCommunityIcons", "flower-outline"],
    },
    {
        id: uuid.v4(),
        title: "Shipping",
        icon: ["FontAwesome5", "truck-fast-outline"],
    },
    {
        id: uuid.v4(),
        title: "Gifts",
        icon: ["FontAwesome5", "gift"],
    },
];

const subCategories = [
    {
        id: uuid.v4(),
        title: "Drinks",
        icon: ["Ionicons", "bottle-soda"],
    },
    {
        id: uuid.v4(),
        title: "Snacks",
        icon: ["", "candy"],
    },
    {
        id: uuid.v4(),
        title: "food",
        icon: ["", "food-hot-dog"],
    },
    {
        id: uuid.v4(),
        title: "Alcohol",
        icon: ["", "bottle-wine"],
    },
    {
        id: uuid.v4(),
        title: "Household",
        icon: ["", "spray-bottle"],
    },
];
export { products, categories, subCategories };
