import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
flex: 1;
background-color: #093366;
`;

export const keybord = styled.KeybordAvoidingView`
align-items: center;
`;
const estilos = StyleSheet.create({

    text: {
        fontSize: 40,
        color: '#FFFFFF'
    },
    img: {
        marginBottom: 100,
        marginTop: 30
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        color: '#093366',
        width: 350,
        marginTop: 10

    },
    texto: {
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop: 2
    },
    botao: {
        width: 100,
        height: 40,
        borderRadius: 5,
        marginTop: 40,
        backgroundColor: '#1ABC9C'
    }
})

export default estilos;