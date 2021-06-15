import React from "react";

const Link = ({ footerlink }) => {
  const linkList = footerlink.map((data, index) => {
    const links = data.links.map((link, index) => {
      return (
        <li className="heading-primary" key={index}>
          {link}
        </li>
      );
    });

    return (
      <ul className="link-column" key={index}>
        {links}
      </ul>
    );
  });

  return <>{linkList}</>;
};

export default Link;
