import React from 'react'

const Header = (props) => {
    const { index, title, description } = props;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex  items-center justify-center gap-2">
          <p className="text-3xl sm:tex-4xl md:text-5xl font-semibold text-slate-400">
            {index}
          </p>
          <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
        </div>
        <p className="text-sm sm:text-base mx-auto">{description}</p>
      </div>
    );
  };

export default Header