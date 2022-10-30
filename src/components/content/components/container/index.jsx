const Container = ({ children }) => (
  <div className="flex-1 bg-gray-200 h-full flex justify-between items-end flex-col p-10 mobile:p-4 mobile:relative">
    {children}
  </div>
);

export default Container;
