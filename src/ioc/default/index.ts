import { Container, injectable } from 'inversify';
import { LoginFormController, LoginFormModel } from '../../components/LoginForm';

const container = new Container();

@injectable()
export class DefaultUserLoginFormModal implements LoginFormModel {
  public getDefaultUser(): string {
    return 'admin@test.com';
  }
}

@injectable()
export class DefaultUserLoginFormController implements LoginFormController {
  public login() {
    console.log('Login in as default user');
  }
}

container.bind<LoginFormModel>('LoginFormModel').to(DefaultUserLoginFormModal);
container.bind<LoginFormController>('LoginFormController').to(DefaultUserLoginFormController);

export { container };
