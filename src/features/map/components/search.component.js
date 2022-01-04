import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../api/location/context/location.context';

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
    position: absolute;
    z-index: 1;
    top: 40px;
    width: 100%;
`;

export const Search = () => {

    const { isLoading, error, keyword, search } = useContext(LocationContext);

    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <>
            <SearchContainer>
                <Searchbar
                    placeholder='Search for a location'
                    value={searchKeyword}
                    onSubmitEditing={() => {
                        search(searchKeyword);
                    }}
                    onChangeText={(text) => {
                        setSearchKeyword(text);
                    }}
                />
            </SearchContainer>
        </>
    )
}