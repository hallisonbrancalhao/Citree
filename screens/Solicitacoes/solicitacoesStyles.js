import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50
    },
    imgFiveIcon: {
        width: 43,
        height: 43,
        left: '20px',
        top: 20,
        position: 'absolute'
    },
    section_solicitacoes: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#83EAA4',
        width: '100%',
        paddingVertical: 10,
        marginTop: 40,
        marginBottom: 30
    },
    icon_solicitacoes : { 
        width: 31,
        height: 41,
        marginRight: '1rem'
    },
    solicitacoes_section__text: {
        fontSize: 16,
        fontWeight: 800,
        color: '#1E1E1E'
    },

    solicitacoes_titulo: {
        marginTop: '2rem',
        fontSize: 16,
        paddingLeft: '1rem',
        paddingBottom: 10,
        fontWeight: 800,
        color: '#1E1E1E',
        textTransform: 'uppercase',
    },
    solicitacoes_card:{
        flexDirection: 'row',
        border: '2px solid #000000',
        borderRadius: 6,
        padding: 20,
        alignItems: 'center'
    },
    solicitacoes_card__numero: {
        borderRadius: '100%',
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginRight: '1rem',
        fontWeight: 600
    },
    solicitacoes_card__endereco: {
        fontWeight: 800,
        fontSize: 13,
        textTransform: 'uppercase',
    },
    solicitacoes_card__protocolo: {
        textTransform: 'uppercase',
        fontSize: 10
    }
    
});