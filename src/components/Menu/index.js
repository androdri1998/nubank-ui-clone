import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Code,
    Nav,
    NavItem,
    Navtext,
    SingOutButton,
    SingOutButtonText
} from './styles';

export default function Menu({translateY}){
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange:[0,150],
                outputRange:[0,1],
            })
          }}>
            <Code>
                <QRCode
                    value="https://rocketseat.com.br"
                    size={80}
                    bgColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"></Icon>
                    <Navtext>Me ajuda</Navtext>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"></Icon>
                    <Navtext>Perfil</Navtext>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"></Icon>
                    <Navtext>Configurar cartão</Navtext>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"></Icon>
                    <Navtext>Configurações do app</Navtext>
                </NavItem>
            </Nav>

            <SingOutButton onPress={() => {}}>
                <SingOutButtonText>SAIR DO APP</SingOutButtonText>
            </SingOutButton>
        </Container>
    );
}