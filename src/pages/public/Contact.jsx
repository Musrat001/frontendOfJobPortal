import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Headphones,
} from "lucide-react";

import "../../css/contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= MAIN CONTACT SECTION ================= */}

      <section className="contact-section">

        {/* -------- LEFT SIDE -------- */}

        <div className="contact-left">

          <span className="contact-badge">
            Contact Us
          </span>

          <h1>
            We’d love to hear
            <br />
            from you!
          </h1>

          <p className="contact-description">
            Have a question, suggestion, or need support?
            Fill out the form and our team will get back
            to you as soon as possible.
          </p>


          {/* Email */}

          <div className="contact-info">

            <div className="contact-icon">
              <Mail size={21} />
            </div>

            <div>
              <h3>Email Us</h3>
              <p>support@jobfinder.com</p>
            </div>

          </div>


          {/* Phone */}

          <div className="contact-info">

            <div className="contact-icon">
              <Phone size={21} />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>

          </div>


          {/* Address */}

          <div className="contact-info">

            <div className="contact-icon">
              <MapPin size={21} />
            </div>

            <div>
              <h3>Visit Us</h3>

              <p>
                123, Tech Park, Sector 62
                <br />
                Noida, Uttar Pradesh - 201309, India
              </p>

            </div>

          </div>


          {/* Working Hours */}

          <div className="contact-info">

            <div className="contact-icon">
              <Clock size={21} />
            </div>

            <div>

              <h3>Working Hours</h3>

              <p>
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>

            </div>

          </div>

        </div>


        {/* -------- RIGHT SIDE FORM -------- */}

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form>

            {/* Name + Email */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>


            {/* Subject */}

            <div className="form-group">

              <label>
                Subject <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Subject"
              />

            </div>


            {/* Message */}

            <div className="form-group">

              <label>
                Message <span>*</span>
              </label>

              <textarea
                placeholder="Write your message here..."
              ></textarea>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="send-button"
            >

              <Send size={16} />

              <span>Send Message</span>

            </button>

          </form>

        </div>

      </section>


      {/* ================= HELP SECTION ================= */}

      <section className="help-section">

        <div className="help-icon">

          <Headphones size={40} />

        </div>


        <div className="help-content">

          <h2>Need Help?</h2>

          <p>
            Check out our Help Center for answers to
            <br className="desktop-break" />
            common questions and support.
          </p>

        </div>


        <button className="help-button">

          <span>Go to Help Center</span>

          <ArrowRight size={17} />

        </button>

      </section>

    </div>
  );
}

export default Contact;