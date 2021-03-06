
module.exports.config = {

    useAllAngular2AppRoots: true,
    //specs: '*_spec.js',
    specs: 'RecycleBinPage_spec.js',
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
    onPrepare: function () {

    let Reporter = require('./helper/Reporter.js').Reporter
      
      beforeEach(function () {
      browser.get('')
      browser.sleep(5000)
      
    })
    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
            })
        })
    }
}