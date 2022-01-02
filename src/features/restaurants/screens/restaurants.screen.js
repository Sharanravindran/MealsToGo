import React, { useContext } from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { RestaurantCard } from '../components/restaurantCard.component';
import { Spacer } from '../../../layout/spacer/spacer'
import { RestaurantsContext } from "../../../api/restaurants/context/restaurants.context";
import { SafeArea } from '../../../layout/safeArea/safeArea'
import { Search } from '../../../components/search/search.component';
import { RestaurantDetailScreen } from './restaurantDetail.screen';

const CardContainer = styled.View`
    flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 5,
    },
})``;

export const RestaurantsScreen = ({ navigation }) => {

    const { isLoading, error, restaurants } = useContext(RestaurantsContext);

    return (
        <>
            <SafeArea>
                <Search />
                {isLoading ?
                    <View style={{ position: "absolute", top: "50%", left: "50%" }}>
                        <ActivityIndicator
                            animating={true}
                            color={Colors.red800}
                            size={"large"}
                            style={{ marginLeft: -25 }}
                        />
                    </View> :
                    <CardContainer>
                        <RestaurantList
                            data={restaurants}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("RestaurantDetail", {
                                                restaurant: item,
                                            })
                                        }
                                    >
                                        <Spacer position="bottom" size="large">
                                            <RestaurantCard restaurant={item} />
                                        </Spacer>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.name}
                        />
                    </CardContainer>}
            </SafeArea>
        </>
    )
};
