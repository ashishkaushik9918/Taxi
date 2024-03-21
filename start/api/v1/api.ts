import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
//---------------------------------------- AUTH ROUTING START HERE ------------------------------------------//
Route.post("/register","api/v1/AuthController.register");
Route.post("/login","api/v1/AuthController.login");
//--------------------------------------- END AUTH ROUTING ENG HERE -----------------------------------------//
}).prefix("api/v1");
