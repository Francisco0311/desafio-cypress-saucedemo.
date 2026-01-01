describe('Fluxo de Compra - SauceDemo (Apresentação Lenta)', () => {
  
  // Aumentamos para 1.2 segundos para uma visualização bem clara
  const DELAY = 1200; 

  it('Deve realizar o checkout completo com sucesso', () => {
    // 1. Acessar o site
    cy.visit('https://www.saucedemo.com');
    cy.wait(DELAY);

    // 2. Login com digitação cadenciada (delay de 100ms entre cada letra)
    cy.get('[data-test="username"]').type('standard_user', { delay: 100 });
    cy.get('[data-test="password"]').type('secret_sauce', { delay: 100 });
    cy.wait(DELAY);

    cy.get('[data-test="login-button"]').click();
    cy.wait(DELAY);

    // 3. Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(DELAY);

    // 4. Ir para o carrinho
    cy.get('.shopping_cart_link').click();
    cy.wait(DELAY);

    // 5. Iniciar Checkout
    cy.get('[data-test="checkout"]').click();
    cy.wait(DELAY);

    // 6. Preencher dados de entrega (com digitação lenta)
    cy.get('[data-test="firstName"]').type('Francisco', { delay: 100 });
    cy.get('[data-test="lastName"]').type('Candidato', { delay: 100 });
    cy.get('[data-test="postalCode"]').type('01001000', { delay: 100 });
    cy.wait(DELAY);

    // 7. Etapas finais
    cy.get('[data-test="continue"]').click();
    cy.wait(DELAY);
    
    cy.get('[data-test="finish"]').click();
    cy.wait(DELAY);

    // 8. Validação Final
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
    
    // Espera final para o recrutador ver o sucesso
    cy.wait(DELAY);
  });
});