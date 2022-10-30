import plusIcon from "../../../../assets/images/plus.png";
import minusIcon from "../../../../assets/images/minus.png";
import arrowUpIcon from "../../../../assets/images/arrow-up.png";

const BottomActions = () => (
  <div className="flex gap-2">
    <div className="flex flex-col gap-1">
      <button
        className="bg-white rounded-sm p-1"
        onClick={() => console.log("Clicked: plus icon")}
      >
        <img src={plusIcon} height={20} width={20} />
      </button>
      <button
        className="bg-white rounded-sm p-1"
        onClick={() => console.log("Clicked: minus icon")}
      >
        <img src={minusIcon} height={20} width={20} />
      </button>
    </div>
    <div className="bg-white rouded-md flex flex-col items-center justify-center gap-1">
      <button
        className="h-4"
        onClick={() => console.log("Clicked: arrow up icon")}
      >
        <img src={arrowUpIcon} height={20} width={20} />
      </button>
      <div className="h-4 flex gap-4">
        <button
          className="-rotate-90"
          onClick={() => console.log("Clicked: arrow left icon")}
        >
          <img src={arrowUpIcon} height={20} width={20} />
        </button>
        <button
          className="rotate-90"
          onClick={() => console.log("Clicked: arrow right icon")}
        >
          <img src={arrowUpIcon} height={20} width={20} />
        </button>
      </div>
      <button
        className="rotate-180 h-4"
        onClick={() => console.log("Clicked: arrow bottom icon")}
      >
        <img src={arrowUpIcon} height={20} width={20} />
      </button>
    </div>
  </div>
);

export default BottomActions;
