import { ReactComponent as Netflix } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Netflix Logo.svg';
import { ReactComponent as Shopify } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Shopify Logo.svg';
import { ReactComponent as Spotify } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Spotify Logo.svg';
import { ReactComponent as Walmart } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Walmart Logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer--text-container">
        <p className="footer--text">Trusted by 3+ million people at companies like</p>
      </div>
      <aside className="footer--companies-container">
        <Netflix className='footer--company' />
        <Shopify className='footer--company' />
        <Spotify className='footer--company' />
        <Walmart className='footer--company' />
      </aside>
    </footer>
  );
}
 
export default Footer;