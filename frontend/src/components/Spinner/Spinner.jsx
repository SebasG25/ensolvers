import { ImSpinner2 } from "react-icons/im";
import  './Spinner.css';

export const Spinner = () => {
  return (
    <div className='spinner__spinner'>
      <ImSpinner2 className='spinner__spinning' size={60} />
    </div>
  );
}