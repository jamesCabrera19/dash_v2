import { StyleSheet, Text, View } from "react-native";
const store = {
    alias: "good-fortune-supermarket-richardson",
    categories: [{ alias: "grocery", title: "Grocery" }],
    coordinates: { latitude: 32.95273622, longitude: -96.7277326 },
    delivery_time: 25,
    display_phone: "(972) 798-1168",
    distance: 3627.863967255356,
    id: "9HdIw_SGirK8qcfBsZSIIw",
    image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/Gcx0XlrbuusNbxF1KnmfEQ/o.jpg",
    is_closed: false,
    location: {
        address1: "400 N Greenville Ave",
        address2: "",
        address3: "",
        city: "Richardson",
        country: "US",
        display_address: ["400 N Greenville Ave", "Richardson, TX 75081"],
        state: "TX",
        zip_code: "75081",
    },
    name: "Good Fortune Supermarket",
    phone: "+19727981168",
    price: "$$",
    products: [
        {
            id: "9dfea4d7-2db6-44a5-a9d2-bf59ca9ba8ab",
            image: "https://loremflickr.com/100/100/city",
            img: "https://picsum.photos/700",
            price: "396.00",
            title: "Salad",
        },
        {
            id: "b5e9d211-9ad6-403c-89ad-b8a6e206d16a",
            image: "https://loremflickr.com/100/100/sports",
            img: "https://picsum.photos/700",
            price: "683.00",
            title: "Fish",
        },
        {
            id: "c834c33c-121a-428b-85ae-4a99f9617f68",
            image: "https://loremflickr.com/100/100/transport",
            img: "https://picsum.photos/700",
            price: "905.00",
            title: "Pants",
        },
        {
            id: "43d80c2e-6b61-4f49-9f99-1ecd4e0a35e0",
            image: "https://loremflickr.com/100/100/nightlife",
            img: "https://picsum.photos/700",
            price: "112.00",
            title: "Chips",
        },
        {
            id: "a4e897c2-d18b-4e03-9313-d680d89efd67",
            image: "https://loremflickr.com/100/100/people",
            img: "https://picsum.photos/700",
            price: "551.00",
            title: "Soap",
        },
        {
            id: "9741fbb6-1181-4fdc-813a-6ebe50379a2b",
            image: "https://loremflickr.com/100/100/animals",
            img: "https://picsum.photos/700",
            price: "871.00",
            title: "Soap",
        },
        {
            id: "e135d7ba-572f-4ea0-b162-51fa7dc78794",
            image: "https://loremflickr.com/100/100/business",
            img: "https://picsum.photos/700",
            price: "830.00",
            title: "Keyboard",
        },
        {
            id: "84206423-9760-4d60-ae51-ee880eaacb62",
            image: "https://loremflickr.com/100/100/nightlife",
            img: "https://picsum.photos/700",
            price: "78.00",
            title: "Ball",
        },
        {
            id: "2a318cb1-3624-40f1-a9d8-8f5f566e966f",
            image: "https://loremflickr.com/100/100/sports",
            img: "https://picsum.photos/700",
            price: "394.00",
            title: "Ball",
        },
        {
            id: "a42d5618-f0e3-4e3b-915c-5878cfb9ff24",
            image: "https://loremflickr.com/100/100/food",
            img: "https://picsum.photos/700",
            price: "642.00",
            title: "Salad",
        },
    ],
    rating: 3.5,
    review_count: 28,
    transactions: ["delivery"],
    url: "https://www.yelp.com/biz/good-fortune-supermarket-richardson?adjust_creative=S6uGhh9p1KCP0ZyBW3pHWw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=S6uGhh9p1KCP0ZyBW3pHWw",
};

const Orders = () => {
    return (
        <View>
            <Text>This is Orders screen component</Text>
        </View>
    );
};

export default Orders;
