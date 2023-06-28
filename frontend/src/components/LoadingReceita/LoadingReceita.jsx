import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useColorScheme, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export function LoadingReceita({ message }) {

    const scheme = useColorScheme()
    const styles = scheme === 'dark' ? stylesDark : stylesLight;

    const frases = [
        'Aproveite ao máximo',
        'Reduza o desperdício',
        'Crie pratos sustentáveis',
        'Dê uma nova vida aos ingredientes',
        'Cozinha consciente e deliciosa',
        'Experimente novas possibilidades culinárias',
        'Desperte seu lado criativo na cozinha',
        'Transforme restos em refeições deliciosas',
        'Faça uma alimentação mais sustentável',
        'Inove com ingredientes inaproveitados',
        'Aproveite os talos e cascas em sopas e caldos',
        'Transforme frutas maduras em bebidas batidas e sorvetes',
        'Utilize sobras de arroz para fazer bolinhos ou fritadas',
        'Faça molhos e temperos caseiros com ervas e especiarias',
        'Congele alimentos antes de estragarem para uso posterior',
        'Reaproveite pães amanhecidos em receitas de pudim ou rabanada',
        'Use as folhas dos vegetais para preparar sucos verdes',
        'Faça compostagem com os resíduos orgânicos',
        'Prepare marmitas com as sobras das refeições para economizar',
        'Aproveite as cascas de frutas cítricas para fazer chás e aromatizar água',
        'Use uma faca afiada para cortar ingredientes com facilidade.',
        'Leia a receita antes de começar a cozinhar.',
        'Organize os ingredientes antes de começar a cozinhar.',
        'Mantenha a cozinha limpa e organizada durante o processo.',
        'Experimente novos temperos e ingredientes.',
        'Aproveite sobras de alimentos.',
        'Tempere os alimentos com antecedência.',
        'Experimente técnicas de cozimento diferentes.',
        'Não tenha medo de cometer erros.'
    ];

    const [randomFrase, setRandomFrase] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * frases.length);
        setRandomFrase(frases[randomIndex]);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.frase}>{randomFrase}</Text>
            <LottieView
                source={require('../../assets/lottie/recipesBook.json')} // Caminho para o arquivo JSON do Lottie
                autoPlay
                loop
                style={{ height: 250, alignSelf: 'center' }}
            />
        </View>
    );
};

const stylesLight = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    message: {
        marginTop: 16,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Raleway_500Medium',
    },

    frase: {
        marginTop: 16,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center'
    }
});

const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    indicatorColor: '#fff',
    message: {
        marginTop: 16,
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Raleway_500Medium',
    },
    frase: {
        marginTop: 16,
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center'
    }
});
