import * as React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeaturedPlaylists, PlaylistDetails } from "../screens";

export type RootStackParamList = {
  FeaturedPlaylists: undefined;
  PlaylistDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FeaturedPlaylists" component={FeaturedPlaylists} />
        <Stack.Screen name="PlaylistDetails" component={PlaylistDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
