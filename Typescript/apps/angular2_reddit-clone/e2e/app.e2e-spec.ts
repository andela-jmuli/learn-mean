import { Angular2RedditClonePage } from './app.po';

describe('angular2-reddit-clone App', function() {
  let page: Angular2RedditClonePage;

  beforeEach(() => {
    page = new Angular2RedditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
