import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import Navbar from '../../components/Navbar';
import { styles } from './mapStyles';

const Map = ({ navigation, apiLink, endpoint }) => {

    const themeWhite = {
        colors: {
            primary: 'black',
            text: 'black',
            placeholder: 'black',
            underlineColor: 'hidden',
            outlineColor: 'none',
        },
    };

    const handleLogin = () => {
        navigation.navigate('Formulario', apiLink, endpoint);
    }

    return (
        <View style={styles.main}>

            <Image
                style={styles.imgFiveIcon}
                source={require('../../assets/fv_icon.svg')}
            />

            <Image
                style={styles.imgMap}
                source={require('../../assets/map.png')}
            />

            <View style={styles.card}>
                <Text style={styles.card_title}>Você está no endereço:</Text>
                <View style={styles.card_localizacao}>
                    <Image
                        style={styles.card_localizacao__img}
                        source={require('../../assets/localizacao.svg')}
                    />
                    <Text style={styles.card_localizacao__text}>Av. São paulo - zona 2 - maringá</Text>
                </View>

                <Text style={styles.card_info}>AINDA NÃO HÁ REPORTES OARA ESTA LOCALIZAÇÃO</Text>

                <Button
                    style={styles.buttonReport}
                    color='black'
                    onPress={handleLogin}>
                    REGISTRAR REPORTE
                </Button>
            </View>
            <Navbar />
        </View>
    );
};

export default Map;