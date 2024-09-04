import React from 'react'
import "../InvalidPaymentLink/InvalidPaymentLinks.css"
import { Container } from "react-bootstrap";

export default function InvalidPaymentLink({validationError}) {
    return (
        <>
            <div className="container InvaliedPaymentContainer ">
                <div className="CentermainContainer text-center">
                    <img src="/static/media/404-Icon.0ce4adede2ce33b6ceb1.jpg" className='Custom404Screen' alt="" />
                        <p className='mt-4'>{validationError}</p>
                    <p>Page not found. If you think you got here by mistake, and here must definitely be something <br />
                        useful, please let us know - contact@Vidtrial.com or simply go to the main page.</p>
                </div>
            </div>
        </>
    )
}
