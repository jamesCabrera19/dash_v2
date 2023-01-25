import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton, MD3Colors } from "react-native-paper";
//
import HomeStack from "./homeStack";
import SearchStack from "./searchStack";
import AccountStack from "./accountStack";
import OrdersStack from "./ordersStack";
import PickupStack from "./pickupStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SHOW_CHILD_HEADER = false;
const ACTIVE_TAB_COLOR = "red";

const Index = () => {
    return (
        <Tab.Navigator detachInactiveScreens={true}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    // title: "Home",
                    headerShown: false,
                    // headerTransparent: true,
                    tabBarShowLabel: false, // displays icon name
                    tabBarActiveTintColor: ACTIVE_TAB_COLOR,
                    tabBarInactiveTintColor: "grey",
                    tabBarItemStyle: "black",
                    tabBarIcon: ({ color, size }) => (
                        <IconButton
                            icon="home"
                            iconColor={MD3Colors.error50}
                            size={20}
                            // onPress={() => console.log('Pressed')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="PickupStack"
                component={PickupStack}
                options={{
                    // title: "Home",
                    headerShown: false,
                    // headerTransparent: true,
                    tabBarShowLabel: false, // displays icon name
                    tabBarActiveTintColor: ACTIVE_TAB_COLOR,
                    tabBarInactiveTintColor: "grey",
                    tabBarItemStyle: "black",
                    tabBarIcon: ({ color, size }) => (
                        <IconButton
                            icon="walk"
                            iconColor={MD3Colors.error50}
                            size={20}
                            // onPress={() => console.log('Pressed')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    // title: "Search",
                    headerShown: false,
                    // headerTransparent: true,
                    tabBarShowLabel: false, // displays icon name
                    tabBarActiveTintColor: ACTIVE_TAB_COLOR,
                    tabBarInactiveTintColor: "grey",
                    tabBarItemStyle: "black",
                    tabBarIcon: ({ color, size }) => (
                        <IconButton
                            icon="magnify"
                            iconColor={MD3Colors.error50}
                            size={20}
                            // onPress={() => console.log('Pressed')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="OrdersStack"
                component={OrdersStack}
                options={{
                    // title: "Search",
                    headerShown: false,
                    // headerTransparent: true,
                    tabBarShowLabel: false, // displays icon name
                    tabBarActiveTintColor: ACTIVE_TAB_COLOR,
                    tabBarInactiveTintColor: "grey",
                    tabBarItemStyle: "black",
                    tabBarIcon: ({ color, size }) => (
                        <IconButton
                            icon="newspaper"
                            iconColor={MD3Colors.error50}
                            size={20}
                            // onPress={() => console.log('Pressed')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AccountStack"
                component={AccountStack}
                options={{
                    // title: "Search",
                    headerShown: false,
                    // headerTransparent: true,
                    tabBarShowLabel: false, // displays icon name
                    tabBarActiveTintColor: ACTIVE_TAB_COLOR,
                    tabBarInactiveTintColor: "grey",
                    tabBarItemStyle: "black",
                    tabBarIcon: ({ color, size }) => (
                        <IconButton
                            icon="account-circle-outline"
                            iconColor={MD3Colors.error50}
                            size={20}
                            // onPress={() => console.log('Pressed')}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default Index;
