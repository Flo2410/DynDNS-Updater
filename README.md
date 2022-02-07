# DynDNS-Updater

DynDNS-Updater is a basic tool to update your IP-Address in your ddns server.

## How it works

It is very simple. It just sends a `GET` reqeust to a specific domain.

## Usage

It is posible to run `dyndns-updater` directly via nodejs or using Docker.

## 1. Standalone

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

5. Edit the `.env` file with your information as shown in [settings](#settings).

6. Start the program

```bash
npm run start
```

## 2. Docker

Using the docker cli:

```bash
docker run -d --rm --name dnydns-updater \
-e DDNS_PROVIDER_URLS="your provider urls" \
-e DDNS_PROVIDER_USERNASMES="your usernames" \
-e DDNS_PROVIDER_PASSWORDS="your passowrds" \
-e DDNS_HOSTNAMES="your hostnames" \
ghcr.io/flo2410/dyndns-updater
```

or using docker-compose:

```yaml
version: "3.9"
services:
  dyndns-updater:
    image: ghcr.io/flo2410/dyndns-updater
    environment:
      - DDNS_PROVIDER_URLS="your provider urls"
      - DDNS_PROVIDER_USERNASMES="your usernames"
      - DDNS_PROVIDER_PASSWORDS="your passowrds"
      - DDNS_HOSTNAMES="your hostnames"
```

## <a name="settings"></a>Settings

All settings may have multiple values separated by a `semicolon`.
For each hostname, the url, username and password with the corresponding index will be used. If there is no url, username or password with the index of the hostname, the last entry will be used. This allows to more easily use multiple hostnames with the same credentials.

`DDNS_PROVIDER_URLS` The URL-Endpoint for updating a ddns entry from your provider.

`DDNS_PROVIDER_USERNASMES` The username for authenticating with your provider.

`DDNS_PROVIDER_PASSWORDS` The password for authenticating with your provider.

`DDNS_HOSTNAMES` The hostname that you want to update.
