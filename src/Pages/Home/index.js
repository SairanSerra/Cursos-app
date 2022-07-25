import React, { useContext } from "react";
import * as Styled from './styles.js';
import { Auth } from "../../context/Auth.js";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const { goBack } = useNavigation();
    const { token, nome } = useContext(Auth);
    return (<Styled.View>

        <Styled.Text>
            teste{nome} {token}
        </Styled.Text>
        <Styled.Button onPress={goBack}>
            <Styled.Text>
                hello world
            </Styled.Text>
        </Styled.Button>
    </Styled.View>
    )
}

export default Home;