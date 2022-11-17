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
  subtitle: {
    color: '#010101',
    fontSize: 15,
    fontWeight: 400,
  },
  input: {
    marginTop: 25,
    backgroundColor: '#222222',
    width: '80%'
  },
  buttonLogin: {
    border: '2px solid #000000',
    paddingTop: 7,
    fontWeight: 'bold',
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
  link: {
    color: 'white',
    marginTop: 10,
  },
  radios: {
    display: 'inline',
  }
})