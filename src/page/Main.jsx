import React from 'react'
import { Link } from 'react-router-dom'
import SmsVerificationComponent from '../components/VerificationPhone'
import './mainPage.css'

function Main() {
  return (
    <div>
      <section className='main-block fields'>
            <div className='wrapper_main-block'>
                <h1>Nail – один сервис, много возможностей.</h1>
                <p>Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты.</p>
                <div className='block_registraion'>
                    <Link className = 'block_button1' to = '/'>Мастер</Link>
                    <p className='block_registraion-text'>Кто вы?</p>
                    <Link className='block_button2' to = '/'>Клиент</Link>
                </div>
            </div>
      </section>
      <section className='main-block2'>
            <h2></h2>
            <div className='wrapper_main-block2'>
                <SmsVerificationComponent/>
            </div>
      </section>
      <section className='main-block3'>
            <div className='wrapper_main-block3'></div>
      </section>
    </div>
  )
}

export default Main
