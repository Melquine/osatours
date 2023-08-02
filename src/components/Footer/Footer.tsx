import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className="container-md">
                <div className="row container__row">
                    <div className="row__section col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="section__card">
                            <h3>SIGN UP FOR BOOKINGTOUR CR NEWSLETTER</h3>
                            <form className='card__form'>
                                <input type="email" name="email" placeholder="Your email address" /><br />
                                <a className='form__button' href="mailto:support@enterprisetest.com?subject=Noticias &body=Quiero recibir lo nuevo">SUBSCRIBE</a>
                            </form>
                        </div>
                    </div>
                    <div className="row__section col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="section__card">
                            <h4>SUPPORT</h4>
                            <a className='card__link' href='/faqs'>FAQs</a>
                            <a className='card__link' href='#location'>LOCATION</a>
                            <a className='card__link' href='#'>TERMS AND CONTIDIONS</a>
                            <a className='card__link' href='#'>RETURNS & EXCHANGES</a>
                        </div>
                    </div>
                    <div className="row__section col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="section__card">
                            <h4>INFO</h4>
                            <a className='card__link' href="/about">ABOUT US</a>
                            <a className='card__link' href="/contact">CONTACT US</a>
                            <a className='card__link' href="./quienessomos.html">FACEBOOK</a>
                            <a className='card__link' href="./contacto.html">INSTAGRAM</a>
                        </div>
                    </div>
                    <div className="row__section col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className='section__card'>
                            <img className='card__img card__img--cards' src='/img/credit-cards.svg' />
                        </div>
                    </div>
                    
                    <div className="row__section row__section--copy col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className='section__card section__card--copy'>
                            <p className='card__text card__text--copy'>Copyright © 2023 BookingTour CR</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer