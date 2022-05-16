import React from 'react';
import { Text, Stylesheet, View, Image} from 'react-native';

export default function App(){
return (
  <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png'}} style={{ width:100,height:100,marginTop:100}}/>

    <Text>
    Queen é o nome da lendária banda britânica, criada em 1970 por Freddie Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda começou com o hard rock, mas depois mudou seu estilo para pop-rock, o que tornou seu nome icônico.
    </Text>

  </View>
);
  

}