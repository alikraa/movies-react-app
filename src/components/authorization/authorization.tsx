import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizationCreator } from '../../store/actions';
import { AuthorizationProps } from '../../ts/interfaces';
import { userData, setData, VALUES } from '../../ts/view';
import styles from './authorization.module.css';

function Authorization({ isOpen, setIsOpen }: AuthorizationProps) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [checkData, setCheckData] = useState(true);

  const handleSubmit = () => {
    if (login === userData.userName && password === userData.userPassword) {
      setData(login, password);
      dispatch(authorizationCreator(true));
    } else {
      setCheckData(false);

      setTimeout(() => {
        setCheckData(true);
      }, VALUES.timer);
    }
  };

  return (
    <div className={styles.field__background} hidden={isOpen}>
      <div className={styles.field}>
        <h2 className={styles.field__header}>Авторизация</h2>
        <button
          className={styles.field__closeBtn}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          X
        </button>
        <form
          className={styles.field__form}
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            className={styles.field__item}
            onChange={(event) => {
              setLogin(event.target.value);
            }}
            placeholder="login"
          />
          <br />
          <input
            type="password"
            className={styles.field__item}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="password"
          />
          <br />
          <button
            type="submit"
            className={`${styles.field__item}` + ` ${styles.field__itemBtn}`}
          >
            Войти
          </button>
        </form>
        <span className={styles.field__checkData} hidden={checkData}>
          Неверный логин или пароль
        </span>
      </div>
    </div>
  );
}

export { Authorization };
