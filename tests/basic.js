var fs = require('fs');

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://statisfy.wedinweb.no')
      .waitForElementVisible('#username', 1000)
      .setValue('input[type=text]', 'rj')
      .click('button.button')
      .waitForElementVisible('.ReactListScroll', 1000)
      .pause(5000)
      .getText('.ReactListScroll .tr', function (result) {
        console.log(result);
        fs.writeFileSync('resultat.txt', result.value.split('\n')[0]+' - '+result.value.split('\n')[1]+'\r\n', {flag: 'a+'});
        this.assert.equal(result.status, 0);
      })
      .end();
  }
};
