import { Text } from 'react-native';
import styles from './styles.js'

export default function Title({ content, propStyles, center }) {
  return (
    <Text style={[styles.title, propStyles, {textAlign: center ? 'center' : 'left'}]}>{content}</Text>
  );
}