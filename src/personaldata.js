import React from 'react';


class PersonalData extends React.Component {
    render() {
        return (

            <div>  
                <div className="resume-left">
                    <div className="resume-name">
                        <h1 className="fb">HENRY SOAZ</h1>
                        <span className="fb">
                            <h2>ART DIRECTOR</h2>
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="res-line">
                        <hr className="re-line"/> 
                    </div>
                    <div className="res-perso">
                        <div className="perinfo-head">
                              <h3 className="fb">PERSONAL INFORMATION</h3>
                        </div>
                        <div className="perinfo-detail">
                            <p>
                                Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="res-line">
                            <hr className="re-line"/> 
                    </div>
                <div className="res-experi">
                    <div className="perinfo-head">
                            <h3 className="fb">WORK EXPERIENCE</h3>
                    </div>  
                    <div className="res-hitech">
                        <span className="exp-comp">Hi-Tech LTD.</span>
                        <span className="exp-field">GRAPHICS DESIGNER</span>
                        <span className="exp-date">03 FEB,2010 - 10 OCT 2014</span>
                        <div>
                              <span className="exp-cont">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                    <div className="res-hitech">
                        <span className="exp-comp">BINARY 01 CO.</span>
                        <span className="exp-field">GRAPHICS DESIGNER</span>
                        <span className="exp-date">03 FEB,2010 - 10 OCT 2014</span>
                        <div>
                                <span className="exp-cont">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                </div>

                <div class="education">
                <div class="perinfo-head">
                    <h3 class="fb">EDUCATION</h3>
                </div>
                <div class="res-hitech">
                    <span class="exp-comp">ART SCHOOL</span>
                    <span class="exp-field">CORPORATE DESIGN</span>
                    <span class="exp-date">03 FEB,2010 - 10 OCT 2014</span>
                    <div>
                        <span class="exp-cont">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
                <div class="res-hitech">
                    <span class="exp-comp">DESIGN UNIVERSITY</span>
                    <span class="exp-field">PRODUCT DESIGN</span>
                    <span class="exp-date">03 FEB,2014 - 10 OCT 2016</span>
                    <div>
                        <span class="exp-cont">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
    
            </div>
            </div>
        </div>
        );
    }
}

export default PersonalData;