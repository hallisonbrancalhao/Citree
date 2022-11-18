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
    inputSec: {
        marginTop: 50,
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
    },
    radio_section: {
        marginTop: '3rem'
    },
    radio_section__sutuacao: {
        display: 'flex',
        flexDirection: 'row',
    },
    radio_section__subtitle: {
        paddingTop: '2rem',
        paddingStart: '.5rem',
        textTransform: 'uppercase',
        fontWeight: 700,
    },
    radio_section__title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center',
        color: '#0FA958',
    },
    radio_item: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
    },
    radio_item__text: {
        fontSize: 10
    },
    button: {
        border: '2px solid #000000',
        paddingTop: 7,
        backgroundColor: '#83EAA4',
        marginTop: 25,
        width: '167px',
        height: '52px',
        borderRadius: 6,
    }
});