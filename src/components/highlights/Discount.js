import React, {useState, useEffect} from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utilities/MyButton';

const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0);

    const percentage = () => {
        if(start < end) {
            setStart(prevCount => prevCount + 1 )
        }
    }

    useEffect(() => {
        if( start > 0 && start < 30) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1 )
            },30)
        }
    },[start])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange= { (inView) => {
                        if(inView) {
                            percentage()
                        }
                    }}
                
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right={true}>
                    <div className="discount_description">
                        <h3>Purchase Ticket before September 15th</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque dolorem inventore provident repellat quaerat accusamus neque unde illum deserunt. Maiores consectetur odio qui provident illum, perspiciatis animi sed soluta.
                        </p>
                        <MyButton
                        text="Buy Ticket"
                        link= "https://www.ticketweb.ca/event/deadmau5-rebel-tickets/11250445?pl=ink"
                        size= "small"
                        style={{
                            background: "#ffa800",
                            color: "#ffffff"
                        }}
                        iconTicket={true}
                        />
                    </div>

                </Slide>
            </div>
        </div>
    )
}

export default Discount;