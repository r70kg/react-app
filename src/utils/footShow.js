//  显隐底部footer
export function footShow(){
    let pathnameArr = ['/index','/my']
    let _path = window.location.pathname
    // return pathnameArr.indexOf(_path)===-1 ? "block" : "none"
    return "block"
}