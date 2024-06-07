import { APPLICATION_LOGO, LINKEDIN_PROFILE, PROFILE_NAME } from "./Common/constnant";

// Footer component for footer section
const FooterComponent = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="flex justify-center space-x-4 bottom-0 py-3 px-5 shadow-lg m-3">
        Created By
        <a
          href={LINKEDIN_PROFILE}
          target="_blank"
          title={`${PROFILE_NAME}'s Linkedin Profile`}
        >
          @{PROFILE_NAME}
        </a>{""}
          {year}
          <strong>
            {APPLICATION_LOGO}
          </strong>
      </footer>
    );
  };
  
  export default FooterComponent;