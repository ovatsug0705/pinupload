"%USERPROFILE%\AppData\Roaming\npm\ng.cmd" build --prod --base-href /pinupload/ && ^
copy /y src\404.html dist\pinupload && ^
git add -f dist && ^
git commit -m %1 && ^
git subtree push --prefix=dist/pinupload origin gh-pages

REM Compila o projeto Angular para deploy.
REM Este comando gera ou atualiza a pasta /dist
REM "%USERPROFILE%\AppData\Roaming\npm\ng.cmd" build --base-href /pinupload/

REM Adicionar a pasta /dist para ser enviada ao GitHub.
REM A opção -f força a adição mesmo se o caminho estiver
REM configurado no arquivo .gitignore
REM SOMENTE SERÁ EXECUTADO SE O ANTERIOR NÃO RETORNAR ERRO
REM (ERRORLEVEL 0)
REM IF %ERRORLEVEL% EQU 0 (
REM   git add -f dist
REM)

REM Commit com mensagem. %1 será substituído pela mensagem
REM IF %ERRORLEVEL% EQU 0 (
REM   git commit -m %1
REM)

REM Envio dos arquivos para o servidor. Vamos enviar apenas
REM os arquivos debaixo de /dist (subtree), ignorando o caminho
REM /dist/pinupload no caminho do repositório. Os arquivos enviados
REM sairão localmente do branch origin para o branch gh-pages remoto
REM IF %ERRORLEVEL% EQU 0 (
REM   git subtree push --prefix=/dist/pinupload origin gh-pages
REM )