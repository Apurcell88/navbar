import { ReactComponent as Capterra } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Capterra Logo.svg';
import { ReactComponent as AlternativeTo } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/AlternativeTo Logo.svg';
import HeroImage from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Hero Image.png';

const LandingPage = () => {
  return (
    <section className="landing--container">
      <div className="landing--info">
        <h1 className='landing--title'>Ondeck is your remote <span>conference calling tool</span></h1>
        <p>Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for you and your remote team.</p>
        <button className='landing--try-free-btn'>Try for free</button>
        <p className='landing--rating'>5.0 Rating based on reviews from: <Capterra /> <AlternativeTo /></p>
      </div>
      <div className="landing--hero-img-container">
        <img
          src={HeroImage}
          alt="conference call"
          className='landing--hero-img'
        />
      </div>
    </section>
  );
}
 
export default LandingPage;