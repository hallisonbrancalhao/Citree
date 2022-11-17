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
    link: {
        marginTop: '1rem',
        fontSize: 10,
        color: '#1E1E1E',
    },
    inputSec: {
        width: '90%'
    },
    input: {
        border: '2px solid #000',
        borderRadius: 6,
        backgroundColor: 'white'
    },
    label: {
        fontSize: 13,
        marginBottom: '1rem',
        marginTop: '2rem',
        fontWeight: '700',
        color: '#000'
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
        justifyContent: 'space-between',
        width: '90%'
    },
    homeLogo: {
        width: 230,
        height: 107,
        marginBottom: 50
    },
    divider: {
        marginBottom: '2rem',
        borderRadius: 10,
        marginVertical: 50,
        width: 180,
        height: 5,
    }
})