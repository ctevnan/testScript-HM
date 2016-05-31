describe("testScript-HM", function(){
  it("should have a title", function(){
    browser.get("https://github.com/ctevnan/testScript-HM.git")
    expect(browser.getTitle()).toEqual("Test");
  })
})