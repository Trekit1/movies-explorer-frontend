import Form from "../Form/Form";

function Login() {
    const toRegister = '/signup'
    return(
        <Form title='Рады видеть!' buttonName='Войти' question ='Еще не зарегистрированы?' linkName='Регистрация' to={toRegister}/>
    )
}

export default Login