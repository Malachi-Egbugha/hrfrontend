//check if is current path
export const isActive = (history, path) =>{
  let activate = (history.location.pathname === path) ? true : false;
  return activate;

};
export const authenticate = (data, next) =>{
  if(typeof window !== 'undefine'){
    localStorage.setItem('usersign', JSON.stringify(data));
    next();

  }
};
export const isAuthenticated = () =>{
  if(typeof window == 'undefine'){
    return false;

  }
  if(localStorage.getItem('usersign'))
  {
    return JSON.parse(localStorage.getItem('usersign'))
  }
  else{
    return false;
  }
};











