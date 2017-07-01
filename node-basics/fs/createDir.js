var fs = require('fs');

if (fs.existsSync('.tmp')){
    console.log("Directory already exists....");
} else {
    fs.mkdir('.tmp', function(err) {
        if(err) {
            console.log(err);
        }
        console.log('Directory successfully created....');
    })

}