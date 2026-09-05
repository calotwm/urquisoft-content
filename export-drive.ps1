# export-drive.ps1 — arma la carpeta para-drive/ lista para subir a Google Drive.
#   para-drive/carruseles/post-XX/slide-NN.png (carpeta por post)
#   para-drive/carruseles/post-03-mito-excel/ y post-04-kiosco/ (los carruseles originales)
#   para-drive/singles/single-XX.png  (plana)
#   para-drive/stories/story-XX.png   (plana)
$root = "C:\Users\camil\Urquisoft-Carrusel"
$out = Join-Path $root "para-drive"

function Copy-Into($srcDir, $outDir) {
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null
  Get-ChildItem "$srcDir\*.png" | Copy-Item -Destination $outDir -Force
}

# carruseles del plan v5
foreach ($n in 1..20) {
  $pn = "{0:D2}" -f $n
  Copy-Into "$root\posts\post-$pn\img" "$out\carruseles\post-$pn"
}
# carruseles originales
Copy-Into "$root\img" "$out\carruseles\post-03-mito-excel"
Copy-Into "$root\post4\img" "$out\carruseles\post-04-kiosco"

# singles plana (renombrado single-XX.png)
New-Item -ItemType Directory -Force -Path "$out\singles" | Out-Null
foreach ($n in 1..26) { $pn = "{0:D2}" -f $n; Copy-Item "$root\singles\single-$pn\img\single.png" "$out\singles\single-$pn.png" -Force }
# stories plana (renombrado story-XX.png)
New-Item -ItemType Directory -Force -Path "$out\stories" | Out-Null
foreach ($n in 1..15) { $pn = "{0:D2}" -f $n; Copy-Item "$root\stories\story-$pn\img\story.png" "$out\stories\story-$pn.png" -Force }

Write-Output "LISTO PARA DRIVE -> $out"