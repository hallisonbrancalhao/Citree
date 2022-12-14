import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { styles } from './loginStyles';

const Login = ({ navigation, apiLink, endpoint }) => {

    const [loginInput, setloginInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');

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
        navigation.navigate('Map', apiLink, endpoint);
    }

    return (
        <View style={styles.main}>
            <Image
                style={styles.homeLogo}
                source={require('../../assets/logo.png')}
            />

            <View style={styles.inputSec}>

                <Text style={styles.label}>E-MAIL OU TELEFONE</Text>
                <TextInput
                    style={styles.input}
                    theme={themeWhite}
                    value={loginInput}
                    onChangeText={setloginInput}
                />

                <Text style={styles.label}>SENHA</Text>

                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    theme={themeWhite}
                    value={senhaInput}
                    onChangeText={setSenhaInput}
                />

                <Text style={styles.link}>Esqueceu sua senha?</Text>


            </View>
            <View style={styles.buttonsSection}>
                <Button
                    style={styles.buttonLogin}
                    color='black'
                    onPress={handleLogin}>
                    Login
                </Button>

                <Button
                    style={styles.buttonCadastro}
                    color='white'
                    onPress={handleLogin}>
                    Cadastro
                </Button>
            </View>

        </View>
    );
};

export default Login;