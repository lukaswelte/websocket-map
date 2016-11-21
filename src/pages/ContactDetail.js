import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './ContactDetail.css';

class ContactDetail extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="ContactDetail-card">
          <div className="ContactDetail-close" onClick={onClose}/>
          <div className="ContactDetail-category">How to<br />Contact us?</div>
          <div className="ContactDetail-shortLine" />

          <div className="ContactDetail-quote">
          <span className="bold">Awesome, let&#39;s talk together!</span><br />
          We are very glad to have you on blackwall.<br/>Our tribe is working very hard to provide you the best service suiting your life journey. Feel free to talk to us, we are really looking forward.
          </div>

          <div className="ContactDetail-Subcategory">Something to say?</div>
          <div className="ContactDetail-shortLine" />
          <div className="ContactDetail-quote">
          Mainly we are accessible by email, about every topic. Just push us an email by clicking here.
          <a className="ContactDetail-email" href="mailto:hey@blackwall.co">hey@blackwall.co</a>
          </div>


            <div className="ContactDetail-Subcategory">Our Social Medias</div>
            <div className="ContactDetail-shortLine" />

            <div className="ContactDetail-quote">
            Of course we are there!<br/>
            Don&#39;t hesitate to follow, share or contribute.
            </div>

            <ul className="ContactDetail-socialMedia">
              <li className="ContactDetail-facebook"><div className="ContactDetail-socialMedia-name">Facebook</div></li>
              <li className="ContactDetail-twitter"><div className="ContactDetail-socialMedia-name">Twitter</div></li>
              <li className="ContactDetail-linkedin"><div className="ContactDetail-socialMedia-name">LinkedIn</div></li>
              <li style={{backgroundColor:"white"}}></li>
              <li className="ContactDetail-github"><div className="ContactDetail-socialMedia-name">Github</div></li>
            </ul>
      </div>
    );
  }
}

const ContactDetailContainer = connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(ContactDetail);

export default ContactDetailContainer;
