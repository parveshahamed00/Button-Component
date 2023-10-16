import "./App.css";
import Btngroup from "./components/Button-group";
function App() {
  var cart = <i class="bi bi-cart4"></i>;
  return (
    <div className="App">
      <h1>Button Components</h1>
      <div className="container">
        <div className="sub-container">
          <Btngroup ds="<Button />" txt="Default" cname="disable"></Btngroup>
          <Btngroup
            ds="&:hover  &:focus"
            txt="Default"
            cname="disable-hover"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds='<Button varient="outline" />'
            txt="Default"
            cname="outline"
          ></Btngroup>
          <Btngroup
            ds="&:hover  &:focus"
            txt="Default"
            cname="outline-hover"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds='<Button varient="text" />'
            txt="Default"
            cname="text"
          ></Btngroup>
          <Btngroup
            ds="&:hover  &:focus"
            txt="Default"
            cname="text-hover"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds="<Button disableShadow />"
            txt="Default"
            cname="disableShadow"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds="<Button disabled />"
            txt="Default"
            cname="disabled"
          ></Btngroup>
          <Btngroup
            ds='<Button  varient="text disabled" />'
            txt="Default"
            cname="disabled-text"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds='<Button   startIcon="local_grocary_store" />'
            txt={[<i class="bi bi-cart4"></i>, " Default"]}
            cname="store"
          ></Btngroup>
          <Btngroup
            ds='<Button  endIcon="local_grocary_store" />'
            txt={["Default ", <i class="bi bi-cart4"></i>]}
            cname="store"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
          <Btngroup
            ds='<Button size="sm" />'
            txt="Default"
            cname="size sm"
          ></Btngroup>
          <Btngroup
            ds='<Button size="md" />'
            txt="Default"
            cname="size md"
          ></Btngroup>
          <Btngroup
            ds='<Button size="lg" />'
            txt="Default"
            cname="size lg"
          ></Btngroup>
        </div>
        {/*  */}
        <div className="sub-container">
        <Btngroup
            ds='<Button color="default" />'
            txt="Default"
          ></Btngroup>
          <Btngroup
            ds='<Button color="primary" />'
            txt="Primary"
            cname="size"
          ></Btngroup>
          <Btngroup
            ds='<Button color="secondary" />'
            txt="Secondary"
            cname="secondary"
          ></Btngroup><Btngroup
          ds='<Button color="danger" />'
          txt="Danger"
          cname="danger"
        ></Btngroup>
          </div>
          {/*  */}
          <div className="sub-container">
        <Btngroup
            ds='&:hover, &:focus'
            txt="Default"
            cname="default-hover"
          ></Btngroup>
          <Btngroup
            ds='&:hover, &:focus'
            txt="Primary"
            cname="size primary-hover"
          ></Btngroup>
          <Btngroup
            ds='&:hover, &:focus'
            txt="Secondary"
            cname="secondary secondary-hover"
          ></Btngroup><Btngroup
          ds='&:hover, &:focus'
          txt="Danger"
          cname="danger danger-hover"
        ></Btngroup> 
          </div>
      </div>
      <div className="footer">
        <p>Created by Parvesh Ahamed -devChallenges.io</p>
      </div>
    </div>
  );
}

export default App;
