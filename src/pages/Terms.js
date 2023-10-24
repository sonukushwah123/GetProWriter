import React from "react";
import { Link } from "react-router-dom";
import useBlogData from "../fetchApi/BlogData";

const Terms = () => {
  const blogs = useBlogData();
  return (
    <div>
      <section className="term_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="term_sec-9">
                <h2 className="term_sec-h2">Terms</h2>
                <p className="term_sec-p">
                  Please go through the terms and conditions observantly before
                  starting a relationship with Get Pro Writer. The following
                  terms and conditions form a framework for the relationship
                  with the client. By use and continual use of Get Pro Writer
                  services, you acknowledge your agreement to the terms and
                  conditions cited below.
                </p>

                <p className="term_sec-p">
                  Please understand all the terms and conditions of the
                  Agreement carefully before you start to access the website of
                  Get Pro Writer. By using any part of the website, you become
                  liable to agree to the terms. You may not access or use the
                  website if you are not ready to agree with the given terms and
                  conditions. The website is not open to individuals below the
                  age of 13 years.
                </p>

                <h3 className="term_sec-h3">
                  THIS WEBSITE WITH ALL ONLINE SERVICE PLATFORM OWNED AND
                  OPERATED BY Get Pro Writer. (“Website”).
                </h3>

                <p className="term_sec-p">
                  The following are terms of a legal agreement between Get Pro
                  Writer, henceforth “website”, and you. By accessing, reading,
                  and using this website you acknowledge that you have read,
                  understood, and agree to be bound by the terms which follow
                  and to comply with all applicable laws and regulations. If you
                  do not agree to these terms, do not use this website. It may
                  contain other proprietary notices and copyright information,
                  the terms of which must be observed and followed. Information
                  on this website may be technically inaccurate or have errors.
                  Be aware that Site may, in its sole discretion and without
                  notice, revise these terms at any time.
                </p>

                <h3 className="term_sec-h3">NATURE OF THIS SITE:</h3>

                <p className="term_sec-p">
                  This site is a platform for persons or companies (“Customers”)
                  in need of written content. It simply connects such Customers
                  with various freelance writers who have a working relationship
                  with the Website.
                </p>

                <h3 className="term_sec-h3">ACCESS TO THIS SITE:</h3>

                <p className="term_sec-p">
                  To gain access to this website you must register as a customer
                  using the signup form at the website. After gaining access, if
                  you wish to place orders, you will need to add additional
                  information and add funds to your account. All registration
                  data must be accurate and truthful. You do not have a right to
                  have access to this site—The site can terminate your account
                  and deny you all its services at any time.
                </p>

                <h4 className="term_sec-h4">
                  {" "}
                  Service(s) provided to Clients:
                </h4>

                <p className="term_sec-p">If you are a Client:</p>

                <p className="term_sec-p">
                  We provide you with a platform that collates your content
                  requirements and addresses them by providing original and
                  unique content as per the specifications provided for the
                  Project. The following services shall be rendered in this
                  regard:
                </p>

                <p className="term_sec-p">
                  We help you ideate, fixate and act upon your content marketing
                  strategy and help increase operational efficiency to create
                  content at scale, volume, and differentiation;
                </p>

                <p className="term_sec-p">
                  Matching a content creator with the best-fit content creator
                  algorithmically;
                </p>

                <p className="term_sec-p">
                  Curate content as per the specifications provided by the
                  Customer with regard to that particular Project;
                </p>

                <p className="term_sec-p">
                  The flexible and steady flow of content from our end helps
                  keep your content marketing on track with our account
                  management feature which provides end-to-end assistance.
                </p>

                <h3 className="term_sec-h3">User Account Registration:</h3>

                <p className="term_sec-p">
                  Users who are at least eighteen (18) years of age may create
                  an account if they wish to avail of our Services. Any use of
                  our Services by anyone under eighteen (18) years of age is
                  expressly prohibited and by using our Services you represent
                  and warrant that you are eighteen (18) years or older. In
                  order to use the Platform, you have to create an account
                  (“Account”), you shall provide true and accurate information
                  while creating your Account. The Information collected while
                  creating your Account will be governed by our Privacy Policy.
                  You are responsible for maintaining the confidentiality of
                  your login credentials and are fully responsible for all
                  activities that occur under your Account. You can create an
                  Account by using your email ID/phone number. Post entering
                  your details (email ID/phone number) in the Platform, one-time
                  verification shall be conducted by the Company. Please note
                  that the phone number provided by you shall be used for
                  WhatsApp integration purposes, by creating the Account you
                  hereby agree to us contacting you over the WhatsApp interface.
                  Post such verification the Account shall be created.
                </p>

                <h4 className="term_sec-h4">
                  {" "}
                  <li>If you are a Customer:</li>{" "}
                </h4>

                <p className="term_sec-p">
                  If interested, you may register and create an account for
                  yourself as a Customer by providing information being sought
                  on the Website. Once an Account is created on the Platform,
                  the Customer shall enter into a service agreement with the
                  Company detailing the terms and conditions of the services,
                  rights, liabilities, commercials, and obligations associated
                  thereto. You are entirely responsible for safeguarding and
                  maintaining the confidentiality of your login credentials.
                  Should you log in to the Platform using such login
                  credentials, it shall be deemed that your Account has been
                  accessed by you or any third party to whom you have granted
                  access to the Account. You agree to notify us immediately if
                  you suspect or become aware of any unauthorized use of your
                  Account or any unauthorized access to the password for any
                  Account. You further agree not to use the Account or log in
                  with the username and password of another User of the Site if
                  (a) you are not authorized to use both or (b) the use would
                  violate the Terms of Usage.
                </p>

                <h3 className="term_sec-h3">Reworking and Revision</h3>

                <p className="term_sec-p">
                  Please refer to our Revision Policy. Our Revision Policy is
                  hereby incorporated into these Terms of Service by this
                  reference.
                </p>

                <h3 className="term_sec-h3">Cancellation Policy</h3>

                <p className="term_sec-p">
                  Please refer to our Cancellation Policy. Our Cancellation
                  Policy is hereby incorporated into these Terms of Service by
                  this reference.
                </p>

                <h3 className="term_sec-h3">
                  CLIENT RIGHTS TO ACCEPTED CONTENT:
                </h3>

                <p className="term_sec-p">
                  <li className="p_li">
                    The Client has no rights to or ownership of any content
                    until they have accepted the order through the Site
                    interface and funds are removed for that order. ALL
                    VIOLATIONS BY CLIENTS WILL BE ENFORCED BY SITE.{" "}
                  </li>
                </p>

                <p className="term_sec-p">
                  <li className="p_li">
                    Once accepted, the Client has rights to publish, perform,
                    display, reproduce, distribute, create derivative works and
                    sell the delivered and approved content in any type of media
                    including, but not limited to, print and or online media
                    throughout the world.{" "}
                  </li>
                </p>

                <h3 className="term_sec-h3">LIMITATION OF LIABILITY</h3>

                <p className="term_sec-p">
                  UNDER NO CIRCUMSTANCES SHALL SITE OR ANY OF ITS PREDECESSORS,
                  SUCCESSORS, PARENTS, SUBSIDIARIES, AFFILIATES, COACHES,
                  OFFICERS, DIRECTORS, SHAREHOLDERS, INVESTORS, EMPLOYEES,
                  AGENTS, REPRESENTATIVES, ATTORNEYS, AND THEIR RESPECTIVE
                  HEIRS, SUCCESSORS, AND ASSIGNS BE LIABLE FOR ANY DAMAGES,
                  INCLUDING DIRECT, INCIDENTAL, PUNITIVE, SPECIAL, CONSEQUENTIAL
                  OR EXEMPLARY DAMAGES THAT DIRECTLY OR INDIRECTLY RESULT FROM
                  THE USE OF, OR THE INABILITY TO USE, THIS WEBSITE OR THE
                  INFORMATION CONTAINED ON THIS WEBSITE OR OBTAINED FROM YOUR
                  USE OF THIS WEBSITE, INCLUDING FOR VIRUSES ALLEGED TO HAVE
                  BEEN OBTAINED FROM THE WEBSITE, EVEN IF SITE HAS BEEN ADVISED
                  OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL IT OR
                  ANY OF ITS PREDECESSORS, SUCCESSORS, PARENTS, SUBSIDIARIES,
                  AFFILIATES, COACHES, OFFICERS, DIRECTORS, SHAREHOLDERS,
                  INVESTORS’, EMPLOYEES’, AGENTS’, REPRESENTATIVES’ AND
                  ATTORNEYS’ AND THEIR RESPECTIVE HEIRS’, SUCCESSORS’ AND
                  ASSIGNS’ SHARE IN ANY LIABILITY. TOTAL LIABILITY DEVOLVES TO
                  YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION WHETHER IN
                  CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR
                  OTHERWISE EXCEEDING $1. SOME JURISDICTIONS MAY NOT ALLOW THE
                  EXCLUSION OF IMPLIED WARRANTIES IN WHICH CASE SOME OF THE
                  ABOVE EXCLUSIONS MAY NOT APPLY TO ALL USERS.
                </p>

                <h3 className="term_sec-h3">TRADEMARKS</h3>

                <p className="term_sec-p">
                  The trademarks, service marks, designs, and logos
                  (collectively, the “Trademarks”) used and displayed on this
                  website are registered and unregistered Trademarks of Get Pro
                  Writer Media Inc. Other trademarks, service marks, and trade
                  names may be owned by others. Nothing on this website should
                  be construed as granting, by implication or otherwise, any
                  license or right to use any Trademark or any other Site
                  intellectual property including the name Get Pro Writer
                  displayed on this website without prior written permission
                  from the Site.
                </p>

                <h3 className="term_sec-h3">ENTIRE AGREEMENT</h3>
                <p className="term_sec-p">
                  This agreement constitutes the entire agreement between Site
                  and you with respect to the subject matter of this agreement
                  and supersedes and replaces all prior or contemporaneous
                  understandings or agreements, written or oral, regarding that
                  subject matter. Any waiver of any provision of this agreement
                  will be effective only if in writing and signed by the Site.
                </p>
              </div>
            </div>

            <div className="col-md-4 term_sec-3">
              <div className="block1  mx-0">
                <form>
                  <p className="block_p">Search</p>
                  <input type="text" name="search" className="block_search" />
                  <button type="submit" className="block_btn">
                    search
                  </button>
                </form>
              </div>

              <div className="block1  mx-0">
                <h3 className="block-h3">Recent Posts</h3>
                {blogs?.map((friend, i) => {
                  return (
                    <p className="block-p2">
                      <Link to={`/blog/${friend.slug}`} className="block_a">
                        {friend.title}
                      </Link>
                    </p>
                  );
                })}
              </div>

              <div className="block1  mx-0">
                <h3 className="block-h3">Archives</h3>
                {blogs?.map((friend, i) => {
                  return (
                    <p className="block-p3">
                      <Link to={`/blog/${friend.slug}`} className="block_a">
                        {friend.date}
                      </Link>
                    </p>
                  );
                })}
              </div>

              <div className="block1  mx-0">
                <h3 className="block-h3">Categories</h3>
                <p className="block-p3">Content Writing</p>
                <p className="block-p3">General</p>
                <p className="block-p3">Tips</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
