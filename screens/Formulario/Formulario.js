import axios from 'axios';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, TextInput, RadioButton } from 'react-native-paper';
import Navbar from '../../components/Navbar';
import { styles } from './formularioStyles';

const themeWhite = {
    colors: {
        primary: 'black',
        text: 'black',
        placeholder: 'black',
        underlineColor: 'hidden',
        outlineColor: 'none',
    },
};

const Formulario = ({ navigation, apiLink, endpoint }) => {

    const [nomeInput, setnomeInput] = useState('');
    const [telefoneInput, setTelefoneInput] = useState('');
    const [situacao, setSituacao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const handleSend = async () => {
        navigation.navigate('Solicitacoes');
        await axios.post(`${apiLink}/${endpoint}/solicitacoes`, {
            nome: nomeInput,
            telefone: telefoneInput,
            situacao: situacao,
            localizacao: localizacao,
            observacoes: observacoes
        });
    }

    return (
        <>
            <View style={styles.main}>
                <Image
                    style={styles.imgFiveIcon}
                    source={require('../../assets/fv_icon.svg')}
                />

                <View style={styles.inputSec}>
                    <TextInput
                        style={styles.input}
                        label={"NOME"}
                        theme={themeWhite}
                        value={nomeInput}
                        onChangeText={setnomeInput}
                    />
                    <TextInput
                        style={styles.input}
                        label={"TELEFONE DE CONTATO"}
                        theme={themeWhite}
                        value={telefoneInput}
                        onChangeText={setTelefoneInput}
                    />
                    <View style={styles.radio_section}>
                        <Text style={styles.radio_section__title}>solicita????o de poda ou remo????o</Text>
                        <RadioButton.Group onValueChange={newValue => setSituacao(newValue)} value={situacao}>
                            <Text style={styles.radio_section__subtitle}>situa????o</Text>
                            <View style={styles.radio_section__sutuacao}>
                                <View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="risco de queda" />
                                        <Text style={styles.radio_item__text}>risco de queda</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="queda j?? ocorrida" />
                                        <Text style={styles.radio_item__text}>queda j?? ocorrida</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="queda de galhos" />
                                        <Text style={styles.radio_item__text}>queda de galhos</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="riscos ?? rede eletrica" />
                                        <Text style={styles.radio_item__text}>riscos ?? rede eletrica</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="??rvore inclinada" />
                                        <Text style={styles.radio_item__text}>??rvore inclinada</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="contato com constru????o" />
                                        <Text style={styles.radio_item__text}>contato com constru????o</Text>
                                    </View>
                                </View>
                            </View>
                        </RadioButton.Group>

                        <RadioButton.Group onValueChange={newValue => setLocalizacao(newValue)} value={localizacao}>
                            <Text style={styles.radio_section__subtitle}>LOCALIDADE</Text>
                            <View style={styles.radio_section__sutuacao}>
                                <View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="??rea residencial" />
                                        <Text style={styles.radio_item__text}>??rea residencial</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="??rea industrial" />
                                        <Text style={styles.radio_item__text}>??rea industrial</Text>
                                    </View>
                                    <View style={styles.radio_item}>
                                        <RadioButton color={"black"} value="??rea escolar" />
                                        <Text style={styles.radio_item__text}>??rea escolar</Text>
                                    </View>
                                </View>
                            </View>
                        </RadioButton.Group>

                        <Text style={styles.radio_section__subtitle}>observa????es</Text>
                        <TextInput
                            style={styles.input}
                            theme={themeWhite}
                            value={observacoes}
                            onChangeText={setObservacoes}
                        />
                    </View>
                </View>
                <View style={styles.buttonsSection}>
                    <Button
                        style={styles.button}
                        color='black'
                        onPress={handleSend}>
                        ENVIAR
                    </Button>
                </View>
            </View>
            <Navbar />
        </>
    );
};

export default Formulario;