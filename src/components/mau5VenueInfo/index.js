import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const Mau5VenueInfo = () => {
    return (
        <div className="bck_black">
         <div className="center_wrapper">
             <div className="vn_wrapper">

                <Zoom className="vn_item">
                    <div>
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div className="vn_icon" style={{
                                    background: `url(${icon_calendar})`
                                }}></div>

                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_desc">
                                     Oct, 10, 2021 @10:00pm
                                </div>


                            </div>
                        </div>
                    </div>

                </Zoom>
                
                <Zoom className="vn_item" delay={500}>
                    <div>
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div className="vn_icon" style={{
                                    background: `url(${icon_location})`
                                }}></div>

                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                     Rebel, Toronto ON, Canada
                                </div>


                            </div>
                        </div>
                    </div>

                </Zoom>
                



             </div>
         </div>
        </div>
    )
}

export default Mau5VenueInfo;