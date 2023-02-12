describe('Gameのテスト', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('どちらかのプライヤーが勝利し、勝者の名が表示される', () => {
    cy.get('[data-square-id="2"]').click();
    cy.get('[data-square-id="3"]').click();
    cy.get('[data-square-id="5"]').click();
    cy.get('[data-square-id="7"]').click();
    cy.get('[data-square-id="8"]').click();
    cy.get('#result').contains('Winner: X');
  });

  it('引き分けの場合、Drawの表示がされる', () => {
    cy.get('[data-square-id="0"]').click();
    cy.get('[data-square-id="1"]').click();
    cy.get('[data-square-id="2"]').click();
    cy.get('[data-square-id="4"]').click();
    cy.get('[data-square-id="7"]').click();
    cy.get('[data-square-id="8"]').click();
    cy.get('[data-square-id="5"]').click();
    cy.get('[data-square-id="3"]').click();
    cy.get('[data-square-id="6"]').click();
    cy.get('#result').contains('Draw');
  });
});
