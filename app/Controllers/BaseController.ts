import User from "App/Models/User";
export default class BaseController{
public sendResponse(response,message='success',data:User, code=200){
  return response.status(code).json({
    message:message,
    data:data,
    code:code,
});
}

public sendError(response,message='',code=500){
  return response.status(code).json({
    message:message,
    code:code,
  });
}

public sendResponseToken(response,message='success',data:User, token='',code=200){
  return response.status(code).json({
    message:message,
    data:data,
    token:token,
    code:code,
});
}


}
