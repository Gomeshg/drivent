import { ApplicationError } from "@/protocols";

export function badRequestError(entity: string): ApplicationError {
  return {
    name: "BadRequestError",
    message: `The request has a problem with the ${entity}`,
  };
}
