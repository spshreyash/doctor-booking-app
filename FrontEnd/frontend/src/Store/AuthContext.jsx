import {  createContext, useEffect, useReducer } from "react"

export  const AuthContext=createContext()
    const intialState={
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,

        role:localStorage.getItem("role") || null,
        token:localStorage.getItem("token") || null
    }


    const authReducer=(state,action)=>
    {
        switch (action.type) {
            case 'LOGIN_START':
                return{
                    user:null,
                   role:null,
                    token:null ,
                }       ;

                case'LOGIN_SUCCESS':
                return{
                    user:action.payload.user,
                    role:action.payload.role,
                     token:action.payload.token ,  
                }

                case'LOGOUT':
                return{
                    user:null,
                   role:null,
                    token:null ,
                }
                
                
        
            default:
                return state;
        }
    }

    export const AuthContxtProvider=({children})=>
    {
        const [state,dispatch]=useReducer(authReducer,intialState   )
        console.log("Auth Context State: ", JSON.stringify(state, null, 2));

        useEffect(()=>
        {
            localStorage.setItem("user",JSON.stringify(state.user))
            localStorage.setItem("token", state.token);
            localStorage.setItem("role", state.role);

        },[state])


        return(
            <AuthContext.Provider value={{user:state.user , token:state.token , role:state.role, dispatch}}>{children} </AuthContext.Provider>
        )
    }
