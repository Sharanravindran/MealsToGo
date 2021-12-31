import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components/native'
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/svg/star'
import open from '../../../../assets/svg/open'

const RestaurantCard = styled(Card)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantPic = styled(Card.Cover)`
    margin-bottom: ${(props) => props.theme.space[2]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View``;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
    padding-bottom: ${(props) => props.theme.space[1]};
`;

const MiddleInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    alignItems: center;
`;

const Open = styled(SvgXml)``;

const Closed = styled.Text`
    color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = "Some restaurant",
        icon,
        photos = [
            "https://picsum.photos/700"
        ],
        address = "#55 some area",
        isOpenNow = true,
        rating = 4.1,
        isClosedTemp = false,
    } = restaurant;

    const ratingsArray = Array.from(new Array(Math.floor(rating)))

    return (
        <>
            <RestaurantCard elevation={5}>
                <RestaurantPic key={name} source={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                    <MiddleInfo>
                        <Rating>
                            {ratingsArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))}
                        </Rating>
                        {isClosedTemp && <Closed>Temporarily closed</Closed>}
                        {isOpenNow && <Open xml={open} width={20} height={20} />}
                    </MiddleInfo>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </>
    )
};
