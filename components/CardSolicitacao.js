import { View, Image } from 'react-native';
import { Text, Button, TextInput, RadioButton } from 'react-native-paper';
import { styles } from '../screens/Solicitacoes/solicitacoesStyles';

const CardSolicitacao = ({ titulo, numero , endereco , protocolo, color}) => {
    return (
        <View>
            <Text style={styles.solicitacoes_titulo}>{titulo}</Text>
            <View style={styles.solicitacoes_card}>
                <Text style={Object.assign({backgroundColor: `${color}`},styles.solicitacoes_card__numero)}>{numero}</Text>
                <View>
                    <Text style={styles.solicitacoes_card__endereco}>{endereco}</Text>
                    <Text style={styles.solicitacoes_card__protocolo}>{protocolo}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardSolicitacao