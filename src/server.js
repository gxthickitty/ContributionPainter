const express = require('express');
const { execSync } = require('child_process');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', (req, res) => {
    const { pixels } = req.body; 
    const startDate = moment().subtract(1, 'years').startOf('week');

    console.log(`Starting paint job for ${pixels.length} pixels...`);

    pixels.forEach(pixel => {
        const date = moment(startDate).add(pixel.x, 'weeks').add(pixel.y, 'days').format();
        const intensity = pixel.intensity || 1; 

        for (let i = 0; i < intensity; i++) {
            fs.writeFileSync('pt.txt', `Pixel: ${pixel.x},${pixel.y} - Commit: ${i} - ${date}`);
            const cmd = `set "GIT_AUTHOR_DATE=${date}" && set "GIT_COMMITTER_DATE=${date}" && git add pt.txt && git commit -m "gxthickitty art contribution"`;
            
            try {
                execSync(cmd, { shell: 'cmd.exe' });
            } catch (e) {
                // skip fails silently cause I want to stay sane 
            }
        }
    });

    console.log("Done! You can now run 'git push origin main'");
    res.send({ message: "Success! Check your terminal and run 'git push origin main'." });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
