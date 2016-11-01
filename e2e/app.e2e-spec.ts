import { ClockStepByStepPage } from './app.po';

describe('clock-step-by-step App', function() {
  let page: ClockStepByStepPage;

  beforeEach(() => {
    page = new ClockStepByStepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
