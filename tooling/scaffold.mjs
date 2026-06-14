// Scaffold d'un projet natif (Capacitor=Android, Electron=desktop) pour la ludotheque PGRG.
// Assemble le portail (website/index.html) + les 65 jeux + brand + shared dans www/,
// en corrigeant les chemins relatifs, puis ecrit la config Capacitor ou Electron.
// Calque sur le pipeline freeforge-build, adapte a UNE seule app (ca.pgrg.jeux).
import fs from 'fs';
import path from 'path';

const [, , target, outDir] = process.argv;
if (!target || !outDir) { console.error('usage: scaffold.mjs <android|electron> <outDir>'); process.exit(2); }

const root = process.cwd();
const appName = 'Jeux educatifs PGRG';
const bundle = 'ca.pgrg.jeux';

fs.rmSync(outDir, { recursive: true, force: true });
const www = path.join(outDir, 'www');
fs.mkdirSync(www, { recursive: true });

function cp(src, dst) {
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (e.name === '_TEMPLATE') continue;
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); cp(s, d); }
    else fs.copyFileSync(s, d);
  }
}
for (const dir of ['games', 'brand', 'shared']) {
  const src = path.join(root, dir);
  if (fs.existsSync(src)) { fs.mkdirSync(path.join(www, dir), { recursive: true }); cp(src, path.join(www, dir)); }
}

// Le portail devient www/index.html ; on adapte ../games/ -> games/ et ../brand/ -> brand/
let portal = fs.readFileSync(path.join(root, 'website', 'index.html'), 'utf8');
portal = portal.replace(/\.\.\/games\//g, 'games/').replace(/\.\.\/brand\//g, 'brand/');
fs.writeFileSync(path.join(www, 'index.html'), portal);

if (target === 'android') {
  fs.writeFileSync(path.join(outDir, 'capacitor.config.json'),
    JSON.stringify({ appId: bundle, appName, webDir: 'www', server: { androidScheme: 'https' } }, null, 2));
  fs.writeFileSync(path.join(outDir, 'package.json'),
    JSON.stringify({ name: 'jeux-pgrg', version: '1.0.0', private: true,
      devDependencies: { '@capacitor/cli': '^6.1.2' },
      dependencies: { '@capacitor/core': '^6.1.2', '@capacitor/android': '^6.1.2' } }, null, 2));
} else {
  const main = "const{app,BrowserWindow}=require('electron');const path=require('path');" +
    "function w(){const win=new BrowserWindow({width:1120,height:840,title:" + JSON.stringify(appName) +
    ",backgroundColor:'#0f4c81',webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});" +
    "win.setMenuBarVisibility(false);win.loadFile(path.join(__dirname,'www','index.html'));}" +
    "app.whenReady().then(()=>{w();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)w();});});" +
    "app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});";
  fs.writeFileSync(path.join(outDir, 'main.js'), main);
  fs.writeFileSync(path.join(outDir, 'package.json'),
    JSON.stringify({ name: 'jeux-pgrg', version: '1.0.0', description: appName, main: 'main.js',
      scripts: { dist: 'electron-builder' },
      devDependencies: { electron: '^31.7.7', 'electron-builder': '^24.13.3' },
      build: { appId: bundle, productName: appName, directories: { output: 'dist' },
        files: ['main.js', 'www/**/*'],
        win: { target: 'nsis' },
        mac: { target: 'dmg', category: 'public.app-category.education' },
        linux: { target: 'AppImage', category: 'Education' } } }, null, 2));
}
console.log('scaffolded', target, '->', outDir);
