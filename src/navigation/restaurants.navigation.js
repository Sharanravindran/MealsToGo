import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../features/restaurants/screens/restaurantDetail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.Screen
                name="RestaurantsNav"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={{ headerShown: false }}
            />
        </RestaurantStack.Navigator>
    )
}
