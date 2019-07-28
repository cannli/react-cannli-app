import React from 'react'
import logoImg from '../../assets/img/logo.jpg'
import './logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} className="logoImg" alt/>
            </div>
        )
    }
}

export default Logo;