import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Title, Form, Input, Submit, List } from './styles';

import Repository from '~/components/Repository';

export default function Main() {
  return (
    <Container >
      <Title>Repositórios</Title>

      <Form>
        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
        />

        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPErsistTaps="handled"
        data={[
          { 
            id: 1,
            name: "Katz Aplication",
            description: "APlicação desenvolvida para um doutorado de uma aluna da Faculdade de Enfermagem, será um projeto bacana de se fazer.",
            stars: 1234,
            forks: 133
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
            <Repository data={item} />
        )}
      />
    </Container>
  );
}
