import React from 'react'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/svg/star'
import open from '../../../../assets/svg/open'
import { Text } from '../../../layout/typography/text'
import {
    RestaurantInfoCard,
    RestaurantPic,
    Info,
    MiddleInfo,
    Rating,
    Icon
} from './restaurantCard.styles'

export const RestaurantCard = ({ restaurant = {} }) => {

    const {
        name = "Some restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://picsum.photos/700"
        ],
        address = "#55 some area",
        isOpenNow = true,
        placeId,
        rating = 4.1,
        isClosedTemporarily = false,
    } = restaurant;

    const ratingsArray = Array.from(new Array(Math.floor(rating)))

    return (
        <>
            <RestaurantInfoCard elevation={5}>
                <RestaurantPic key={name} source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="body">{name}</Text>
                    <MiddleInfo>
                        <Rating>
                            {ratingsArray.map((_, i) => (
                                <SvgXml
                                    key={`star-${placeId}-${i}`}
                                    xml={star}
                                    width={20}
                                    height={20}
                                />
                            ))}
                        </Rating>
                        {isClosedTemporarily && <Text variant="error">Temporarily closed</Text>}
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        {/* <Icon source={{ uri: icon }} /> */}
                    </MiddleInfo>
                    <Text variant="caption">{address}</Text>
                </Info>
            </RestaurantInfoCard>
        </>
    )
};
