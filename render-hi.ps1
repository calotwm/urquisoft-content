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

# Render-Pdf — exporta a PDF (Chrome --print-to-pdf) para posts con keyword DM (pdf-keyword.txt).
function Render-Pdf($srcDir, $outDir) {
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null
  Get-ChildItem "$srcDir\*.html" | Sort-Object Name | ForEach-Object {
    $out = Join-Path $outDir ($_.BaseName + ".pdf")
    $url = "file:///" + ($_.FullName -replace '\\','/')
    & $chrome --headless=new --disable-gpu --print-to-pdf="$out" --print-to-pdf-no-header --no-pdf-header-footer --virtual-time-budget=8000 $url 2>$null | Out-Null
  }
}

Write-Output "post 3..."
Render-Hi "$root\src" "$outRoot\post3" "1080,1350"
Write-Output "post 4..."
Render-Hi "$root\post4\src" "$outRoot\post4" "1080,1350"
Write-Output "carruseles plan v5..."
foreach ($n in 1..20) { $pn = "{0:D2}" -f $n; Render-Hi "$root\posts\post-$pn\src" "$outRoot\posts\post-$pn" "1080,1350" }
Write-Output "carruseles plan v6..."
foreach ($n in 21..40) {
  $pn = "{0:D2}" -f $n
  if (Test-Path "$root\posts\post-$pn\src") {
    Render-Hi "$root\posts\post-$pn\src" "$outRoot\posts\post-$pn" "1080,1350"
  }
}
Write-Output "PDF (keyword DM)..."
$pdfPosts = Get-ChildItem "$root\posts\post-*\pdf-keyword.txt"
if ($pdfPosts) {
  foreach ($kw in $pdfPosts) {
    Render-Pdf (Join-Path $kw.DirectoryName 'src') (Join-Path $kw.DirectoryName 'pdf')
    $htmlCount = (Get-ChildItem (Join-Path $kw.DirectoryName 'src') -Filter *.html).Count
    $pdfCount = (Get-ChildItem (Join-Path $kw.DirectoryName 'pdf') -Filter *.pdf).Count
    if ($pdfCount -lt $htmlCount) {
      throw "FALTA PDF en $($kw.DirectoryName): $pdfCount de $htmlCount generados."
    }
    Write-Output "  OK PDF $($kw.DirectoryName) ($pdfCount)"
  }
}
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