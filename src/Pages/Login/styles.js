import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
flex: 1;
background-color: #093366;
`;

export const Keybord = styled.KeyboardAvoidingView`
align-items: center;
`;

export const Img = styled.Image`
margin-bottom: 100px;
margin-top: 30px;
`;

export const Input = styled.TextInput`
background-color: #FFFFFF;
border-color: #FFFFFF;
color: #093366;
width: 350px;
margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
width: 100px;
height: 40px;
border-radius: 5px;
margin-top: 40px;
background-color: #1ABC9C;
`;

export const Texto = styled.Text`
font-size: 25px;
justify-content: center;
align-items: center;
font-weight: bold;
margin-left: 18px;
margin-top: 2px
`;
