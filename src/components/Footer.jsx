import React from 'react'
import  './scss/Footer.scss'


const Footer = () => {
    const dateTime =  new Date()
    const year = dateTime.getFullYear()
  return (
    <div>
        <footer className='footerContainer'>
            <p>&copy; {year} Juan Giraldo. All rights reserved.</p>
            
        </footer>
    </div>
  )
}

export default Footer