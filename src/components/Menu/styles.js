import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;
    
export const Code = styled.View`
    max-width:100px;
    overflow:hidden;
    background:#fff;
    align-self:center;
    padding:10px;
`;

export const Nav=styled.View`
    margin-top:30px;
    align-self:stretch;
    border-top-width:${StyleSheet.hairlineWidth}px;
    border-top-color:rgba(255,255,255,0.8);
`;

export const NavItem=styled.View`
    flex-direction:row;
    align-items:center;
    padding:12px 0;
    border-bottom-width:${StyleSheet.hairlineWidth}px;
    border-bottom-color:rgba(255,255,255,0.8);
`;

export const Navtext=styled.Text`
    font-size:15px;
    color:#fff;
    margin-left:20px;
`;

export const SingOutButton=styled.TouchableOpacity`
    border-width:${StyleSheet.hairlineWidth}px;
    border-color:rgba(255,255,255,0.8);
    border-radius:4px;
    justify-content:center;
    align-items:center;
    padding:12px;
    margin-top:15px;
`;

export const SingOutButtonText=styled.Text`
    font-size:13px;
    color:#fff;
    font-weight:bold;
`;

