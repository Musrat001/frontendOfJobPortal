import { FiBriefcase, FiUsers, FiShield, FiClock } from "react-icons/fi";
import FooterBox from "./FooterBox";
function Footer() {
  return (
    <div>
      <div className="footerMainContainer">
        <FooterBox
          icon={FiBriefcase}
          title="Thousand of job"
          des="Find the right fit for you"
        />
        <FooterBox
          icon={FiUsers}
          title="Top Companies"
          des="Apply to leading companies"
        />
        <FooterBox
          icon={FiShield}
          title="Trusted Platform"
          des="Secure and Reliable"
        />
        <FooterBox
          icon={FiClock}
          title="Easy and Fast"
          des="Quick application process"
        />
      </div>
    </div>
  );
}

export default Footer;
