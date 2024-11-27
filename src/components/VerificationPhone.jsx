import React, { useState } from 'react';
import axios from 'axios'; // Для отправки HTTP запросов

function SmsVerificationComponent() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [error, setError] = useState(null);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSmsCodeChange = (e) => {
    setSmsCode(e.target.value);
  };

  const sendSmsCode = async () => {
    try {
      const response = await axios.post('/your-api-endpoint/send-sms', {
        phoneNumber,
      });
      setIsCodeSent(true);
      setError(null);
    } catch (error) {
      setError('Ошибка при отправке SMS. Попробуйте позже.');
      console.error('Ошибка при отправке SMS:', error);
    }
  };

  const verifySmsCode = async () => {
    try {
      const response = await axios.post('/your-api-endpoint/verify-sms', {
        phoneNumber,
        smsCode,
      });
      // Если код верный, выполните необходимое действие (например, перенаправление)
      console.log('Код подтвержден успешно!', response.data);
    } catch (error) {
      setError('Неверный код. Попробуйте снова.');
      console.error('Ошибка при проверке кода:', error);
    }
  };

  return (
    <div>
      <h2>Верификация по SMS</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isCodeSent && (
        <div>
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button onClick={sendSmsCode}>Отправить SMS</button>
        </div>
      )}
      {isCodeSent && (
        <div>
          <p>Введите код из SMS:</p>
          <input
            type="text"
            value={smsCode}
            onChange={handleSmsCodeChange}
          />
          <button onClick={verifySmsCode}>Подтвердить</button>
        </div>
      )}
    </div>
  );
}

export default SmsVerificationComponent;