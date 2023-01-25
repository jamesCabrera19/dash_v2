import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/orders";
//
const Stack = createNativeStackNavigator();

const OrdersStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Orders">
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            {/* ALL OTHER SCREENS related to this tab should go here */}
        </Stack.Navigator>
    );
};

export default OrdersStack;
