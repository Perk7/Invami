import { Pressable, Image, Text } from 'react-native';
import styles from './styles.js'

import { showBtn, hideBtn } from '../../assets';

export default function HideSwitchBtn({ visibility, action }) {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Image
        source={visibility ? showBtn : hideBtn}
        style={styles.buttonImage}
        resizeMode={'cover'}
      />
    </Pressable>
  );
}