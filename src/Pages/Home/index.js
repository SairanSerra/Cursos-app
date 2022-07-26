import React, { useContext } from "react";
import * as Styled from './styles.js';
import { Auth } from "../../context/Auth.js";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const { goBack } = useNavigation();
    const { token, nome } = useContext(Auth);
    return (<Styled.Scroll>

        <Styled.Text>

        </Styled.Text>
        <Styled.Button onPress={goBack}>
            <Styled.Text>

            </Styled.Text>
        </Styled.Button>
    </Styled.Scroll>
    )
}

export default Home;