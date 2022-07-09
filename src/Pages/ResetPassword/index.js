import React from "react";
import * as Styled from "./styles";



const ResetPassword = () => {

    return (
        <Styled.View>
          <Styled.Title>Digite seu email</Styled.Title> 
          <Styled.Input 
          placeholder="Digite seu email"
          placeholderTextColor="#093366"
          />
          <Styled.BtnConfirm>
          <Styled.TextConfirm>Continuar</Styled.TextConfirm>
          </Styled.BtnConfirm>
        </Styled.View>
        
)

}

export default ResetPassword;