import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              Accomplished Mobile Application Developer who is able to create mobile applications for every mobile software operating system platform. Adept at developing apps based on customer specifications recommending application changes to make more efficient programs and upgrading existing apps to make them more useful. Specializes in corporate and industrial applications.
            </h5>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
