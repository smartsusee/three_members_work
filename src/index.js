import React from "react";
import ReactDOM from "react-dom/client";
// import DemoFun from "./practice";
// import File2 from "./secondFile";
// import "./indexFile.css";
// import ProdectFile from "./prodectFile";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProdectFunction from "./30-12-25_props/ProdectFunction";
// import ParentRouter from "./31-12-25_router/ParentRouter";
// import UseEffectCom from "./1-2-25_map_useEffect/UseEffectCom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormDataCollect from "./FormDataCollection/FormDataCollect";
import ReducerFun from "./12-1-26_reducer/reducerFun";
import UseRefFun from "./14-1-26_useRefHook/UseRefFun";
import "./14-1-26_useRefHook/refStyle.css";
import MainParentFile from "./ApiIntegration/MainParentFile";
import { Provider } from "react-redux";
import ReduxUi from "./24-1-26-redux/ReduxUi";
import store from "./24-1-26-redux/store";
import MainFileAddtoCart from "./29-1-26_addtocart/component/pages/mainFileAddtoCart";
import HocMain from "./hocMain";
import ParentComponent from "./grudoubts/ParentComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <DemoFun />
    <File2 /> */}
    {/* <ProdectFile /> */}
    {/* <ProdectFunction /> */}
    {/* <ParentRouter /> */}
    {/* <UseEffectCom /> */}
    {/* <FormDataCollect /> */}
    {/* <ReducerFun /> */}
    {/* <UseRefFun /> */}
    {/* <MainParentFile /> */}

    {/* <Provider store={store}>
      <ReduxUi />
      
    </Provider> */}
    {/* <HocMain /> */}
    {/* <MainFileAddtoCart /> */}
    <ParentComponent />
  </>,
);
