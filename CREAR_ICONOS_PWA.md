# INSTRUCCIONES PARA CREAR ICONOS PWA

Para que la app sea instalable, necesitas crear 2 iconos:

## 📱 Iconos Requeridos:

### 1. icon-192.png (192x192 píxeles)
- Fondo: Gradiente morado (#667eea a #764ba2)
- Centro: Letra "S" blanca estilizada + símbolo de dashboard
- Estilo: Plano, moderno, profesional

### 2. icon-512.png (512x512 píxeles)
- Mismo diseño que el de 192px
- Mayor resolución para pantallas de alta densidad

## 🎨 Cómo Crearlos:

### Opción 1: Herramienta Online (Más Fácil)
1. Ve a: https://www.pwabuilder.com/imageGenerator
2. Sube cualquier logo o imagen
3. Descarga los iconos generados
4. Renombra a `icon-192.png` y `icon-512.png`
5. Coloca en la carpeta raíz del proyecto

### Opción 2: Canva (Gratis)
1. Ve a: https://www.canva.com
2. Crea diseño personalizado de 512x512px
3. Fondo: Gradiente morado
4. Añade texto "SIFU" o "S"
5. Descarga como PNG
6. Redimensiona a 192x192 para el segundo icono

### Opción 3: Photoshop/GIMP
1. Crea canvas de 512x512px
2. Aplica gradiente de #667eea a #764ba2
3. Añade letra "S" blanca centrada
4. Guarda como PNG
5. Redimensiona a 192x192 para el segundo icono

## 📍 Ubicación Final:
```
INFORMER SIFU/
├── icon-192.png  ← Aquí
├── icon-512.png  ← Aquí
├── manifest.json
├── service-worker.js
└── index.html
```

## ✅ Verificación:
Una vez creados los iconos, la app será instalable en:
- ✅ Android (Chrome)
- ✅ iOS (Safari - "Añadir a pantalla de inicio")
- ✅ Windows (Edge)
- ✅ macOS (Chrome/Safari)

## 🚀 Alternativa Temporal:
Si no puedes crear los iconos ahora, puedes usar emojis temporales:
1. Captura de pantalla del emoji 📊 en grande
2. Guarda como icon-192.png y icon-512.png
3. Reemplaza después con diseño profesional
