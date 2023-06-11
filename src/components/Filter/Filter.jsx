import { useSelector, useDispatch } from "react-redux";
import { myFilter } from "../redux/actions";

import { FilterFild } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);


  const onChange = (event) => dispatch(myFilter(event.target.value));

  return (
    <label>
      Find contacts by name
      <br />
      <FilterFild
        type="text"
        name="filter"
        value={filter.value}
        onChange={onChange}
      />
    </label>
  );
}
export default Filter;