import { UserUsecase } from "./application/usecases/user.usecase";
import { InMemoryUserRepository } from "./infrastructure/in_memory/InMemoryUserRepository";
import { serve } from "./presentation/express/main";

const repository = new InMemoryUserRepository();
const userUsecase = new UserUsecase(repository);

serve(userUsecase);
