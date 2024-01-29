import { Text } from 'react-native';
import styles from './styles.js'
import { errorColor, successColor } from '../../constants.js';

export default function Logger({ content, propStyles, center, success }) {
  return (
    <Text style={[
      styles.title, propStyles, 
      {textAlign: center ? 'center' : 'left'}, 
      {color: success ? successColor : errorColor}
    ]}>{content}</Text>
  );
}