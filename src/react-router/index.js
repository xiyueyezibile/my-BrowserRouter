import { useContext, useEffect, useState } from "react"
import React from "react"
export const RouterContext = React.createContext("/")
export const BrowserRouter = (props)=>{
  // 获取路径
  const [path,setPath] = useState(window.location.pathname)
  const changePath = ()=>{
    setPath(window.location.pathname)
  }
  useEffect(() => {
    window.addEventListener("popstate", changePath);
    return () => {
      window.removeEventListener("popstate", changePath);
    };
  }, []);
  return <RouterContext.Provider value={path}>
    {props.children}
  </RouterContext.Provider>
}
export const Route = (props)=>{
  const {path,element} = props
  // 二级路由地址
  const childrenPath = props.children?`${props.path}${props.children.props.path?props.children.props.path:''}`:''
  console.log(props);
  const RoutePath = useContext(RouterContext)
  console.log('RoutePath ==> ',RoutePath);
  // path === undefined 代表是布局路由
  console.log('path ==> ',path);
  console.log('childrenPath ==> ',childrenPath);
  return <>
  {path === RoutePath || path === undefined? element : null}
  {childrenPath === RoutePath? element:null}
  {childrenPath === RoutePath? props.children.props.element:null}
  </>
}