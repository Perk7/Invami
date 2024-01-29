import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles.js'

import Title from '../../ui/Title';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
        <View><StatusBar style='auto' /></View>
        <Title content={title} propStyles={styles.headerTitle} center />
    </View>
  );
}