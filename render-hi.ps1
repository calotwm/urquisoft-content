# render-hi.ps1 — exporta TODOS los PNG en alta resolución (factor de escala 2x) a export-hi/.
# Feed/carruseles/singles: 2160x2700 · Historias: 2160x3840
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$root = "C:\Users\camil\Urquisoft-Carrusel"
$outRoot = Join-Path $root "export-hi"

function Render-Hi($srcDir, $outDir, $size) {
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null
  Get-ChildItem "$srcDir\*.html" | Sort-Object Name | ForEach-Object {
    $out = Join-Path $outDir ($_.BaseName + ".png")
    $url = "file:///" + ($_.FullName -replace '\\','/')
    & $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=8000 --window-size=$size --screenshot="$out" $url 2>$null | Out-Null
  }
}

Write-Output "post 3..."
Render-Hi "$root\src" "$outRoot\post3" "1080,1350"
Write-Output "post 4..."
Render-Hi "$root\post4\src" "$outRoot\post4" "1080,1350"
Write-Output "carruseles plan v5..."
foreach ($n in 1..20) { $pn = "{0:D2}" -f $n; Render-Hi "$root\posts\post-$pn\src" "$outRoot\posts\post-$pn" "1080,1350" }
Write-Output "singles..."
foreach ($n in 1..26) { $pn = "{0:D2}" -f $n; Render-Hi "$root\singles\single-$pn" "$outRoot\singles\single-$pn" "1080,1350" }
Write-Output "historias (carpeta plana)..."
New-Item -ItemType Directory -Force -Path "$outRoot\stories-all" | Out-Null
foreach ($n in 1..15) {
  $pn = "{0:D2}" -f $n
  $f = "$root\stories\story-$pn\story.html"
  $out = "$outRoot\stories-all\story-$pn.png"
  $url = "file:///" + ($f -replace '\\','/')
  & $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=8000 --window-size=1080,1920 --screenshot="$out" $url 2>$null | Out-Null
}
Write-Output "EXPORT COMPLETO -> $outRoot"