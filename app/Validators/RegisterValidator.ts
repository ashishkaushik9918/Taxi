import { schema, CustomMessages,rules,validator,ValidationException } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {
     console.log(this.ValidationException);

  }


  public schema = schema.create({
    name:schema.string(),
    email:schema.string(),
    password: schema.string([
      rules.minLength(8),
      rules.maxLength(15),
      rules.confirmed('confirm_password'),
    ]),
    confirm_password:schema.string([
      rules.minLength(8),
      rules.maxLength(15),

    ]),

    phone_number: schema.string([
      rules.maxLength(10),
      rules.minLength(10)
    ]),
  })

  public ValidationException={

  }
  public messages: CustomMessages = {
    "name.required":"Name is required",
    "email.required":"Email is required",
    "password.required":"Password is required",
    "password.confirmed":"Confirm password is required",
    "confirm_password.required":"Confirm password is required",
    "phone_number.required":"Phone number is required",



  }
}
