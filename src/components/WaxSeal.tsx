import React from 'react';

export type ProjectStatus = 'LIVE' | 'IN PROGRESS' | 'ARCHIVED';

interface WaxSealProps {
  status: ProjectStatus;
  size?: 'sm' | 'md';
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ status, size = 'md', className = '' }) => {
  // Determine text sizes or styling variations if any
  const text = status === 'IN PROGRESS' ? 'PROGRESS' : status;

  // Let's create an irregular border-radius per seal to look hand-stamped
  // We can vary the shape slightly based on status to give them unique shapes
  const getShapeClass = () => {
    switch (status) {
      case 'LIVE':
        return 'rounded-[48%_52%_45%_55%_/_52%_48%_52%_48%]';
      case 'IN PROGRESS':
        return 'rounded-[52%_45%_55%_48%_/_48%_52%_48%_52%]';
      case 'ARCHIVED':
        return 'rounded-[45%_55%_48%_52%_/_55%_45%_55%_45%]';
    }
  };

  const getOverlayText = () => {
    switch (status) {
      case 'LIVE':
        return 'L';
      case 'IN PROGRESS':
        return 'P';
      case 'ARCHIVED':
        return 'A';
    }
  };

  const sizeClasses = size === 'sm' ? 'w-9 h-9' : 'w-14 h-14';

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${sizeClasses} select-none transition-transform duration-500 ease-out group-hover:rotate-12 cursor-default ${getShapeClass()} ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #a24646 0%, #8b3a3a 50%, #5d2525 100%)',
        boxShadow: size === 'sm' 
          ? 'inset 1px 1px 2px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)' 
          : 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 6px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4)',
      }}
      title={`Project Status: ${status}`}
    >
      {/* Outer irregular border rim */}
      <div 
        className={`absolute ${size === 'sm' ? 'inset-[3px]' : 'inset-1'} border border-red-950/40 opacity-70 ${getShapeClass()}`}
        style={{
          boxShadow: size === 'sm' ? 'inset 0 0 2px rgba(0,0,0,0.4)' : 'inset 0 0 4px rgba(0,0,0,0.4)',
        }}
      />

      {/* Embedded text */}
      <div className="z-10 flex flex-col items-center justify-center text-center">
        {/* Large central character imprint */}
        <span 
          className={`${size === 'sm' ? 'text-sm' : 'text-2xl'} font-bold font-fraunces text-red-950/70 select-none leading-none -mb-0.5`}
          style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.1)' }}
        >
          {getOverlayText()}
        </span>
        {/* Small rotated banner text */}
        {size !== 'sm' && (
          <span 
            className="text-[7px] font-bold font-mono tracking-wider text-red-100/90 leading-none select-none uppercase -rotate-6"
            style={{ textShadow: '0 -1px 0 rgba(0,0,0,0.5)' }}
          >
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default WaxSeal;
