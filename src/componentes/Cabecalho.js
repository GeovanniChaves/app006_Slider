import React from "react";
import { View, Text, Image } from 'react-native';
import { estilos } from "../styleSheet/estilos";

function Cabecalho() {
    let img_logo = require("../img/logo2.png");
    let titulo = "Componente Slider";

    return (
        <View style={estilos.area_cabecalho}>
            <Image 
                source={img_logo} 
                // Adicionamos resizeMode e ajustamos o tamanho diretamente aqui
                style={{
                    width: 70,             // Diminuímos a largura de 100 para 70
                    height: 70,            // Diminuímos a altura de 100 para 70
                    resizeMode: 'contain' // Garante que a imagem toda caiba, sem cortes
                }} 
            />
            <Text style={estilos.titulo_cabecalho}>{titulo}</Text>
        </View>
    );
}

export default Cabecalho;