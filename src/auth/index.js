//check if is current path
export const isActive = (history, path) =>{
  let activate = (history.location.pathname === path) ? true : false;
  return activate;

};
//check if user is from hr department
export const isHr = () =>{
  let {user} = JSON.parse(localStorage.getItem('usersign'));
  let activate = (user.department == 'hr') ? true : false;
  return activate;

};
//check is user is a unit head
export const isUnitHead = () =>{
  let {user} = JSON.parse(localStorage.getItem('usersign'));
  let activate = (user.designation == 'unithead') ? true : false;
  return activate;

};
//check if user is signed in
export const authenticate = (data, next) =>{
  if(typeof window !== 'undefine'){
    localStorage.setItem('usersign', JSON.stringify(data));
    next();

  }
};
//check if user is signed in
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
//check is user is in hr department
export const hrAuthenticated = () =>{
  if(typeof window == 'undefine'){
    return false;

  }
  if(localStorage.getItem('usersign'))
  {
    
    let {user} = JSON.parse(localStorage.getItem('usersign'));
    if(user.department == 'hr')
    {
      return JSON.parse(localStorage.getItem('usersign'))

    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
};
//check if user is a unit head
export const unitheadAuthenticated = () =>{
  if(typeof window == 'undefine'){
    return false;

  }
  if(localStorage.getItem('usersign'))
  {
    
    let {user} = JSON.parse(localStorage.getItem('usersign'));
    if(user.designation == 'unithead')
    {
      return JSON.parse(localStorage.getItem('usersign'))

    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
};

//check is user is head of department
//check if user is HR head











