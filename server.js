const rp = require("request-promise");
const $ = require("cheerio");
var url = "https://www.cankaya-osman-12345.com";
const url = "https://www.cankayaosman.com";
const express = require("express");
var port = 3000;
var app = express();
var wikiUrls1 = "";
// cankayaosman branch'ine aittir.
//pull request changes
rp(url)
  .then(function (html) {
    //success!
    var wikiUrls = [];
    for (let i = 0; i < $("#menu-menu-1 > li > a", html).length; i++) {
      wikiUrls.push($("#menu-menu-1 > li > a", html)[i].attribs.href.toString());
    }
    var sf_wikiUrls = "";
    sf_wikiUrls = wikiUrls.toString();
    console.log(sf_wikiUrls);
    wikiUrls1 = wikiUrls;
  })
  .catch(function (err) {
    //handle error
  });
app.get("/", (req, res) => {
  res.type("json");
  var json = { values: wikiUrls1 };
  values = JSON.stringify(json);
  res.send(values);
});
app.listen(port, () => {
  console.log("Listening the 3000. port");
});
