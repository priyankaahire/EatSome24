import { LINKEDIN_PROFILE, PROFILE_NAME } from "../utils/constnant";

// Footer component for footer section
const FooterComponent = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="flex justify-center space-x-4">
        Created By
        <i className=""></i>
        <a
          href={LINKEDIN_PROFILE}
          target="_blank"
          title={`${PROFILE_NAME}'s Linkedin Profile`}
        >
          @{PROFILE_NAME}
        </a>
        <i className=""></i>
          {year}
          <strong>
            Eat<span>Some</span>
          </strong>
      </footer>
    );
  };
  
  export default FooterComponent;