// https://www.npmjs.com/package/ss2json 참고
const ss2json = new (require('ss2json'))()
var fs = require('fs');

ss2json.convert({
    authJsonPath: 'jsonkey.json', // 
    spreadsheetId: '13pgRC2PQXCo4frpJOciy74ryVCei13LzggwdCIVWy1w',
    sheetName: '설문지 응답 시트1'
  }).then((data) => {
    // filteredData : 개행문자 반영한 것(data변수는 \n으로 표현되어 있음)
    var filteredData = JSON.stringify(data).replace(/\\n/gi, '<br>');
    fs.writeFile('../data/database.json',"{\"clubs\":"+filteredData + "}",'utf8',function(err){
        if(err) {
            next(err);
        }else{
            //console.log(data);
        }
    });
  });
