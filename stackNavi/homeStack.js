import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            {/* ALL OTHER SCREENS related to this tab should go here */}
        </Stack.Navigator>
    );
};

export default HomeStack;
