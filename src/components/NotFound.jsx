import React from 'react'

function NotFound() {
    console.log("404-sayfa bulunamadı.");
    return (
        <div style={{ textAlign: "center", marginTop: "4rem", color: "red" }}>
            <h1>404</h1>
            <h2>Sayfa bulunamadı</h2>
            <p>Aradığınız sayfa mevcut değil.</p>
        </div>
    )
}

export default NotFound
