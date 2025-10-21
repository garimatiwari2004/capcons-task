import { Facebook, Instagram, LocateIcon, Twitter, Youtube } from "lucide-react";
import "../app/globals.css";
export default function Footer() {
    return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* --- Top Section: Links + Social --- */}
        <div className="footer-main">
          
          <div className="footer-links">
            {/* Column 1: Main Links */}
            <div className="footer-column footer-column-main-links">
              <ul>
                <li><a href="#">Find A Store</a></li>
                <li><a href="#">Become A Member</a></li>
                <li><a href="#">Sign Up for Email</a></li>
                <li><a href="#">Send Us Feedback</a></li>
                <li><a href="#">Student Discounts</a></li>
              </ul>
            </div>

            {/* Column 2: Get Help */}
            <div className="footer-column">
              <h4>Get Help</h4>
              <ul>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
                <li><a href="#">Contact Us On All Other Inquiries</a></li>
              </ul>
            </div>

            {/* Column 3: About */}
            <div className="footer-column">
              <h4>About Nike</h4>
              <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Sustainability</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="footer-social">
            <ul>
              <li>
                <a href="#" aria-label="Twitter">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <Youtube />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright + Legal --- */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="location">
              <span><LocateIcon /></span>
              India
            </div>
            <p className="copyright">&copy; 2025 Nike, Inc. All Rights Reserved</p>
          </div>

          <div className="footer-bottom-right">
            <ul>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Terms of Sale</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Nike Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
    );
}