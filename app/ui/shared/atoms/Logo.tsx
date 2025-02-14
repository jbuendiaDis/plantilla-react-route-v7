interface LogoProps {
  collapsed: boolean;
  mobileLogo: string;
  desktopLogo: string;
  isMobileMenuActive: boolean;
}

export function Logo({ collapsed, mobileLogo, desktopLogo, isMobileMenuActive }: LogoProps) {
  return (
    <div className="flex items-center justify-center h-20 px-2">
      <img 
        src={!isMobileMenuActive && collapsed ? mobileLogo : desktopLogo} 
        alt="Logo" 
        className={`transition-all duration-300 ease-in-out transform ${collapsed ? 'w-16 scale-95' : 'w-32 scale-100'}`}
        style={{
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        }}
      /> 
    </div>
  );
}
