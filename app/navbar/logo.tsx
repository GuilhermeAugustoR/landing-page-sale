import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/images/logo/logo2.svg"}
        width={150}
        height={150}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
