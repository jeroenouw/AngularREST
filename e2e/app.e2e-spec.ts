import { AngularRestObservablePage } from './app.po';

describe('angular-rest-observable App', () => {
  let page: AngularRestObservablePage;

  beforeEach(() => {
    page = new AngularRestObservablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
