import { useEffect } from "react";
import ExpenseBar from "../components/ExpenseBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthForm } from "../redux/slices/authFormSlice";
import { toggleEntryForm } from "../redux/slices/entryFormSlice";
import { getExpenses, deleteAllExpenses } from "../redux/thunks/expenseThunks";

const BarChart = () => {
  const { barData, totalExpenses } = useSelector(
    (state: any) => state.expenses
  );
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses({ userId: userData.id }));
  }, [totalExpenses]);

  const addData = () => {
    if (!userData || !userData.id) {
      dispatch(toggleAuthForm(true));
    } else {
      dispatch(toggleEntryForm("Expense"));
    }
  };

  return (
    <div className="grid-item flex flex-col items-center justify-start relative">
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="font-[600] self-start">Total Expenses</h3>
        <div className="flex items-center">
          {totalExpenses > 0 && (
            <button
              onClick={() => dispatch(deleteAllExpenses(userData.id))}
              className="mr-2"
            >
              <span className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200">
                autorenew
              </span>
            </button>
          )}
          <button onClick={addData}>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <p className="self-start text-2xl font-bold mb-4">{totalExpenses}€</p>
      <div className="flex flex-col items-center justify-start w-full h-full">
        {barData?.data?.map((bar) => (
          <ExpenseBar expense={bar} key={bar._id} />
        ))}
      </div>
      <div className="flex items-center justify-center"></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"></p>
    </div>
  );
};

export default BarChart;
