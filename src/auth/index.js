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
  console.log('done');
  if(typeof window == 'undefine'){
    return false;

  }
  console.log('done');
  if(localStorage.getItem('usersign'))
  {
    
    let {user} = JSON.parse(localStorage.getItem('usersign'));
    console.log(user.department);
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

//check is user is head of department
//check if user is HR head











