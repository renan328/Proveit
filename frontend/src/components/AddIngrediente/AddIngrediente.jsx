// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
// import styles from '../../Pages/CadastroDeReceita/cadastrodereceita.module';

// function ComponenteIngredientes({  }) {

//     return (
//         <View style={styles.containerInput}>

//             {/* Colocar em componente ingredientes e passos */}
//                 {/* Input Ingredientes */}
//                 <View style={styles.defaultInput}>
//                     <Text style={styles.TextInput}>Ingredientes</Text>
//                     <TextInput style={styles.allInput} placeholder='Primeiro ingrediente'></TextInput>
//                 </View>

//                 {/* Input Quantidade */}
//                 <View style={{ flexDirection: 'row', display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
//                     <Text style={styles.TextInput}>Quantidade e Medidas</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', display: 'flex', width: '80%', justifyContent: 'flex-start' }}>
//                     <TextInput style={styles.inputQuantidade} placeholder='Qntd'></TextInput>
//                     <MultipleSelectList data={medida}
//                         setSelected={setSelected}
//                         placeholder='Medidas'
//                         searchPlaceholder='Adicionar'
//                         notFoundText='Medida não encontrada'
//                         fontFamily='Raleway_600SemiBold'
//                         boxStyles={styles.medidaInput}
//                         inputStyles={{ fontSize: '11px', color: '#505050', marginTop: 5, }}
//                         dropdownStyles={styles.medidaListaInput}
//                         dropdownTextStyles={{ fontSize: '11px', color: '#505050', marginTop: 5 }}>
//                     </MultipleSelectList>
//                 </View>

//                 {/* Adicionar ingredientes */}
//                 <TouchableOpacity>
//                     <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, marginTop: 15 }}>+ Adicionar ingrediente</Text>
//                 </TouchableOpacity>


//         </View>
//     )
// };

// function adicionarIngrediente() {
//     return (
//         <ComponenteIngredientes />
//     )
// }


// export default function AddIngredientes() {

//     return (
//         <View>
//             <ComponenteIngredientes />

//             <TouchableOpacity onPress={adicionarIngrediente}>
//                 <Text style={{ color: 'orange', fontFamily: 'Raleway_600SemiBold', fontSize: 14, marginTop: 15 }}>Salvar</Text>
//             </TouchableOpacity>
//         </View>
//     )
// };