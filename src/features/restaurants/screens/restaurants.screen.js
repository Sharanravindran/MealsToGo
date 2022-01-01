import React, { useState, useContext } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native'
import { RestaurantCard } from '../components/restaurantCard.component';
import { Spacer } from '../../../layout/spacer/spacer'
import { RestaurantsContext } from "../../../api/restaurants/restaurants.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const CardContainer = styled.View`
    flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 5,
    },
})``;

export const RestaurantsScreen = () => {

    const { isLoading, error, restaurants } = useContext(RestaurantsContext);

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <SearchContainer>
                <Searchbar
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            <CardContainer>
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <Spacer position="bottom" size="large">
                                <RestaurantCard restaurant={item} />
                            </Spacer>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </CardContainer>
        </>
    )
};
