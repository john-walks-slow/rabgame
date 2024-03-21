@echo off
setlocal

cd /D %~dp0
mkdir compressed
@REM Support format: mp3 wav ogg gif. Others will be converted to webp.
@REM For every file that is dragged to this bat
for %%F in (%*) do (
    if "%%~xF" == ".gif" (
        ffmpeg -i %%F -vf "fps=15" -loop 0 -pix_fmt yuva420p -qscale:v 35 -compression_level 5 -quality 60 -preset drawing compressed\%%~nF.webp
    ) else if "%%~xF" == ".mp3" (
        ffmpeg -i %%F -c:a libopus -b:a 64k compressed\%%~nF.ogg
    ) else if "%%~xF" == ".wav" (
        ffmpeg -i %%F -c:a libopus -b:a 64k compressed\%%~nF.ogg
    ) else if "%%~xF" == ".ogg" (
        ffmpeg -i %%F -c:a libopus -b:a 64k compressed\%%~nF.ogg
    ) else (
        ffmpeg -i %%F -pix_fmt yuva420p -qscale:v 70 -preset drawing compressed\%%~nF.webp
    )
)
endlocal
pause