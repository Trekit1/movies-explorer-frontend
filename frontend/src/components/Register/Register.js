import Form from "../Form/Form";

function Register() {
    const toLogin = '/signin'
    return(
        <Form title='Добро пожаловать!' buttonName='Зарегистрироваться' question ='Уже зарегистрированы?' linkName='Войти' to={toLogin}>
            <>
            <p className='form__input-name'>Имя</p>
            <input className='form__input form__input_name' minLength="2" maxLength="40" required></input>
            </>
        </Form>
    )
}

export default Register