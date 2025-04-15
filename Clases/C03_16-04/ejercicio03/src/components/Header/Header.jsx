import './Header.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <div className='container__navbar'>
                        <div className='logo__navbar'>
                            <img src='https://cdn.gamma.app/5k42ay5jcl12uau/42b017de177a407ca4e5878b0d21b5c8/original/png-tri-logos_negro-1.png' alt='logo de Talento Tech' />
                        </div>
                        <div className='title__navbar'>
                            <h2>Talento Tech</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};