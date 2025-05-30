import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: '#CE2829',
        padding: '20px 0',
        color: 'white',
        height: '100px',
    },
    container: {
        width: '90%',
        maxWidth: '1900px',
        margin: '0 auto',
    },
    logoImg: {
        height: '40px',
        display: 'block',
        margin: '0 auto',

    },
    breadcrumb: {
        fontSize: '14px',
        color: 'white',
        marginTop: '20px',
        gap: '10px',
        padding: '10px'
    },
    breadcrumbLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginLeft: '430px',

    },
};

function Header() {
    return (
        <div>
            <header className="header" style={styles.header}>
                <div className="container" style={styles.container}>
                    <Link to="/" className="logo-img" >
                        <img
                            style={styles.logoImg}
                            src="/images/iteration-1-images/logo.svg"
                            alt="Teknolojik Yemekler"
                            className="logo-img"
                        />
                    </Link>

                    <nav className="breadcrumb" style={styles.breadcrumb}>
                        <Link to="/" style={styles.breadcrumbLink}>Anasayfa</Link> <span> - </span>{" "}
                        <span>Sipariş Oluştur</span>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
