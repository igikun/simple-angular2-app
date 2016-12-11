import { SimpleAngular2AppPage } from './app.po';

describe('simple-angular2-app App', function() {
  let page: SimpleAngular2AppPage;

  beforeEach(() => {
    page = new SimpleAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
