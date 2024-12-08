import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: "MY ACCOUNT",
      links: ["Membership Program", "Sign In", "Register", "Order Status", "Returns"],
    },
    {
      title: "HELP",
      links: [
        "Ordering",
        "Returns and Refunds",
        "Shipping and Delivery",
        "Payment",
        "Redeem Gift Cards",
        "Programs and Discounts",
        "Services",
        "Product and Sizing",
        "Stores",
         "Account"
      ],
    },
    {
      title: "ABOUT US",
      links: [
        "Our Business",
        "Media",
        "Investors",
        "Strategic Sales",
        "Affiliates and Creators",
        "Sweat Collective",
      ],
    },
    {
      title: "CONTACT US",
      links: ["Live Chat", "Contact Us"],
    },
    {
      title: "",
      links: ["EMAIL SIGN UP", "CAREERS","LULULEMON X FANATICS","LIKE NEW", "SUSTAINABILITY", "SOCIAL IMPACT", "DIVERSITY AND INCLUSION","LULULEMON APPS", "SITEMAP"],
    },
    {
      title: "",
      links: ["GIFT CARDS","STORE LOCATOR",
        "Accessibility Statement",
        "Privacy Policy",
        "Your Privacy Choices",
        "California Consumer Privacy Act (CCPA) Opt-Out Icon",
        "California Privacy Rights",
        "California Transparency Act",
      ],
    },
    {
      title: "Follow Us",
      links: ["Twitter", "Pinterest", "YouTube", "Facebook", "Instagram"],
    },
  ];

  return (
    <footer style={footerStyle}>
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle}>
          <h4>{section.title}</h4>
          <ul style={listStyle}>
            {section.links.map((link, idx) => (
              <li key={idx} style={listItemStyle}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div style={footerBottomStyle}>
        <p>
          © lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
        </p>
        <p>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | 
          <a href="/terms-of-use" style={linkStyle}>Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


