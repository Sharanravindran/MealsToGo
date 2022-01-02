import React from 'react'
import { NavigationContainer, Text } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeArea } from '../layout/safeArea/safeArea';
import { RestaurantsNavigator } from './restaurants.navigation';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
};

const SettingsScreen = () => <SafeArea><Text>Settings Screen</Text></SafeArea>

const MapScreen = () => <SafeArea><Text>Map Screen</Text></SafeArea>

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false

  };
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
            >
                <Tab.Screen
                    name="Restaurants"
                    component={RestaurantsNavigator}
                />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
