import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import { RestaurantInfo as RestaurantInfoCard } from '../components/restaurant-info.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const CardContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            <CardContainer>
                <RestaurantInfoCard />
            </CardContainer>
        </SafeArea>
    )
};
