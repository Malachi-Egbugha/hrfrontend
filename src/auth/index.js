export const isActive = (history, path) =>{
  let activate = (history.location.pathname === path) ? true : false;
  return activate;

};



