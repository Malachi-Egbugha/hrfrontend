//check if is current path
export const isActive = (history, path) =>{
  let activate = (history.location.pathname === path) ? true : false;
  return activate;

};







