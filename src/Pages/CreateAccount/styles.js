import styled from "styled-components";

export const View = styled.ScrollView`
flex: 1;
background-color: #093366;
`;

export const AvoidingView = styled.KeyboardAvoidingView`
align-items: center;
`;

export const InputText =  styled.TextInput`
background-color: #FFFFFF;
width: 350px;
margin-top: 10px;
`;

export const Title = styled.Text`
margin-top: 100px;
margin-bottom: 40px;
font-size: 40px;
color:#FFFFFF;
font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
background-color: #1ABC9C;
width: 150px;
height: 40px;
border-radius: 3px;
margin-top: 80px;
`;

export const TextButton = styled.Text`
font-size: 30px;
margin-left: 9px;
`;

export const ButtonBack = styled.TouchableOpacity`
margin-top: 20px;
`;

export const TextBack = styled.Text`
color:#FFFFFF;
font-size: 20px;
`;