# Despliegue con Cloudflare Wrangler

Pasos rápidos:

1. Instalar Wrangler (si no lo tenés):

```bash
npm install -g wrangler
```

o usar con npx:

```bash
npx wrangler --version
```

2. Iniciar sesión en Cloudflare:

```bash
npx wrangler login
```

3. Editar `wrangler.toml` y reemplazar `ivanagustingamarra` con tu `account_id`.

4. Publicar el sitio:

```bash
npm run publish
```

Notas:
- Este proyecto está configurado como `site` para subir los archivos estáticos en la carpeta del proyecto.
- Si preferís no instalar globalmente, podés usar `npx wrangler publish`.
