import React from 'react';
import MyButton from '../utilities/MyButton';
import { Zoom } from 'react-awesome-reveal';


const Pricing = () => {

    const priceState = {
        price:[100,150,200],
        position:['Balcony', 'Medium', 'Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            ' fugiat nulla pariatur exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['https://www.ticketsonsale.com/tickets/deadmau5-(19plus-event)-rebel-on-toronto-10-10-2021-3683127', 'https://www.ticketsonsale.com/tickets/deadmau5-(19plus-event)-rebel-on-toronto-10-10-2021-3683127', 'https://secure.ticketsonsale.com/checkout/checkout3.action?productionId=3683127&ticketId=VB3519945818&wsUser=909&wsVar=ticketsonsale.com&affiliateRedirectURL=https%3A%2F%2Fwww.ticketsonsale.com%2Ftickets%2Fdeadmau5-%2819plus-event%29-rebel-on-toronto-10-10-2021-3683127&showAllInPricing=false&quantity=2'],
        delay:[500,0,500]
    }
const showBoxes = () => (
    priceState.price.map((box, i) => (
        <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${priceState.price[i]}</span>
                    <span>{priceState.position[i]}</span>
                </div>
                <div className="pricing_description">
                    {priceState.desc[i]}
                </div>
                <div className="pricing_buttons">
                    <MyButton 
                        text="Purchase"
                        
                        style={{
                            
                            color: "#ffffff"
                        }}
                        link={priceState.linkto[i]}
                    />
                </div>
            </div>
        </Zoom>
    ))
)
    return (
       <div className="bck_black">
           <div className="center_wrapper pricing_section">
               <h2>Pricing</h2>

               <div className="pricing_wrapper">
                   {showBoxes()}
               </div>
           </div>
       </div>
    )

}

export default Pricing;