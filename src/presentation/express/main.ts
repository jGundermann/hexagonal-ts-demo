import express, { Router } from "express";
import {
  CreateUserInfo,
  IUserUsecase,
} from "../../application/ports/userusercase.port";

export function serve(userUseCase: IUserUsecase) {
  const app = express();
  app.use(express.json());
  const port = 3000;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/users", users_router(userUseCase));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

function users_router(userUseCase: IUserUsecase): Router {
  const router = express.Router();

  router.get("/:id", async (req, res, next) => {
    return res.send(await userUseCase.get_user(req.params.id));
  });

  router.post("/", async (req, res) => {
    const user = await userUseCase.create_user(
      new CreateUserInfo(req.body.name)
    );
    return res.json(JSON.stringify(user));
  });

  return router;
}
