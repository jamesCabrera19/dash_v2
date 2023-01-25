import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider as DataProvider } from "./context/yelp";
//
import Index from "./stackNavi/index";

function App() {
    return (
        <NavigationContainer>
            <Index />
        </NavigationContainer>
    );
}

export default () => {
    return (
        <>
            <DataProvider>
                <>
                    <>
                        <App />
                    </>
                </>
            </DataProvider>
        </>
    );
};
