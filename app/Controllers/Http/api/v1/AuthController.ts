import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from "App/Validators/RegisterValidator"
import BaseController from 'App/Controllers/BaseController';
import LoginValidator from 'App/Validators/LoginValidator';
import User from 'App/Models/User';
export default class AuthController extends BaseController {
   public async register({response,request}:HttpContextContract){
     try{
      let data=await request.validate(RegisterValidator);
      delete data['confirm_password'];
      let result=await User.create(data);
      return this.sendResponse(response,'success',result,200);
     }catch(error){
      return this.sendError(response,error,500);
     }

   }

   public async login({request,auth,response}){
      try{
        let data=await request.validate(LoginValidator);
        const email = request.input("email");
        const password = request.input("password");
        const token = await auth.use("api").attempt(email, password, {
          expiresIn: "10 days",
        });
        if(token){
          return response.status(200).json({
            message:"Login successfully",
            result:token,
            code:200
          });


        }else{
          return response.json({
            message:"Login credential is invalid",
            code:200,
           });
        }

      }catch(error){
        return this.sendError(response,error,500);
      }

   }

    public async forgetPassword(){

    }

    public async sendForgetPasswordOTP(){

    }

    public async resetPassword(){

    }

    public async changeProfile(){

    }


}
