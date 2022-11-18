import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50,
    },
    imgFiveIcon: {
        width: 43,
        height: 43,
        left: '20px',
        top: 20,
        position: 'absolute'
    },
    imgMap: {
        marginTop: 50,
        width: '100%',
        height: 450
    },
    card: {
        padding: 20,
        width: '85%',
        height: 268,
        borderRadius: 15,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        border: '2px solid #000000',
        marginTop: '-100px',
        backgroundColor: '#fff',
    },
    card_title: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 15,
    },
    card_localizacao: {
        paddingTop: '2rem',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card_localizacao__img: {
        height: 30,
        width: 30
    },
    card_localizacao__text: {
        textTransform: 'uppercase',
        paddingLeft: '1rem',
        fontSize: 15,
        fontWeight: 400
    },
    card_info: {
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: 600,
        paddingTop: '2rem',
        color: 'rgba(0, 0, 0, 0.43)'
    },
    buttonReport: {
        textTransform: 'uppercase',
        border: '2px solid #000000',
        paddingTop: 7,
        backgroundColor: '#83EAA4',
        marginTop: 25,
        height: '52px',
        borderRadius: 6,
    },

})