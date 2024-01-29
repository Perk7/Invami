import styles from './styles.js'

import GrayView from '../../modules/GrayView/index.js';
import AuthForm from '../../modules/AuthForm';

export default function Authenticate() {
    return (
        <GrayView title='Invami' center>
          <AuthForm />
        </GrayView>
    );
}