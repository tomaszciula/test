import React from 'react'
const Header = ({ sentence }) => {
  return (
    <div className="bg-black text-white p-12 flex justify-center text-4xl ">
      {sentence}
    </div>
  );
};

export default Header;
