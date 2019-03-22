import React from 'react';
import PersonalData from './personaldata.js';
import './App';
import Pic from './design.jpg';

let style = {fontSize:'20px',color:'#00a3cc'};
let style1={fontsize:'24px'};
class RightData extends React.Component {
    render() {
        return (
            <div>
				<div className="resume-right">
					<div className="resume-image">
						<img src={Pic} alt="henry"/>
					</div>

					<div className="contact">
						<div className="numb">
							<div className="cont-left">
								<i className='fas fa-phone-square' style={style1}></i>
							</div>
							<div className="cont-right">
								<span>008 647 548 7656</span>
							</div>
						</div>
						<div className="web">
							<div className="cont-left">
								<i className='fas fa-globe' style={style1}></i>
							</div>
							<div className="cont-right">www.ownsite.com
							</div>
						</div>
						<div className="email">
							<div className="cont-left">
								<i className='fas fa-envelope' style={style1}></i>
							</div>
							<div className="cont-right">contact@gmail.com
							</div>
						</div>
					</div>

				<div className="skill">
					<div className="skill-head">
						<h3>SKILLS</h3>
					</div>
					<div>
						<table>
								<tr>
									<td>WEB DESIGN</td>
									<td>
										<i className="material-icons" style={style}>star</i>
										<i className="material-icons" style={style}>star</i>
										<i className="material-icons" style={style}>star</i>
										<i className="material-icons" style={style}>star</i>
									</td>
								</tr>
								<tr>
									<td>GRAPHIC DESIGN</td>
									<td>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
									</td>
								</tr>
								<tr>
									<td>UI DESIGN</td>
									<td>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
									</td>
								</tr>
								<tr>
									<td>DRAWING DESIGN</td>
									<td>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
									</td>
								</tr>
								<tr>
									<td>ANIMATION DESIGN</td>
									<td>
										<i className="material-icons" style={style}>star
										</i>
										<i className="material-icons" style={style}>star
										</i>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div>
						<hr className="hrwhite"/>
					</div>
					<div className="hobbies">
						<div className="hob-head">
							<h3>HOBBIES</h3>
						</div>
						<div className="hob-deta">
							<span>SOCCER,FOOTBALL,WRITING,MUSIC</span>
						</div>
					</div>
					<div >
						<hr className="hrwhite"/>
					</div>

					{/*addresss*/}

					<div className="address">
						<div className="add-head">
							<h3>COMPANY CONTACT</h3>
						</div>
						<div className="add-deta">
							<span>ADDRESS LINE, EXAMPLE <br/>  STREET, 123 B/2</span><br/>
							
							<span>008 647 548 7656</span><br/>
							<span>www.ownsite.com</span><br/>
							<span>contact@gmail.com</span><br/>
							<div className="social">
								<table cellpadding="8px">
									<tr>
										<td>
											<i className="fa fa-facebook-f" style={style1}>
												
											</i>
										</td>
										<td>fb/soaz</td>
									</tr>
									<tr>
										<td>
											<i className="fa fa-google-plus-circle" style={style1}></i>
										</td>
										<td>gplus.soaz</td>
									</tr>
									<tr>
										<td>
											<i className="fa fa-whatsapp" style={style1}>
												
											</i>
										</td>
										<td>viber.soaz</td>

									</tr>
								</table>
							</div>
						</div>
					</div>
			</div>
        </div>

        );
    }
}

export default RightData;