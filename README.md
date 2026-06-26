# TizenBrew — RomM module

Opens your self-hosted **RomM** instance in Console Mode on a Samsung TV via TizenBrew.

## Files

```
tizenbrew-romm/
├── package.json   # TizenBrew module config
├── index.js       # Injected script (key registration, back button, redirect)
├── serve.js       # Local npm registry server
└── README.md
```

## Install from your local network

1. **Copy this folder** to the machine running RomM (e.g. `~/tizenbrew-romm/`)

2. **Start the local registry** — in a terminal on that machine:
   ```bash
   cd ~/tizenbrew-romm
   node serve.js
   ```
   You'll see:
   ```
   ✅ RomM TizenBrew registry running at http://192.168.1.101:4873
   ```

3. **On your Samsung TV**, open TizenBrew and go to **Settings → Registry URL** and set it to:
   ```
   http://192.168.1.101:4873
   ```

4. In TizenBrew's module manager, search for and install:
   ```
   tizenbrew-romm
   ```

5. Once installed you can stop `serve.js` — the module is saved on the TV.

## Keep it running automatically (optional)

If you want the registry available permanently without manually running it, add it as a systemd service or use PM2:

```bash
npm install -g pm2
cd ~/tizenbrew-romm
pm2 start serve.js --name tizenbrew-romm
pm2 save
```

## Changing the RomM URL

Edit `package.json` → `websiteURL`, then restart `serve.js` and reinstall the module in TizenBrew.
