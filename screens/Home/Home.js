import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { styles } from './homeStyles';

const Home = ({ navigation }) => {

    const endpoint = 'fcde91534c8a4b7e9a6383fda6ba6f41';

    const goLogin = () => {
        navigation.navigate('Login', endpoint)
    }

    return (
        <View style={styles.main}>
            <Image
                style={styles.homeImage}
                source={require('../../assets/home_img.png')}
            />
            <Image
                style={styles.homeLogo}
                source={require('../../assets/logo.png')}
            />
            <View style={styles.buttonsSection}>
                <Button
                    style={styles.buttonLogin}
                    color='black'
                    onPress={goLogin}>
                    Login
                </Button>

                <Button
                    style={styles.buttonCadastro}
                    color='white'
                    onPress={goLogin}>
                    Cadastro
                </Button>
            </View>
            <Image
                style={styles.divider}
                source={require('../../assets/divider.svg')}
            />
        </View>
    );
};

export default Home;