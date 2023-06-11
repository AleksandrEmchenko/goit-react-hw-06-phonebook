import { useSelector, useDispatch } from "react-redux";
import { myFilter } from "../redux/actions";

import { FilterFild } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.myFilter);

  const onChange = (filter) => dispatch(myFilter(filter));

  return (
    <label>
      Find contacts by name
      <br />
      <FilterFild
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}
export default Filter;
