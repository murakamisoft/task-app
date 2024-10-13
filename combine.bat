@echo off
setlocal enabledelayedexpansion

rem 出力ファイル名を指定
set outputFile=combined.txt

rem 出力ファイルを初期化（既存の内容を削除）
> "%outputFile%" (
    rem 最初のファイルを追加
    echo 以下が最新のソース一覧
)

for /r %%f in (*.jsx) do (
    echo Adding %%f...
    echo ----- %%f ----- >> "%outputFile%"
    type "%%f" >> "%outputFile%"
    echo. >> "%outputFile%"  
    rem 空行を追加
)

echo All files combined into %outputFile%.
endlocal
pause
