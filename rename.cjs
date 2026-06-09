const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'public', 'projects');

const projects = ['babel-itca', 'castor', 'giv-pesados', 'hirelance', 'jurassicswim', 'meditech', 'plataforma-inteligente'];

projects.forEach(project => {
  const dirPath = path.join(projectsDir, project);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file, index) => {
      // get extension
      const ext = path.extname(file);
      const oldPath = path.join(dirPath, file);
      const newPath = path.join(dirPath, `${index + 1}${ext}`);
      
      // avoid renaming if already 1.png etc
      if (file !== `${index + 1}${ext}`) {
        fs.renameSync(oldPath, newPath);
      }
    });
  }
});

console.log('Renaming complete');
