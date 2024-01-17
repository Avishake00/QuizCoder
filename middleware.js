import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  
    const path=request.nextUrl.pathname;//this is the path the we want to redirect

    const isPublicPath=path ==='/Login' || path === '/Signup' 

    const token =request.cookies.get('token') ?.value ||''
    
    //if there is token available in the cookie and we want to move to signin of login then it will redirect to /dashboard
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/dashboard',request.nextUrl))
    }
    //if there is no token and we want to move to another router rather than signin or login then it will redirect to home page
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:[
    '/Login',
    '/Signup',
    '/dashboard'
  ] 
}