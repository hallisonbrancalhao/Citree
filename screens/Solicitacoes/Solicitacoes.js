import { View, Image } from 'react-native';
import { Text, Button, TextInput, RadioButton } from 'react-native-paper';
import Navbar from '../../components/Navbar';
import { styles } from './solicitacoesStyles';

const themeWhite = {
    colors: {
        primary: 'black',
        text: 'black',
        placeholder: 'black',
        underlineColor: 'hidden',
        outlineColor: 'none',
    },
};

import React from 'react'
import CardSolicitacao from '../../components/CardSolicitacao';

const Solicitacoes = ({ navigation, apiLink, endpoint }) => {
    return (
        <>
            <View style={styles.main}>
                <Image
                    style={styles.imgFiveIcon}
                    source={require('../../assets/fv_icon.svg')}
                />

                <View style={styles.section_solicitacoes}>
                    <Image
                        style={styles.icon_solicitacoes}
                        source={require('../../assets/solicitacoes_icon.svg')}
                    />
                    <Text style={styles.solicitacoes_section__text}>SOLICITAÇÕES</Text>
                </View>

                <CardSolicitacao
                    titulo={"Concluídos"}
                    numero={"1"}
                    endereco={"Av. São paulo - zona 2 - maringá"}
                    protocolo={"Protocolo: 288844622498"}
                    color={"#83EAA4"}
                />

                <CardSolicitacao
                    titulo={"Em Análise"}
                    numero={"1"}
                    endereco={"Av. São paulo - zona 2 - maringá"}
                    protocolo={"Protocolo: 288844622498"}
                    color={"#FFFA78"}
                />

                <CardSolicitacao
                    titulo={"Aprovado"}
                    numero={"1"}
                    endereco={"Av. São paulo - zona 2 - maringá"}
                    protocolo={"Protocolo: 288844622498"}
                    color={"#329AFB"}
                />
                <CardSolicitacao
                    titulo={"Reprovado"}
                    numero={"1"}
                    endereco={"Av. São paulo - zona 2 - maringá"}
                    protocolo={"Protocolo: 288844622498"}
                    color={"#EA8383"}
                />

                <Navbar />
            </View>
        </>
    )
}

export default Solicitacoes