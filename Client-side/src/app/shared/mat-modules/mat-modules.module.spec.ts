import { MatModulesModule } from './mat-modules.module';

describe('MatModulesModule', () => {
  let matModulesModule: MatModulesModule;

  beforeEach(() => {
    matModulesModule = new MatModulesModule();
  });

  it('should create an instance', () => {
    expect(matModulesModule).toBeTruthy();
  });
});
