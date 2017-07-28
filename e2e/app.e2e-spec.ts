import { GameTimePage } from './app.po';

describe('game-time App', () => {
  let page: GameTimePage;

  beforeEach(() => {
    page = new GameTimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
