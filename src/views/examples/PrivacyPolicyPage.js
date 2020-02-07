import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import PrivacyPolicyPageHeader from "components/Headers/PrivacyPolicyPageHeader.js";

function PrivacyPolicyPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <PrivacyPolicyPageHeader />
        <div className="section section-contact-us text-center">
          <Container>
            <h3 className="title">1. Personally Identifiable Information We Collect and How We Use It.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>You can generally visit the Site without revealing any personally identifiable information about yourself. We do not collect personal information from our Site visitors without the Site visitor providing us with this information as set forth in this Privacy Policy.</p>
              <p>If you request to receive company or product information, or request information about specific Services, or provide comments about Services, you will be asked to provide contact information so that we can complete your request. We use this Site Information to fulfill your request. We may also use this Site Information to send you additional information about our Services or Products on the Site that you may be interested in.</p>
              <p>Some of the Services require that you become a registered user and create a user account. This will require that you provide certain personally identifiable information, that may include (but not be limited to) your and/or your company’s name, e-mail address, as well as telephone and address information.</p>
              <p>You allow us to use this personally identifiable Site Information to register you to use the Services, buy Products, and otherwise provide you with the Services; verify your authority to enter the Site and access the Products and Services; notify you of updates; improve the content and general administration of the Site and the Services; provide you with notices regarding the Services and other services that you have purchased or may wish to purchase in the future.</p>
				
            </Row>

            <h3 className="title">2. Other Information We Collect and How We Use It.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>Rebeloper may also automatically collect and analyze Site Information about your general usage of the Site, Services and Courses. We might track your usage patterns to see what features of the Site, Services and Courses you commonly use, Site traffic volume, frequency of visits, type and time of transactions, type of browser, browser language, IP address and operating system, and statistical information about how you use the Services and Courses. We only collect, track and analyze such Site Information in an aggregate manner that does not personally identify you. This aggregate data may be used to assist us in operating the Site and the Services.</p>
            </Row>

            <h3 className="title">3. Children.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>We recognize the privacy interests of children and we encourage parents and guardians to take an active role in their children’s online activities and interests. This Site is not intended for children under the age of 13 and we endeavor not to collect any personally identifiable information from children under the age of 13. Rebeloper targets its Services and this Site to adults and not to children under 13.</p>
				
            </Row>

            <h3 className="title">4. Disclosure of Information.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>We will share your personally identifiable Site Information with third parties only in the ways that are described in this privacy policy. These include, but are not limited to, sharing Site Information with service providers to allow them to fulfill your requests. We do not sell your personal information to third parties. Please refer to the sections above on personally identifiable and other Product Information for how Product Information may be used.</p>
              <p>We may also disclose your personally identifiable information: (a) if we are required to do so by law, regulation or other government authority or otherwise in cooperation with an investigation of a governmental authority, (b) to enforce these Terms of Use, or (c) to protect the safety of Users of our Site and our Services and Products. In addition, we may transfer your personally identifiable information to a successor entity upon a merger, consolidation or other corporate reorganization.</p>
				
            </Row>

            <h3 className="title">5. Data Retention.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>We retain Site Information and the personal data we process on behalf of Users for as long as needed to provide the Services. We will retain and use this personal Site Information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements with Users, and/or the period required by laws in applicable jurisdictions. Please see the sections above for how Product Information may be used.</p>
				
            </Row>

            <h3 className="title">6. Updating, Correcting and Deleting Your Information; Opt-out.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>If you believe that AntonioAppDev has incorrect Site Information or Product Information that was provided as part of the Services, you may use the Services to correct, amend, or delete that information. </p>
              <p>From time to time, we may send you emails about Products or new or modified Services that we believe might interest you. If you wish to opt-out of receiving these materials, you may follow the unsubscribe procedure provided in the email.</p>
				
            </Row>

            <h3 className="title">7. Security.</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>The security of your personal information is important to us. Rebeloper employs procedural and technological measures to protect your personally identifiable information. These measures are reasonably designed to help protect your personally identifiable information from loss, unauthorized access, disclosure, alteration or destruction. We may use software, secure socket layer technology (SSL) encryption, password protection, firewalls, internal restrictions and other security measures to help prevent unauthorized access to your personally identifiable information. However, Rebeloper cannot guarantee that unauthorized third parties will never be able to defeat these measures or use your personally identifiable information for improper purposes. Therefore, you should be aware that when you voluntarily display or distribute personally identifiable information, that information could be collected and used by others. Rebeloper is not responsible for the unauthorized use by third parties of information you post or otherwise make available publicly.</p>
              				
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
