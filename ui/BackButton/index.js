import { Pressable, Image } from 'react-native';
import styles from './styles.js'

import { backBtn } from '../../assets';

export default function BackButton({ action, propStyles, disabled }) {
  return (
    <Pressable style={[styles.backBtn, propStyles, disabled && styles.disabledBtn]} onPress={action} disabled={disabled}>
      <Image style={styles.backBtnImg} source={backBtn} />
    </Pressable>
  );
}