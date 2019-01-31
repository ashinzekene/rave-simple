import Rave from '../../rave';

describe('RAVE SIMPLE', () => {
  afterEach(() => {
    window.getpaidSetup = undefined;
  });
  beforeEach(() => {
    window.getpaidSetup = undefined;
  });

  it('Imports rave\'s live script', async () => {
    expect(typeof window.getpaidSetup).to.equal('undefined');
    const rave = Rave();
    await rave.init();
    cy.get('script').should('have.prop', 'src', 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js');
    expect(typeof window.getpaidSetup).to.equal('function');
  });

  it('Import rave\'s dev script when test option is set', async () => {
    expect(typeof window.getpaidSetup).to.equal('undefined');
    const rave = Rave({ test: true });
    await rave.init();
    cy.get('script').should('have.prop', 'src', 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js');
    expect(typeof window.getpaidSetup).to.equal('function');
  });

  it('Open rave modal', async () => {
    expect(typeof window.getpaidSetup).to.equal('undefined');
    const rave = Rave({ test: true });
    await rave.init();
    cy.get('iframe').should('exist');
    expect(typeof window.getpaidSetup).to.equal('function');
  });

  it('Close modal', async () => {
    expect(typeof window.getpaidSetup).to.equal('undefined');
    const rave = Rave({ test: true });
    await rave.init();
    cy.get('iframe').should('exist');
    expect(typeof window.getpaidSetup).to.equal('function');
    rave.close();
    cy.get('iframe').should('not.exist');
  });
});
