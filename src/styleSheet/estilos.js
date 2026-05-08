import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  area_fundo: { flex: 1, backgroundColor: '#87CEEB' }, // Azul céu do fundo
  area_cabecalho: { alignItems: 'center', padding: 20, marginTop: 40 },
  img_cabecalho: { width: 100, height: 100 },
  titulo_cabecalho: { fontSize: 24, fontWeight: 'bold', color: '#800000' },
  area_conteudo: { flex: 1, padding: 20, margin: 15, borderRadius: 20 },
  texto_informativo: { fontSize: 16, textAlign: 'justify', marginBottom: 20 },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 15 },
  botao: { backgroundColor: 'maroon', padding: 15, borderRadius: 50, width: 80, height: 80, justifyContent: 'center', alignSelf: 'center' },
  texto_botao: { color: 'yellow', textAlign: 'center', fontWeight: 'bold', fontSize: 10 },
  area_rodape: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#87CEEB' },
  texto_rodape: { color: '#333' }
});