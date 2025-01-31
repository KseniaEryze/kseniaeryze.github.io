import React from 'react'
import { Link } from 'react-router-dom'
import FooterMasterList from '../components/MasterList/FooterMasterList';
import FilterOptions from '../components/MasterList/FilterOptions';
import MasterList from '../components/MasterList/MasterList';
import Statistics from '../components/MasterList/Statistics';
import './mainPage.css'
import masterPhoto from '../assets/lake_mountain_tree_36589_2650x1600.jpg'

function Main() {
  const roleAuth = {
    master: "мастер",
    client: "клиент"
};
const masters = [
  {
      id: 1,
      name: ['Маргарита', <br/>, 'Чернышова'],
      rating: "5.0",
      reviews: 3,
      description: "Маникюр с гель-лаком, комбинированный маникюр, более месяца назад, Фрунзенский.",
      view:"Вид маникюра: комбинированный.",
      coverage:"Покрытие: гель-лак.",
      design: "Дизайн: однотонное покрытие.Что нужно ещё: снятие гель-лака.",
      image: masterPhoto
  },
  {
    id: 2,
    name: ['Маргарита', <br/>, 'Чернышова'],
    rating: "4.8",
    reviews: 5,
    description: "Маникюр с гель-лаком, комбинированный маникюр, более месяца назад, Фрунзенский.",
    view:"Вид маникюра: комбинированный.",
    coverage:"Покрытие: гель-лак.",
    design: "Дизайн: однотонное покрытие.Что нужно ещё: снятие гель-лака.",
    image: masterPhoto
}
  // Дополните других мастеров
];
  return (
    <div>
      <section className='main-block fields'>
            <div className='wrapper_main-block'>
                <h1>Nail – один сервис, много возможностей.</h1>
                <p>Онлайн-запись, напоминания клиентам и ведение клиентской базы для профессионалов индустрии красоты.</p>
                <div className='block_registraion'>
                    <Link className='block_button1' to={`/register?role=${roleAuth.master}`}>Мастер</Link>
                    <p className='block_registraion-text'>Кто вы?</p>
                    <Link className='block_button2' to={`/register?role=${roleAuth.client}`}>Клиент</Link>
                </div>
            </div>
      </section>
     
      <section className="master-search">
         
      </section>
      <section className="master-search fields">
            <h2>Чтобы записаться, заполните детали заказа:</h2>
            
            <FilterOptions/>
            <MasterList masters={masters} />
            <Statistics/>
            <FooterMasterList/>
        </section>
    </div>
  )
}

export default Main
