import arrowLeftIcon from "../../../../assets/images/arrow-left.png";

const ExpandableContainer = ({ isOpen, children, onClick }) => (
  <div className="relative h-full" data-testid="expandable-container">
    <div
      className={`bg-gray-100 h-full duration-300 overflow-hidden ${
        isOpen ? "laptop:w-72 w-96" : "w-0"
      }`}
    >
      {children}
    </div>
    <div className="absolute top-[50%] -right-5  w-5 bg-gray-50 cursor-pointer h-[40px] flex flex-col justify-center">
      <div
        className={`
      relative 
      before:absolute before:-top-[26px] before:left-0 before:border-t-[20px] before:border-l-[20px] before:border-l-gray-50
      after:absolute after:top-[30px] after:left-0 after:border-b-[20px] after:border-l-[20px] after:border-l-gray-50
      `}
      ></div>
      <img
        src={arrowLeftIcon}
        onClick={onClick}
        className={`${isOpen ? "" : "rotate-180"} duration-300`}
      />
    </div>
  </div>
);

export default ExpandableContainer;
