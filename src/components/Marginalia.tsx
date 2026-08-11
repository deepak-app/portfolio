import React from 'react';

interface MarginaliaProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export const Marginalia: React.FC<MarginaliaProps> = ({ 
  children, 
  position = 'right',
  className = '' 
}) => {
  // Absolute offset classes based on side
  const desktopPosition = position === 'right' 
    ? 'lg:absolute lg:-right-44 xl:-right-60 lg:left-auto' 
    : 'lg:absolute lg:-left-44 xl:-left-60 lg:right-auto';

  return (
    <div 
      className={`
        /* Mobile styling: inline callout box */
        block lg:hidden
        mt-3 mb-5 px-3 py-2 border-l-2 border-rubric-red/40 bg-rubric-red/5 rounded-r
        text-xs font-fraunces italic text-rubric-red/90 text-left
        
        /* Desktop styling: absolute margin notes */
        lg:block lg:w-36 xl:w-48 lg:top-0 lg:my-0 lg:p-0 lg:border-none lg:bg-transparent
        lg:text-xs xl:text-sm lg:text-rubric-red/70 lg:hover:text-rubric-red
        lg:leading-relaxed lg:transition-colors lg:duration-300 lg:select-none
        ${desktopPosition}
        ${className}
      `}
    >
      <div className="relative">
        {/* Desktop-only indicator line / scribe signifier */}
        <div className={`hidden lg:block absolute top-1.5 w-4 h-[1px] bg-rubric-red/20 
          ${position === 'right' ? '-left-6' : '-right-6'}`} 
        />
        
        <p className="font-fraunces italic tracking-wide">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Marginalia;
