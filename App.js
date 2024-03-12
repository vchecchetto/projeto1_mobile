import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const pessoa = { nome: 'Vinicius', idade: 30, cidade: 'Rio de Janeiro', avatar: require('./assets/img/batman.png')};

function SaudacaoPersonalizada({ saudacao = "Olá", nome = "Usuário", style }) {
    return (
        <View style={[styles.saudacaoContainer, style]}>
            <Text>{saudacao}, {nome}</Text>
        </View>
    );
}

function getHora() {
  const horaAtual = new Date().getHours();

  if (horaAtual >= 5 && horaAtual < 12) {
    return 'Bom dia';
  } else if (horaAtual >= 12 && horaAtual < 18){
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}

const Saudacao = ({ nome }) => {
    return (
        <View style={styles.container}>
            <Text>Olá, {nome}!</Text>
        </View>
    );
};

const ExibirPessoa = ({ nome, idade, cidade }) => {
    return (
        <View style={styles.container}>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Cidade: {cidade}</Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.appContainer}>
            {/* Teste */}
            <SaudacaoPersonalizada saudacao='Bom dia' nome={pessoa.nome} style={styles.SaudacaoPersonalizada} />
            <Saudacao nome={pessoa.nome} />
            <ExibirPessoa {...pessoa} />
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saudacaoContainer: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
    },
    SaudacaoPersonalizada: {
        backgroundColor: 'green',
        padding: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
