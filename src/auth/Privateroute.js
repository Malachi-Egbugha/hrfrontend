import { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated, hrAuthenticated, unitheadAuthenticated} from './index';

export const PrivateRoute = ({component: Component, ...rest})=>(
    <Route {...rest} render={props =>
         isAuthenticated()? (
         <Component {...props}/>
         ): (
             <Redirect
             to={{
                 pathname: "/hrsystem",
                 state:{from: props.location}
             }}
             />
         )
        }
        />
);

export const HrPrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => 
        hrAuthenticated()? (
            <Component {...props}/>
        ):(
            <Redirect 
            to={{
                pathname: "/hrsystem/hrdashboard",
                state:{from: props.location}

            }}
             />
        )

    }
    />

);


export const UnitHeadPrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => 
        unitheadAuthenticated()? (
            <Component {...props}/>
        ):(
            <Redirect 
            to={{
                pathname: "/hrsystem/hrdashboard",
                state:{from: props.location}

            }}
             />
        )

    }
    />

);