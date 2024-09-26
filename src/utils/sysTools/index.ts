export const getSysName = () =>{
  //TODO
  return ''
}
interface RouteStyle {
  navigationBarTitleText:string;
  [key:string]:any
}
interface RouterListItem {
  path:string
  style:RouteStyle
}
export const getPageTitle = (routeList:RouterListItem[],routePath: string) =>{
  const findTitle = routeList.find((f)=>f.path === routePath)
  return findTitle?.style.navigationBarTitleText
}