import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1, //Faz com que preencha toda a tela
    backgroundColor: '#187a15',
    justifyContent: "center",
    padding: 40
  },

  banner: {
    width: '100%',
    marginTop: 50,
    resizeMode: 'contain' // Para não distorcer a imagem. Não existe no CSS.
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40,    
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: '48%', //2%restantes de cada item determina o gap
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#18c413'
  },

  buttonSecondary: {
    backgroundColor: '#7159c1'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }
})

export default styles