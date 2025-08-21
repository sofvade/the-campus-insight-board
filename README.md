
# Foro Educativo (Next.js + Vercel)

Proyecto base mínimo listo para desplegar en Vercel.

## Desarrollo local
```bash
npm i
npm run dev
```

## Build de producción
```bash
npm run build
npm start
```

## Despliegue en Vercel
1. Sube este proyecto a un repositorio de GitHub (carpeta raíz).
2. En Vercel: **New Project** → **Import Git Repository**.
3. **Framework Preset**: *Next.js* (detección automática).
4. **Root Directory**: `/` (raíz del repo).
5. **Build Command**: `next build` (auto).
6. **Output Directory**: `.next` (auto).
7. Deploy.

No necesita variables de entorno.
