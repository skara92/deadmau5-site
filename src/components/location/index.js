import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.346111721359!2d-79.35703218422293!3d43.64096686123921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb1ed1b7ec7f%3A0x12eae65b79171bda!2sRebel!5e0!3m2!1sen!2sca!4v1629992903875!5m2!1sen!2sca" width="100%" height="500px"  allowfullscreen="" loading="lazy"></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Location;