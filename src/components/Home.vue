<template>
<div>
    <h1>LOCK CENTER</h1>
    
    <v-btn x-small @click="demo2" color="info">
        demogeturl
        <v-icon right dark>mdi-arrow-right-bold</v-icon>
    </v-btn>
</div>
</template>

<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
       
        demo2() {

            const fs = require('fs');

            // specify the path to the file, and create a buffer with characters we want to write
            let path = './aaaa.txt';
            let buffer = new Buffer('Those who wish to follow me\nI welcome with my hands\nAnd the red sun sinks at last');

            // open the file in writing mode, adding a callback function where we do the actual writing
            fs.open(path, 'w', function (err, fd) {
                if (err) {
                    throw 'could not open file: ' + err;
                }

                // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
                fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                    if (err) throw 'error writing file: ' + err;
                    fs.close(fd, function () {
                        alert('wrote the file successfully');
                    });
                });
            });
        }
    }
}
</script>
