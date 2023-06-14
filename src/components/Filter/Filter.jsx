import { useSelector, useDispatch } from "react-redux";
import { myFilter } from "../redux/actions";
// import { getFilter } from "components/redux/selector";
import { FilterFild } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters);
  // const filter = useSelector(getFilter);


  // const onChange = (event) => dispatch(myFilter(event.target.value));

  return (
    <label>
      Find contacts by name
      <br />
      <FilterFild
        type="text"
        name="filter"
        value={filter.value}
        // onChange={onChange}
      />
      {/* <button onClick={onChange}>filter</button> */}
    </label>
    
  );
}
export default Filter;