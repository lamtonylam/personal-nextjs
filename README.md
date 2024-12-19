# Personal website using nextjs

## Development

Add .env file

```
BASE_URL=YOUR_URL
```

Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build static files (HTML, JS ,CSS)

Run

```bash
npm run build
```

Files will be located in `build` folder

## Deployment

The repository includes `deploy.sh` file for easy deployment to Uni of Helsinki CS department servers.

First step is to install sshpass

```bash
sudo apt update
sudo apt install sshpass
```

- Create `.env` file
- Create env variable USERNAME:"YOUR-USERNAME"
- Create env variable PASSWORD:"YOUR-PASSWORD"
- Create env variable BASE_PATH:"YOUR-BASE-PATH", for university config it is `/u/username`
- Make script executable

```bash
chmod +x deploy.sh
```

- Run it

```bash
./deploy.sh
```
