$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "C:\Users\acoscolin\OneDrive - GRUPO SIFU INTEGRACION LABORAL SL\Escritorio\INFORMER SIFU"
$watcher.Filter = "MASTER GENERAL.xlsx"
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true

Write-Host "👀 MONITOREANDO CAMBIOS EN EXCEL..." -ForegroundColor Cyan
Write-Host "   Ruta: $($watcher.Path)\$($watcher.Filter)"
Write-Host "   (Deja esta ventana abierta. Minimízala si quieres)"
Write-Host ""

$scriptPath = "C:\Users\acoscolin\OneDrive - GRUPO SIFU INTEGRACION LABORAL SL\Escritorio\INFORMER SIFU\extract_excel.ps1"

$action = { 
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    
    Write-Host "⚡ DETECTADO CAMBIO EN EXCEL ($changeType) - $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Yellow
    
    # Run the extractor
    Write-Host "   Ejecutando extracción..." -NoNewline
    try {
        & "C:\Users\acoscolin\OneDrive - GRUPO SIFU INTEGRACION LABORAL SL\Escritorio\INFORMER SIFU\extract_excel.ps1"
        Write-Host " OK" -ForegroundColor Green
        Write-Host "   👉 RECARGA TU NAVEGADOR AHORA" -ForegroundColor Cyan
    }
    catch {
        Write-Host " ERROR" -ForegroundColor Red
        Write-Error $_
    }
    Write-Host "----------------------------------------"
}

Register-ObjectEvent $watcher "Changed" -Action $action
Register-ObjectEvent $watcher "Created" -Action $action

while ($true) {
    Start-Sleep -Seconds 1
}
