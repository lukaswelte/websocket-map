import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './ImprintDetail.css';

class ImprintDetail extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div onClick={onClose} className="ImprintDetail-card">
          <div className="ImprintDetail-close"/>
          <div className="ImprintDetail-category">Our Legal<br />Stuffs</div>
          <div className="ImprintDetail-shortLine" />

          <div className="ImprintDetail-quote">
          <span className="bold">Information in accordance with § 5 TMG (German Telemedia Act):</span><br />
          Blackwall<br />
          Westendstrasse 49<br />
          80339 Munich<br />
          Germany<br />
          Represented by the CEO: Mr. Adrian Borsoi<br />
          <br />
          <span className="bold">Responsible for content</span><br />
          Adrian Borsoi, Chief Officer Director<br />
          <br />
          <span className="bold">Contact:</span><br />
          Telephone: +49 (0)152-90050015<br />
          E-Mail: hey@blackwall.co<br />
          <br />
          <span className="bold">VAT identification number:</span><br />
          VAT identification number according to §27 a Umsatzsteuergesetz (German Value Added Tax Act): In process<br /></div>

            <div className="ImprintDetail-Subcategory">Privacy Policy</div>
            <div className="ImprintDetail-shortLine" />

            <p>
            <span className="pink">Last updated: <span className="bold">Nov. 12th 2016</span></span><br /><br />
            <span className="bold">Blackwall</span> operates http://www.blackwall.co (the
"Site")<br />
            This page informs you of our policies regarding the collection, use and disclosure of
            Personal Information we receive from users of the Site.<br /><br />
            We use your Personal Information only for providing and improving the Site. By using the Site, you
            agree to the collection and use of information in accordance with this policy.

            <br /><br />
            <span className="bold pink">Information Collection & Use.</span>
            <div className="ImprintDetail-shortLineSecond" />

            While using our Site, we may ask you to provide us with certain personally identifiable information
            that can be used to contact or identify you. Personally identifiable information may include, but is not
            limited to your name ("Personal Information").

                        <br /><br />
                        <span className="bold pink">Log Data</span>
                        <div className="ImprintDetail-shortLineSecond" />

            Like many site operators, we collect information that your browser sends whenever you visit our Site
            ("Log Data").<br /><br />
            This Log Data may include information such as your computer's Internet Protocol ("IP") address,
            browser type, browser version, the pages of our Site that you visit, the time and date of your visit,
            the time spent on those pages and other statistics.<br /><br />
            In addition, we may use third party services such as Google Analytics that collect, monitor and
            analyze this …<br />

            <div className="Imprint-box">
            The Log Data section is for businesses that use analytics or tracking services in websites or
            apps, like Google Analytics.
            </div>

                        <br /><br />
                        <span className="bold pink">Communications</span>
                        <div className="ImprintDetail-shortLineSecond" />

            We may use your Personal Information to contact you with newsletters, marketing or promotional
            materials and other information that ...<br />

            <div className="Imprint-box">
            The Communications section is for businesses that may contact users via email (email
            newsletters) or other methods.
            </div>

                        <br /><br />
                        <span className="bold pink">Cookies</span>
                        <div className="ImprintDetail-shortLineSecond" />

            Cookies are files with small amount of data, which may include an anonymous unique identifier.
            Cookies are sent to your browser from a web site and stored on your computer's hard drive.<br /><br />

            Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may
            not be able to use some portions of our Site.

                        <br /><br />
                        <span className="bold pink">Security</span>
                        <div className="ImprintDetail-shortLineSecond" />

            The security of your Personal Information is important to us, but remember that no method of
            transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to
            use commercially acceptable means to protect your Personal Information, we cannot guarantee its
            absolute security.

            <br /><br />Still reading??? F*cking courageous... I never do that and you can't imagine how pain in the ass it was to write it... Hopefully you like it, please enjoy and thanks for reading my work :).

                        <br /><br />
                        <span className="bold pink">Changes To This Privacy Policy</span>
                        <div className="ImprintDetail-shortLineSecond" />

            This Privacy Policy is effective as of Nov. 12th 2016 and will remain in effect except with respect to any
            changes in its provisions in the future, which will be in effect immediately after being posted on this
            page.<br /><br />

            We reserve the right to update or change our Privacy Policy at any time and you should check this
            Privacy Policy periodically. Your continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of the modifications and your
            consent to abide and be bound by the modified Privacy Policy.<br /><br />

            If we make any material changes to this Privacy Policy, we will notify you either through the email
            address you have provided us, or by placing a prominent notice on our website.

                        <br /><br />
                        <span className="bold pink">Contact Us</span>
                        <div className="ImprintDetail-shortLineSecond" />

            If you have any questions about this Privacy Policy, please contact us.
            <br /><br /><br /><br /></p>
      </div>
    );
  }
}

const ImprintDetailContainer = connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(ImprintDetail);

export default ImprintDetailContainer;
