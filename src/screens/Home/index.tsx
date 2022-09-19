import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantInput, setParticipantInput] = useState("");

  function handleParticipantAdd() {
    if(participants.includes(participantInput)){
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }

    if(participantInput.length === 0){
      return Alert.alert('Nome vazio', 'Insira o nome do participante')
    }

    setParticipants(prevState => [...prevState, participantInput]);
    setParticipantInput("");
  }

  function handleParticipantDelete(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          const newParticipantList = participants.filter(item => item !== name)
          setParticipants(newParticipantList)
        }
      },
      {
        text: 'Não',
        style:'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          value={participantInput}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantInput}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => String(Math.random())}
        renderItem={({item}) => (
          <Participant key={Math.random()} name={item} onRemove={() => handleParticipantDelete(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Não tem usuários na lista, 
            adicione novos usuários para aparecer aqui
          </Text>
        )}
      />
      
    </View>
  );
}