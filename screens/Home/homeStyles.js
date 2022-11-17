import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 700,
    },
    buttonLogin: {
        border: '2px solid #000000',
        paddingTop: 7,
        backgroundColor: '#83EAA4',
        marginTop: 25,
        width: '167px',
        height: '52px',
        borderRadius: 6,
    },
    buttonCadastro: {
        border: '2px solid #000000',
        fontWeight: 600,
        paddingTop: 7,
        backgroundColor: '#000',
        marginTop: 25,
        width: '167px',
        height: '52px',
        borderRadius: 6,
    },
    buttonsSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-around',
        width: '100%'
    },
    homeImage: {
        width: '100%',
        height: 428
    },
    homeLogo: {
        width: 230,
        height: 107,
        marginBottom: 100
    },
    divider: {
        borderRadius: 10,
        marginVertical: 50,
        width: 180,
        height: 5,
    }
})