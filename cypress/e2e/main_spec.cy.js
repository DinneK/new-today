describe("Today's News home page flows", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QaJMSA9OAdFpR7WiANUBbJsM12ynbRE0",
      {
        statusCode: 200,
        ok: true,
        fixture: "articles",
      }
    );
    cy.visit("http://localhost:3000");
  });

  it("Should be able to visit the home page and render the correct elements", () => {
    cy.get("h1").contains("Today's News");
  });

  it("Should show article cards", () => {
    cy.get(".article-cards > :nth-child(1)")
      .get(":nth-child(1) > .news-section")
      .contains("Section")
      .get(":nth-child(1) > .article-title");
  });

  it("Should be able to search for an article by title", () => {
    cy.get("input")
      .type("geo")
      .get(".thumbnail")
      .get(".article-title")
      .contains("George Santos");
  });

  it("Should be able to go to an individual article", () => {
    cy.get("input").type("geo").get(".link-to-details").click();
  });
});
