import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 420);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 420);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        header: {
            backgroundColor: '#CE2829',
            padding: '20px 0',
            color: 'white',
            height: '207px',
            borderBottom: '1px solid #C20608',
        },
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '0 1rem',
            boxSizing: 'border-box',
        },
        logoImg: {
            height: '45px',
            marginBottom: '16px',
        },
        breadcrumb: {
            fontSize: '14px',
            color: 'white',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center',
        },
        breadcrumbLink: {
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link to="/">
                    <img
                        style={styles.logoImg}
                        src="/images/iteration-1-images/logo.svg"
                        alt="Teknolojik Yemekler"
                    />
                </Link>
                <nav style={styles.breadcrumb}>
                    <Link to="/" style={styles.breadcrumbLink}>Anasayfa</Link>
                    <span> - </span>
                    <span>Sipariş Oluştur</span>
                </nav>
            </div>
        </header>
    );
}

export default Header;
