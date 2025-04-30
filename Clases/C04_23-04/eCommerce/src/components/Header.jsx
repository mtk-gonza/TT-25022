import './../styles/Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <div className='container__navbar'>
                        <div className='logo__navbar'>
                            <img src='/eCommerce.png' alt='logo de Talento Tech' />
                        </div>
                        <div className='title__navbar'>
                            <h2>eCommerce</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}