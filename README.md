# Electron & React
## 기본 세팅
### electron.js (Entry Point)
>./public/electron.js 파일 참조
### package.json
>"main": "public/electron.js", // Entry Point 에 대한 경로 설정
"homepage": "./", // 이 설정 없으면 빌드 시 경로를 못찾아서 하얀 화면만 출력됨.
<br>
"scripts": {
    "start": "concurrently \"cross-env BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "yarn react-build && electron-builder",
    "build:electron": "tsc ./public/electron.ts",
    "clean": "rm -rf .cache build dist",
}
>

### node_module 추가
> "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.11.0",
    "@typescript-eslint/parser": "^4.11.0",
    "concurrently": "^5.3.0",
    "cross-env": "^7.0.3",
    "electron": "^11.1.1",
    "electron-builder": "^22.9.1",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.0",
    "prettier": "^2.2.1",
    "wait-on": "^5.2.0"
  }
>


