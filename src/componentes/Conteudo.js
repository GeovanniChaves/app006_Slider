import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { estilos } from "../styleSheet/estilos";
import Slider from "@react-native-community/slider";

function Conteudo() {
    let texto = "O componente Slider permite que o usuário escolha um valor de um intervalo predefinido de valores, arrastando um botão ao longo de uma linha do controle deslizante";

    const [corFundoCxTxt, setCorFundoCxTxt] = useState("white");
    const [nomeUsr, setNomeUsr] = useState("");
    const [corTexto, setCorTexto] = useState("black");
    const [corFundoConteudo, setCorFundoConteudo] = useState("yellow");

    function alteraCorFundo() {
        if (corFundoCxTxt === 'white')
            setCorFundoCxTxt('orange');
        else
            setCorFundoCxTxt('white');
    }

    function alteraNomeUsr(nome) {
        setNomeUsr(nome);
    }

    function deslizaSlider1(index) {
        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorTexto(cor);
    }

    function deslizaSlider2(index) {
        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorFundoConteudo(cor);
    }

    return (
        <View style={[estilos.area_conteudo, { backgroundColor: corFundoConteudo }]}>
            <Text style={[estilos.texto_informativo, { color: corTexto }]}>{texto}</Text>
            
            <Text>Digite seu nome:</Text>
            <TextInput 
                style={[estilos.input, { backgroundColor: corFundoCxTxt }]} 
                onChangeText={alteraNomeUsr} 
            />

            <Text>Deslize o slider 1:</Text>
            <Slider onValueChange={deslizaSlider1} minimumTrackTintColor="red" thumbTintColor="teal" />

            <Text>Deslize o slider 2:</Text>
            <Slider onValueChange={deslizaSlider2} minimumTrackTintColor="red" thumbTintColor="teal" />

            <TouchableHighlight style={estilos.botao} onPress={alteraCorFundo}>
                <Text style={estilos.texto_botao}>CLIQUE AQUI</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Conteudo;