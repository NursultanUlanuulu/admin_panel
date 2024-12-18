// import { Roles } from "@/shared/enums";

import { Roles } from "../../enums";

export function getRole(role: Roles) {
  let result = "";
  switch (role) {
    case Roles.SuperAdmin:
      result = "Админ";
      break;
    case Roles.Manager:
      result = "Менеджер";
      break;
    default:
      result = "";
      break;
  }
  return result;
}
