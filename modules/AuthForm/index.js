import { useState } from 'react';
import { View } from 'react-native';
import styles from './styles.js'

import PhoneField from '../../components/PhoneField';
import CodeField from '../../components/CodeField';
import RepeatBtnBlock from '../../components/RepeatBtnBlock';

import SubmitButton from '../../ui/SubmitButton';
import Logger from '../../ui/Logger';

import { confirmVerificationCode, sendVerificationCode } from './logics.js';
import TitleWithLoad from '../../components/TitleWithLoad/index.js';

export default function AuthForm() {
    const [phone, changePhone] = useState('')
    const [code, changeCode] = useState('')
    const [log, setLog] = useState('')

    const [disabledSend, setDisable] = useState(false)
    const [confirmation, setConfirmation] = useState(null)

    function removeDisable() {
      setTimeout(() => setDisable(false), 100)
    }

    function btnBackActivity() {
      changePhone('')
      setConfirmation(null) 
      setLog('') 
      changeCode('') 
      setDisable(false)
    }

    function sendCode() {
      setDisable(true)
      sendVerificationCode('+7' + phone)
        .then(confirmFunc => {
          setConfirmation(confirmFunc)
          setLog('')
        })
        .catch(err => {
          console.log(err)
          setLog('Произошла ошибка. Повторите попытку')
        })
        .finally(removeDisable)
    }

    function confirmCode(code) {
      setDisable(true)
      confirmVerificationCode(confirmation, code)
        .then(credentials => {
          console.log(credentials.user)
          setLog('Вы успешно авторизованы')
        })
        .catch(err => {
          console.log(err)
          setLog('Вы ввели неверный код')
        })
        .finally(removeDisable)
    }

    return (
        <View style={styles.authBlock}>
          <TitleWithLoad 
            content='Авторизация'
            displayLoad={disabledSend}
            displayBackBtn={confirmation}
            actionBackBtn={btnBackActivity}
          />
          {confirmation 
            ? <CodeField label='Введите шестизачный код' onChange={changeCode} value={code} submitFunction={confirmCode} />
            : <PhoneField disabled={disabledSend} label='Введите номер телефона' onChange={(_, phone) => changePhone(phone)} />}
          <Logger content={log} />
          {confirmation 
            ? <RepeatBtnBlock blured={confirmation} action={sendCode} />
            : <SubmitButton disabled={disabledSend || phone.length < 10} label='Получить код' onPress={sendCode} />}
        </View>
    );
}