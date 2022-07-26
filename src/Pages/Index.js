import Transactions from "../Components/Transactions";

export default function Index () {

  return (
    <>
      <div className="index">
      <h2>Bank Account Total: </h2>
      <Transactions />
    </div>
    </>
  );
}