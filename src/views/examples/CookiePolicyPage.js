import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import CookiePolicyHeader from "components/Headers/CookiePolicyHeader.js";

function CookiePolicyPage() {
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
        <CookiePolicyHeader />
        <div className="section section-contact-us text-center">
          <Container>
            <h3 className="title">How We Use Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>Like many websites we use cookies to store and then retrieve small bits of information on your computer when you visit. This information is used to make the site work as you expect it to. It is not personally identifiable to you, but it can be used to give you a more personalised web experience.</p>
              <p>Some of the information stored is put there by other companies whose software we have added to the site, and this can also impact your experience of other websites you may visit after leaving ours.</p>
              <p>If you continue to use this site without taking action to prevent the storage of this information, you are effectively agreeing to this use.</p>
              <p>If you want to learn more about the general uses of cookies, including how to stop them being stored by your computer, please visit Cookiepedia – all about cookies.</p>
              <p>Below is a list of the different types of cookies used on this site, and an explanation of what they are used for. If you would like any more information, please get in touch.</p>
				
            </Row>

            <h3 className="title">Strictly Necessary Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>These cookies are necessary for the website to function. They are usually only set in response to actions made by you which amount to a request for services, such as logging in or filling in forms.</p>
            </Row>

            <h3 className="title">Performance Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
              <p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>
				
            </Row>

            <h3 className="title">Functionality Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.</p>
              <p>If you do not allow these cookies then some or all of these services may not function properly.</p>
				
            </Row>

            <h3 className="title">Targeting Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
				
            </Row>

            <h3 className="title">Other Cookies</h3>
            <Row style={{ paddingTop: '20px' }}>
              <p>The following cookies are also set by our site, however their purpose has not yet been identified. We are conducting research into these cookies and will update this page as soon as possible.</p>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CookiePolicyPage;
