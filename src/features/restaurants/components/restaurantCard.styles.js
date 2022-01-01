import styled from 'styled-components/native'
import { Card } from 'react-native-paper';

export const RestaurantInfoCard = styled(Card)`
padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantPic = styled(Card.Cover)`
margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.ui.primary};
`;

export const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View``;

export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[1]};
`;

export const MiddleInfo = styled.View`
flex-direction: row;
justify-content: space-between;
alignItems: center;
`;

export const Closed = styled.Text`
color: ${(props) => props.theme.colors.ui.error};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;