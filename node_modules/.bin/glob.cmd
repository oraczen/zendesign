@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@next\eslint-plugin-next\node_modules\glob\dist\esm\bin.mjs" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@next\eslint-plugin-next\node_modules\glob\dist\esm\bin.mjs" %*
)