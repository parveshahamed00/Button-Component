import Descreption from "./Descreption";
import Button from "./Button";
function Btngroup(props) {
  return (
    <div className="btn-group">
     <Descreption ds={props.ds} ></Descreption>
     <Button txt={props.txt} cname={props.cname}></Button>
    </div>
  );
}
export default Btngroup;
