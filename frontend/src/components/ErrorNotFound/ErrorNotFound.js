import './ErrorNotFound.css';

function ErrorNotFound() {
    return(
        <div className='error'>
            <h1 className='error__code'>404</h1>
            <p className='error__message'>Страница не найдена</p>
            <p className='error__back'>Назад</p>
        </div>
    )
}

export default ErrorNotFound