import { Container, injectable } from 'inversify';
import { LoginFormController, LoginFormModel } from '../../components/LoginForm';

const container = new Container();

@injectable()
export class AlternateLoginFormModal implements LoginFormModel {
  public getDefaultUser(): string {
    return 'rogerwaters@test.com';
  }
}

@injectable()
export class AlternateLoginFormController implements LoginFormController {
  public login() {
    console.log('Login in as test user');
  }
}

container.bind<LoginFormModel>('LoginFormModel').to(AlternateLoginFormModal);
container.bind<LoginFormController>('LoginFormController').to(AlternateLoginFormController);

export { container };
