import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)

  // console.log(renderLinks)

  return (
  <nav>
    {renderLinks}
  </nav>
  )
}

export default NavBar;
