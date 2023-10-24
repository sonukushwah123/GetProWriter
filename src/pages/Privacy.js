import React from "react";
import { Link } from "react-router-dom";
import useBlogData from "../fetchApi/BlogData";

const Privacy = () => {
  const blogs = useBlogData();
  return (
    <div>
      <section className="term_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="term_sec-9">
                <h2 className="pp-h2">Privacy Policy</h2>

                <p className="term_sec-p">
                  Get Pro Writer is committed to protecting the privacy of
                  visitors to our websites, as well as our members and partners.
                  Get Pro Writer has established this Privacy Policy to explain
                  what information we collect through these websites and how it
                  is used.
                </p>

                <p className="term_sec-p">
                  In this policy, “Get Pro Writer” refers to staff, board
                  members, cooperating attorneys, interns, volunteers, and
                  consultants of Get Pro Writer, all of whom are bound by law or
                  contract to keep information they receive as part of their
                  work for Get Pro Writer confidential.
                </p>

                <p className="term_sec-p">
                  Get Pro Writer does not sell or rent personally identifiable
                  member, customer, or employee information under any
                  circumstances, and we do not share information without prior
                  consent except as compelled by law.
                </p>

                <h3 className="pp-h3">
                  What Information Do We Collect About you?
                </h3>

                <p className="term_sec-p">
                  For visitors to our website, we may, but generally do not, log
                  standard technical information, such as the numerical Internet
                  protocol (IP) address of the computer you are using; the
                  browser software you use and your operating system; and the
                  Internet address of the website from which you linked directly
                  to our site. Circumstances in which we temporarily log
                  standard technical information include conducting site
                  testing, diagnosis of technical problems, and defending
                  against attacks on the site. We generally log the date and
                  time users access our site on an anonymous basis. For more
                  information on Get Pro Writer’s position on data logging, see
                  the EFF’s Best Practices for Online Service Providers.
                </p>

                <p className="term_sec-p">
                  In order to access the member functionality of Get Pro Writer
                  we use a persistent cookie. We may also use session cookies
                  from time to time. Session cookies expire when you close your
                  browser. You can set your browser to refuse cookies, and use
                  Tor if you wish to keep your IP number and other technical
                  information anonymous.
                </p>

                <p className="term_sec-p">
                  In addition, Get Pro Writer collects and retains the
                  information you submit to us. It is up to you whether to
                  submit information to us and how much information to provide.
                  You may always contact us to request a copy of any information
                  we have on you, as well as to have it deleted or anonymized.
                </p>

                <p className="term_sec-p">
                  If you choose to become a Get Pro Writer member, we ask for
                  your name, email address, city, state/province, postal or zip
                  code, country of residence, and phone number, and invite you
                  to select a password. This information is required as we
                  cannot create a user account without this information. This
                  information will be stored in our Corporate Cloud Storage,
                  Corporate Email Platform, and Help System.
                </p>

                <p className="term_sec-p">
                  For online donors and shoppers, we also ask for your credit
                  card number or Paypal login information. We also maintain
                  records of our members’ use of the site and may use this data
                  on an anonymous basis periodically. If you use some of the
                  online financial services offered by Get Pro Writer, you are
                  asked to provide personal information, such as a shipping
                  address, necessary to complete your transaction.
                </p>

                <p className="term_sec-p">
                  We may ask for additional personal information when you
                  provide feedback or comments or otherwise communicate with us.
                </p>

                <p className="term_sec-p">
                  From time to time, we may ask for personal information on
                  other portions of the site, such as asking you to sign a
                  petition, participate in a contest, or provide other
                  user-generated content to us.
                </p>

                <h3 className="pp-h3">Writer Contract</h3>

                <p className="term_sec-p">
                  Get Pro Writer shall negotiate and contract with a Writer for
                  the completion of an Assignment. Upon the extension of an
                  offer of an Assignment, the Writer shall have a certain time
                  period to accept such offer from Get Pro Writer. The writer’s
                  acceptance of such an offer constitutes the Writer’s
                  acceptance of the terms of the Assignment, as well as the
                  Terms of Service and Writer Service Agreement found on this
                  site.
                </p>

                <p className="term_sec-p">
                  Writers are at all times independent of Get Pro Writer and
                  shall not at any time be considered an employee of Get Pro
                  Writer. All Writers are independent contractors and consent to
                  such designation by way of these Terms. Accordingly, Writers
                  shall not be entitled to benefits offered to Get Pro Writers’
                  employees.
                </p>

                <p className="term_sec-p">
                  Writers shall be solely responsible for all taxes, license
                  fees, and business expenses incurred on behalf of the Writer.
                  Buyer and Writer agree to indemnify Get Pro Writer for any
                  taxes or penalties imposed on Content Writers by virtue of the
                  purchase and sale of services between them on this Website.
                </p>

                <h3 className="pp-h3">Disclosure and Sharing of Information</h3>
                <ol>
                  <li className="pp_list">
                    {" "}
                    We do not rent, sell or disclose or share any Information
                    that we collect from you, with third parties, save and
                    except in order to provide you with the Services or for the
                    Legitimate Purposes as specified above. Any such disclosure,
                    if made, shall be in accordance with this Privacy Policy and
                    as per the procedure prescribed by law and in compliance
                    with our legal obligations. We may share your Information in
                    circumstances and for the purposes as specified hereunder:{" "}
                  </li>

                  <ol>
                    <li className="pp_list">
                      {" "}
                      We shall share the information to the third-party service
                      providers/ vendors, to provide you with the Services and
                      to effectuate any activities that fall under the
                      Legitimate Purpose for which such Information has been
                      collected.{" "}
                    </li>

                    <li className="pp_list">
                      When compelled by law: We may disclose any Information
                      provided by you on the Platform as may be deemed to be
                      necessary or appropriate:
                    </li>

                    <ol>
                      <li className="pp_list">
                        under applicable law, including laws outside your
                        country of residence;
                      </li>

                      <li className="pp_list">to comply with legal process;</li>

                      <li className="pp_list">
                        to respond to requests from public and government
                        authorities including public and government authorities
                        including public and government authorities outside your
                        country of residence;
                      </li>

                      <li className="pp_list">
                        to protect our operations or those of any of our
                        affiliates;
                      </li>

                      <li className="pp_list">
                        to protect our rights, privacy, safety or property,
                        and/that of our affiliates, you or others;
                      </li>

                      <li className="pp_list">
                        to allow us to pursue available remedies or limit the
                        damages that we may sustain; or
                      </li>

                      <li className="pp_list">
                        to protect against legal liability;
                      </li>

                      <li className="pp_list">
                        to protect the personal safety of Users of the Platform;
                      </li>

                      <li className="pp_list">
                        to prevent or investigate possible wrongdoing in
                        connection with the Platform.
                      </li>
                    </ol>

                    <li className="pp_list">
                      Merger or Acquisition: We may share Information upon
                      merger or acquisition of Company with another company. We
                      shall transmit and transfer the Information upon
                      acquisition or merger of Company with another company;
                    </li>

                    <li className="pp_list">
                      With our service providers: We may share Information with
                      other service providers on a need to know basis, subject
                      to obligations of confidentiality for provision of
                      Services. We hereby clarify that Company works with
                      institutions, vendors, partners, advertisers, and other
                      service providers, including (but not limited) to those
                      who provide products or services such as contact
                      Information verification, website hosting, data analysis,
                      providing infrastructure, information technology services,
                      auditing services and other similar services, in different
                      industries and categories of business by virtue of lawful
                      contracts instituted between such third parties and
                      Company to improve our product and services. Accordingly,
                      we may share your Information with such service provider
                      in order to provide you with Services;{" "}
                    </li>

                    <li className="pp_list">
                      Employees/Agents of Company: We follow a strict
                      confidentiality policy with regard to disclosure of
                      confidential information to our employees or other
                      personnel. There may be situations, where we may disclose
                      the confidential information only to those of our
                      employees and other personnel on a need to know basis. Any
                      breach of confidential information by the employees,
                      personnel within the Company is dealt with stringently by
                      us.
                    </li>
                  </ol>
                  <li className="pp_list">
                    Except for the Information disclosed pursuant to sub-clause
                    (a), (b), (c), (d) and (e) of Clause 6.1 above, Company may
                    share Information, if you authorize us to do so.
                  </li>
                </ol>

                <h3 className="pp-h3">Agreement to Pay</h3>

                <p className="term_sec-p">
                  If for any reason, Get Pro Writer does not receive payment for
                  any amounts that you have authorized to be paid through your
                  use of the Payment Service or other Get Pro Writer services,
                  you agree to pay such amount immediately upon demand by Get
                  Pro Writer.
                </p>

                <p className="term_sec-p">
                  You also agree to pay any interest charges, attorneys’ fees,
                  and other costs of collection incurred by Get Pro Writer in
                  collecting from you the authorized but unpaid amount. In such
                  case, Get Pro Writer may, at its option, stop processing any
                  further payments made by you and apply any amounts then held
                  by Get Pro Writer on your behalf toward any deficiencies,
                  losses, or costs that we have incurred as a result of your use
                  of the Payment Service or other Get Pro Writer services.
                </p>

                <p className="term_sec-p">
                  We may also make appropriate reports to credit reporting
                  agencies, financial institutions, tax agencies, and law
                  enforcement authorities, and cooperate with them in any
                  resulting investigation or prosecution.
                </p>

                <h3 className="pp-h3">Third-Party Service Providers</h3>
                <p className="term_sec-p">
                  Portions of the Get Pro Writer site may be operated by a
                  third-party service provider (“Provider”). Providers may place
                  cookies on your computer in order to store information, such
                  as items placed in your shopping cart, or store your account
                  login when using the Affiliate Center. Provider logs standard
                  technical information, such as the numerical Internet protocol
                  (IP) address of the computer you are using; the browser
                  software you use and your operating system; the date and time
                  you access our site; and the Internet address of the website
                  from which you linked directly to our site.
                </p>

                <p className="term_sec-p">
                  Our Provider also stores and organizes the personal
                  information collected through this site on our behalf. The
                  information remains under our control, and our agreement with
                  the Provider requires the information to be kept confidential
                  and disclosed only to Provider’s employees who require such
                  access in the course of their assigned duties. The provider
                  has, however, not agreed to cooperate with Get Pro Writer in
                  seeking a protective order, if necessary, to protect this
                  information from the legal process. We will seek to accomplish
                  this in all cases, but this cannot be guaranteed. Get Pro
                  Writer may change providers from time to time and will
                  transfer stored information to the new provider subject to
                  similar restrictions.
                </p>

                <p className="term_sec-p">
                  Get Pro Writer’s search engine functionality is currently
                  operated in-house. All search queries may be retained for
                  analysis and will always be accessed on an anonymous basis.
                  Get Pro Writer may however change the search engine provider
                  from time to time.
                </p>

                <p className="term_sec-p">
                  From time to time, Get Pro Writer may work with third-party
                  consultants or other service providers who may have access to
                  personally identifiable information. In such cases, we will
                  restrict their use of personally identifiable information in
                  accordance with their assigned tasks and subject to the
                  limitations of this privacy policy.
                </p>

                <p className="term_sec-p">
                  Get Pro Writer’s site provides links to a wide variety of
                  third-party websites. Get Pro Writer is not responsible for
                  and does not have any control over, the privacy practices or
                  the content of such third parties. We encourage users to read
                  the privacy policies of any website visited.
                </p>

                <h3 className="pp-h3">DISCLOSURE OF PERSONAL DATA</h3>

                <p className="term_sec-p">
                  Although it has been detailed about the disclosure of your
                  Personal Data in this Privacy Policy, we reserve the right to
                  disclose data in cases that we believe are reasonable. Such
                  instances are listed below but not limited to those listed.
                </p>

                <ul>
                  <li className="pp_list">
                    To satisfy any laws and regulations, local, state, or
                    Federal
                  </li>
                  <li className="pp_list">
                    To respond to requests in the case of criminal, civil or
                    administrative processes, subpoenas, court orders, writs
                    from the law enforcement and/or other governmental and legal
                    bodies
                  </li>
                  <li className="pp_list">
                    To take legal action against a user who has violated the law
                    or the terms of use of the Website
                  </li>
                  <li className="pp_list">
                    As is obligatory for the proper operation of the Website
                  </li>
                  <li className="pp_list">
                    To cooperate with any lawful investigations regarding our
                    users.
                  </li>
                  <li className="pp_list">
                    In case of any suspected fraudulent activities on the
                    website or activities that violate our Terms and Conditions
                    and other applicable guidelines.
                  </li>
                </ul>

                <h3 className="pp-h3">
                  Cookies and other Tracking Technologies:
                </h3>

                <ul>
                  <li className="pp_list">
                    Our Platform may utilize “cookies” and other Technical
                    Information. “Cookies” are a small text file consisting of
                    alphanumeric numbers used to collect the Information about
                    Platform activity. The Technical Information helps us
                    analyse web traffic and helps you by customizing the
                    Platform to your preferences. Cookies in no way gives us
                    access to your computer or mobile device. In relation to
                    Cookies, you can deny access to the installation of the
                    Cookies by modifying the settings on your web browser,
                    however, this may prevent you from taking full advantage of
                    the Platform.
                  </li>
                  <li className="pp_list">
                    Our use of Cookies and Technical Information allows us to
                    improve Platform and your experience of Platform and
                    Services. We may also analyse Technical Information that
                    does not contain Personal Information for trends and
                    statistics.
                  </li>
                </ul>

                <h3 className="pp-h3">
                  European General Data Protection Regulation:
                </h3>

                <p className="term_sec-p">
                  Get Pro Writer updated this privacy policy to provide greater
                  transparency and explain our compliance with the European
                  General Data Protection Regulation (GDPR) for our European
                  customers. These updates cover:
                </p>

                <ul>
                  <li className="pp_list">How we collect information</li>
                  <li className="pp_list">
                    Our legal basis for collecting information
                  </li>
                  <li className="pp_list">How we use your information</li>
                  <li className="pp_list">
                    The right to access personal information
                  </li>
                  <li className="pp_list">The right to be forgotten</li>
                  <li className="pp_list">
                    Data portability request fulfillment
                  </li>
                  <li className="pp_list">Named our data security lead</li>
                </ul>

                <p className="term_sec-p">
                  If you’d like to request information about personal data we
                  store about you, please contact us.
                </p>

                <h3 className="pp-h3">Changes and updates to Policy:</h3>

                <p className="term_sec-p">
                  We may modify or revise the Privacy Policy from time to time
                  and shall accordingly notify you of any changes to the Privacy
                  Policy by posting the revised Privacy Policy on the Platform
                  with an updated date of revision. We shall endeavor to review,
                  revise, update, modify, amend or correct the Privacy Policy on
                  a regular and routine basis, especially whenever a significant
                  update is made to the technology employed by us. You must
                  periodically review the Privacy Policy for the latest
                  information on our privacy practices. In the event you
                  continue to use the Platform and our services after any update
                  in the Privacy Policy, your use of the Platform shall be
                  subject to such an updated privacy policy. Your continued
                  usage of Services, post any amendment would deem to mean that
                  you accept and understand the revised Privacy Policy. Further,
                  we retain the right at any time to deny or suspend access to
                  all, or any part of, the service to anyone who we reasonably
                  believe has violated any provision of this Privacy Policy.
                </p>

                <h3 className="pp-h3">
                  Your acceptance of the privacy policy:
                </h3>

                <p className="term_sec-p">
                  By using or visiting this platform, you signify your agreement
                  to this privacy policy. If you do not agree to any of these
                  terms, please do not use this platform or services.
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

export default Privacy;
