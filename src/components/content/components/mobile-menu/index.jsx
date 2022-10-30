const MobileMenu = ({ children }) => (
  <div className="hidden mobile:block absolute inset-0 bg-gray-100">
    {children}
  </div>
);

export default MobileMenu;
