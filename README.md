# DynDNS-Updater

DynDNS-Updater is a basic tool to update your IP-Address in your ddns server.

## How it works

It is very simple. It just sends a `GET` reqeust to a specific domain.

## Usage

1. Download this repo, either via git or as a zip file.

```bash
git clone https://github.com/Flo2410/DynDNS-Updater.git
```

2. Go into the directory

```bash
 cd DynDNS-Updater
```

3. Install the dependencies

```bash
npm install
```

4. Rename or copy the `.env_default` to `.env`

```bash
cp .env_default .env
```

or

```bash
mv .env_default .env
```

5. Edit the `.env` file with your information

`DDNS_PROVIDER_URL` The URL-Endpoint for updating a ddns entry from your provider.

`DDNS_PROVIDER_USERNASME` The username for authenticating with your provider.

`DDNS_PROVIDER_PASSWORD` The password for authenticating with your provider.

`DDNS_HOSTNAME` The hostname that you want to update.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
