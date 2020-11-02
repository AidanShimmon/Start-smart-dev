import React from 'react'
import ContactImg from '../assets/emailCampaign.svg'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            
            <div className="contact__content">

                <h2 className="contact__content__title">Contact</h2>

                <div className="contact__content__form">
                    <form method="post" netlify-honeypot="bot-field" netlify data-netlify="true" name="contact" className="form">
                        <div className="form__name">
                            <label for="name">Name* </label>
                            <input type="text" name="name" id="name" required/>
                        </div>
                        <div className="form__email">
                            <label for="email">Email* </label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="form__message">
                            <label for="message">Message* </label>
                            <textarea rows="5" name="message" id="message" required/>
                        </div>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form__submit">
                            <input className="button" type="submit" value="Send message"/>
                        </div>
                    </form>
                </div>

                <div className="contact__content__img">
                    <ContactImg/>
                </div>
            </div>
        </section>
    )
}

export default Contact