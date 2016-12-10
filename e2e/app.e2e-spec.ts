import { BuildstatePage } from './app.po';

describe('buildstate App', function() {
  let page: BuildstatePage;

  beforeEach(() => {
    page = new BuildstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
