# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/sections/*": ["src/sections/*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", ".next/types/**/*.ts", "**/*.ts", "**/*.tsx", "src"],
  "exclude": ["node_modules"]
}

```

# README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

{
"name": "komosu-net",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
},
"dependencies": {
"gsap": "^3.12.5",
"next": "14.2.4",
"react": "^18",
"react-dom": "^18"
},
"devDependencies": {
"eslint": "^8.57.0",
"eslint-config-next": "14.2.4",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.1.3",
"eslint-plugin-react": "^7.34.3",
"prettier": "^3.3.2"
}
}

```

# package.json

```json
{
  "name": "komosu-net",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@jdion/tilt-react": "^1.0.0",
    "@next/font": "^14.2.4",
    "@supabase/supabase-js": "^2.44.4",
    "gsap": "^3.12.5",
    "module-name": "^0.0.1-security",
    "next": "14.2.4",
    "next-google-fonts": "^2.2.0",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.52.1",
    "react-just-parallax": "^3.1.16",
    "some-module": "^0.0.3",
    "swr": "^2.2.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "20.14.11",
    "@types/react": "18.3.3",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-react": "^7.34.3",
    "prettier": "^3.3.2"
  }
}

```

# next.config.js

```js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
// };
// module.exports = {
//   //...
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
// };
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# jsconfig.json

```json
// {
//   "compilerOptions": {
//     "paths": {
//       "@/*": ["./src/*"]
//     }
//   }
// }
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# Ignore environment variables
.env


# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
.aider*

```

# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "no-console": "off"
  }

}

```

# .aider.chat.history.md

```md

# aider chat started at 2024-07-24 11:47:53

> Loaded D:\Users\trapb\Projects\Komosu\.env  
> Add .aider* to .gitignore (recommended)? y  
> Added .aider* to .gitignore  
> C:\Users\trapb\AppData\Local\Programs\Python\Python312\Scripts\aider --4o --openai-api-key ...GEdS  
> Aider v0.45.1  
> Models: gpt-4o with diff edit format, weak model gpt-4o-mini  
> Git repo: .git with 240 files  
> Repo-map: using 1024 tokens  
> VSCode terminal detected, pretty output has been disabled.  
> Use /help <question> for help, run "aider --help" to see cmd line args  

#### <blank>  

```

# supabase\seed.sql

```sql

```

# supabase\config.toml

```toml
# A string used to distinguish different Supabase projects on the same host. Defaults to the
# working directory name when running `supabase init`.
project_id = "KomosuNetwork"

[api]
enabled = true
# Port to use for the API URL.
port = 54321
# Schemas to expose in your API. Tables, views and stored procedures in this schema will get API
# endpoints. `public` is always included.
schemas = ["public", "graphql_public"]
# Extra schemas to add to the search_path of every request. `public` is always included.
extra_search_path = ["public", "extensions"]
# The maximum number of rows returns from a view, table, or stored procedure. Limits payload size
# for accidental or malicious requests.
max_rows = 1000

[db]
# Port to use for the local database URL.
port = 54322
# Port used by db diff command to initialize the shadow database.
shadow_port = 54320
# The database major version to use. This has to be the same as your remote database's. Run `SHOW
# server_version;` on the remote database to check.
major_version = 15

[db.pooler]
enabled = false
# Port to use for the local connection pooler.
port = 54329
# Specifies when a server connection can be reused by other clients.
# Configure one of the supported pooler modes: `transaction`, `session`.
pool_mode = "transaction"
# How many server connections to allow per user/database pair.
default_pool_size = 20
# Maximum number of client connections allowed.
max_client_conn = 100

[realtime]
enabled = true
# Bind realtime via either IPv4 or IPv6. (default: IPv4)
# ip_version = "IPv6"
# The maximum length in bytes of HTTP request headers. (default: 4096)
# max_header_length = 4096

[studio]
enabled = true
# Port to use for Supabase Studio.
port = 54323
# External URL of the API server that frontend connects to.
api_url = "http://127.0.0.1"
# OpenAI API Key to use for Supabase AI in the Supabase Studio.
openai_api_key = "env(OPENAI_API_KEY)"

# Email testing server. Emails sent with the local dev setup are not actually sent - rather, they
# are monitored, and you can view the emails that would have been sent from the web interface.
[inbucket]
enabled = true
# Port to use for the email testing server web interface.
port = 54324
# Uncomment to expose additional ports for testing user applications that send emails.
# smtp_port = 54325
# pop3_port = 54326

[storage]
enabled = true
# The maximum file size allowed (e.g. "5MB", "500KB").
file_size_limit = "50MiB"

[storage.image_transformation]
enabled = true

[auth]
enabled = true
# The base URL of your website. Used as an allow-list for redirects and for constructing URLs used
# in emails.
site_url = "http://127.0.0.1:3000"
# A list of *exact* URLs that auth providers are permitted to redirect to post authentication.
additional_redirect_urls = ["https://127.0.0.1:3000"]
# How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 (1 week).
jwt_expiry = 3600
# If disabled, the refresh token will never expire.
enable_refresh_token_rotation = true
# Allows refresh tokens to be reused after expiry, up to the specified interval in seconds.
# Requires enable_refresh_token_rotation = true.
refresh_token_reuse_interval = 10
# Allow/disallow new user signups to your project.
enable_signup = true
# Allow/disallow anonymous sign-ins to your project.
enable_anonymous_sign_ins = false
# Allow/disallow testing manual linking of accounts
enable_manual_linking = false

[auth.email]
# Allow/disallow new user signups via email to your project.
enable_signup = true
# If enabled, a user will be required to confirm any email change on both the old, and new email
# addresses. If disabled, only the new email is required to confirm.
double_confirm_changes = true
# If enabled, users need to confirm their email address before signing in.
enable_confirmations = false
# Controls the minimum amount of time that must pass before sending another signup confirmation or password reset email.
max_frequency = "1s"

# Use a production-ready SMTP server
# [auth.email.smtp]
# host = "smtp.sendgrid.net"
# port = 587
# user = "apikey"
# pass = "env(SENDGRID_API_KEY)"
# admin_email = "admin@email.com"
# sender_name = "Admin"

# Uncomment to customize email template
# [auth.email.template.invite]
# subject = "You have been invited"
# content_path = "./supabase/templates/invite.html"

[auth.sms]
# Allow/disallow new user signups via SMS to your project.
enable_signup = true
# If enabled, users need to confirm their phone number before signing in.
enable_confirmations = false
# Template for sending OTP to users
template = "Your code is {{ .Code }} ."
# Controls the minimum amount of time that must pass before sending another sms otp.
max_frequency = "5s"

# Use pre-defined map of phone number to OTP for testing.
# [auth.sms.test_otp]
# 4152127777 = "123456"

# Configure logged in session timeouts.
# [auth.sessions]
# Force log out after the specified duration.
# timebox = "24h"
# Force log out if the user has been inactive longer than the specified duration.
# inactivity_timeout = "8h"

# This hook runs before a token is issued and allows you to add additional claims based on the authentication method used.
# [auth.hook.custom_access_token]
# enabled = true
# uri = "pg-functions://<database>/<schema>/<hook_name>"

# Configure one of the supported SMS providers: `twilio`, `twilio_verify`, `messagebird`, `textlocal`, `vonage`.
[auth.sms.twilio]
enabled = false
account_sid = ""
message_service_sid = ""
# DO NOT commit your Twilio auth token to git. Use environment variable substitution instead:
auth_token = "env(SUPABASE_AUTH_SMS_TWILIO_AUTH_TOKEN)"

# Use an external OAuth provider. The full list of providers are: `apple`, `azure`, `bitbucket`,
# `discord`, `facebook`, `github`, `gitlab`, `google`, `keycloak`, `linkedin_oidc`, `notion`, `twitch`,
# `twitter`, `slack`, `spotify`, `workos`, `zoom`.
[auth.external.apple]
enabled = false
client_id = ""
# DO NOT commit your OAuth provider secret to git. Use environment variable substitution instead:
secret = "env(SUPABASE_AUTH_EXTERNAL_APPLE_SECRET)"
# Overrides the default auth redirectUrl.
redirect_uri = ""
# Overrides the default auth provider URL. Used to support self-hosted gitlab, single-tenant Azure,
# or any other third-party OIDC providers.
url = ""
# If enabled, the nonce check will be skipped. Required for local sign in with Google auth.
skip_nonce_check = false

[edge_runtime]
enabled = true
# Configure one of the supported request policies: `oneshot`, `per_worker`.
# Use `oneshot` for hot reload, or `per_worker` for load testing.
policy = "oneshot"
inspector_port = 8083

[analytics]
enabled = false
port = 54327
vector_port = 54328
# Configure one of the supported backends: `postgres`, `bigquery`.
backend = "postgres"

# Experimental features may be deprecated any time
[experimental]
# Configures Postgres storage engine to use OrioleDB (S3)
orioledb_version = ""
# Configures S3 bucket URL, eg. <bucket_name>.s3-<region>.amazonaws.com
s3_host = "env(S3_HOST)"
# Configures S3 bucket region, eg. us-east-1
s3_region = "env(S3_REGION)"
# Configures AWS_ACCESS_KEY_ID for S3 bucket
s3_access_key = "env(S3_ACCESS_KEY)"
# Configures AWS_SECRET_ACCESS_KEY for S3 bucket
s3_secret_key = "env(S3_SECRET_KEY)"

```

# supabase\.gitignore

```
# Supabase
.branches
.temp

# Ignore environment variables
.env

```

# public\yellow vector.png

This is a binary file of the type: Image

# public\Website Vid.mp4

This is a binary file of the type: Binary

# public\webdesign vector.png

This is a binary file of the type: Image

# public\View plan button.png

This is a binary file of the type: Image

# public\View plan button (4).png

This is a binary file of the type: Image

# public\View plan button (2).png

This is a binary file of the type: Image

# public\View plan button (1).png

This is a binary file of the type: Image

# public\Video.MP4

This is a binary file of the type: Binary

# public\vercel.svg

This is a file of the type: SVG Image

# public\Vector.svg

This is a file of the type: SVG Image

# public\Vector.png

This is a binary file of the type: Image

# public\vector Ai big.png

This is a binary file of the type: Image

# public\Vector (9).png

This is a binary file of the type: Image

# public\Vector (8).png

This is a binary file of the type: Image

# public\Vector (7).png

This is a binary file of the type: Image

# public\Vector (6).png

This is a binary file of the type: Image

# public\Vector (5).png

This is a binary file of the type: Image

# public\Vector (4).png

This is a binary file of the type: Image

# public\Vector (3).png

This is a binary file of the type: Image

# public\Vector (2).png

This is a binary file of the type: Image

# public\Vector (13).png

This is a binary file of the type: Image

# public\Vector (12).png

This is a binary file of the type: Image

# public\Vector (11).png

This is a binary file of the type: Image

# public\Vector (10).png

This is a binary file of the type: Image

# public\Vector (1).png

This is a binary file of the type: Image

# public\triangle.png

This is a binary file of the type: Image

# public\team4.png

This is a binary file of the type: Image

# public\team3.png

This is a binary file of the type: Image

# public\team2.png

This is a binary file of the type: Image

# public\team1.png

This is a binary file of the type: Image

# public\Subtract (1).png

This is a binary file of the type: Image

# public\Stat (4).png

This is a binary file of the type: Image

# public\Stat (3).png

This is a binary file of the type: Image

# public\Stat (2).png

This is a binary file of the type: Image

# public\social campaign image.png

This is a binary file of the type: Image

# public\robot_6062166 1.png

This is a binary file of the type: Image

# public\Rectangle 9.png

This is a binary file of the type: Image

# public\Rectangle 9 (5).png

This is a binary file of the type: Image

# public\Rectangle 9 (4).png

This is a binary file of the type: Image

# public\Rectangle 8.png

This is a binary file of the type: Image

# public\Rectangle 8 (3).png

This is a binary file of the type: Image

# public\Rectangle 8 (2).png

This is a binary file of the type: Image

# public\Rectangle 7.png

This is a binary file of the type: Image

# public\Rectangle 63.png

This is a binary file of the type: Image

# public\Rectangle 63 (2).png

This is a binary file of the type: Image

# public\Rectangle 63 (1).png

This is a binary file of the type: Image

# public\Rectangle 62.png

This is a binary file of the type: Image

# public\Rectangle 61.png

This is a binary file of the type: Image

# public\Rectangle 5.png

This is a binary file of the type: Image

# public\Rectangle 4.png

This is a binary file of the type: Image

# public\Rectangle 4 (1).png

This is a binary file of the type: Image

# public\Rectangle 30.png

This is a binary file of the type: Image

# public\Rectangle 3.png

This is a binary file of the type: Image

# public\Rectangle 3 (1).png

This is a binary file of the type: Image

# public\Rectangle 29.png

This is a binary file of the type: Image

# public\Rectangle 21.png

This is a binary file of the type: Image

# public\Rectangle 21 (1).png

This is a binary file of the type: Image

# public\Rectangle 19.png

This is a binary file of the type: Image

# public\Rectangle 19 (1).png

This is a binary file of the type: Image

# public\Rectangle 16.png

This is a binary file of the type: Image

# public\Rectangle 16 (1).png

This is a binary file of the type: Image

# public\Rectangle 14.png

This is a binary file of the type: Image

# public\Rectangle 14 (1).png

This is a binary file of the type: Image

# public\Rectangle 13.png

This is a binary file of the type: Image

# public\Rectangle 13 (3).png

This is a binary file of the type: Image

# public\Rectangle 13 (2).png

This is a binary file of the type: Image

# public\Rectangle 13 (1).png

This is a binary file of the type: Image

# public\Rectangle 10.png

This is a binary file of the type: Image

# public\Play.png

This is a binary file of the type: Image

# public\play-large-fill.svg

This is a file of the type: SVG Image

# public\Pixel 8 Pro Mockup Obsidian.png

This is a binary file of the type: Image

# public\pause-large-fill.svg

This is a file of the type: SVG Image

# public\objectGif.png

This is a binary file of the type: Image

# public\nextgen landingpage img.png

This is a binary file of the type: Image

# public\next.svg

This is a file of the type: SVG Image

# public\New Macbook Pro Mockup Front View.png

This is a binary file of the type: Image

# public\menu-bar.svg

This is a file of the type: SVG Image

# public\menu-4-line.svg

This is a file of the type: SVG Image

# public\menu-3-fill.svg

This is a file of the type: SVG Image

# public\logo.png

This is a binary file of the type: Image

# public\leadgen man.png

This is a binary file of the type: Image

# public\landing image.png

This is a binary file of the type: Image

# public\Images (1).png

This is a binary file of the type: Image

# public\Image.png

This is a binary file of the type: Image

# public\Image (6).png

This is a binary file of the type: Image

# public\Image (5).png

This is a binary file of the type: Image

# public\Image (4).png

This is a binary file of the type: Image

# public\Image (3).png

This is a binary file of the type: Image

# public\Hero-background.mp4

This is a binary file of the type: Binary

# public\Hero Image.png

This is a binary file of the type: Image

# public\Group 6327.svg

This is a file of the type: SVG Image

# public\Group 6324.png

This is a binary file of the type: Image

# public\Group 6323.png

This is a binary file of the type: Image

# public\Group 6322.png

This is a binary file of the type: Image

# public\Group 6.png

This is a binary file of the type: Image

# public\Group 3.png

This is a binary file of the type: Image

# public\Group 2.png

This is a binary file of the type: Image

# public\Frame 39.png

This is a binary file of the type: Image

# public\Frame 24.png

This is a binary file of the type: Image

# public\Frame 1618868705.png

This is a binary file of the type: Image

# public\Frame 1618868702.png

This is a binary file of the type: Image

# public\Frame 1618868694.png

This is a binary file of the type: Image

# public\Frame 1618868677 (1).png

This is a binary file of the type: Image

# public\Frame 1618868648.png

This is a binary file of the type: Image

# public\Frame 1618868497.png

This is a binary file of the type: Image

# public\Frame 1618868493.png

This is a binary file of the type: Image

# public\Frame 1618868477.png

This is a binary file of the type: Image

# public\Frame 139.png

This is a binary file of the type: Image

# public\Frame 126.png

This is a binary file of the type: Image

# public\Frame 126 (1).png

This is a binary file of the type: Image

# public\Frame 120.png

This is a binary file of the type: Image

# public\favicon.png

This is a binary file of the type: Image

# public\email-concept-with-world-envelope 1.png

This is a binary file of the type: Image

# public\Ellipse 6.png

This is a binary file of the type: Image

# public\content marketing girl.png

This is a binary file of the type: Image

# public\check_14025690 1 (1).png

This is a binary file of the type: Image

# public\card.png

This is a binary file of the type: Image

# public\Bot.png

This is a binary file of the type: Image

# public\arrow-drop-down-line.svg

This is a file of the type: SVG Image

# public\Arrow 1.svg

This is a file of the type: SVG Image

# public\ai vector.png

This is a binary file of the type: Image

# public\Ai girl.png

This is a binary file of the type: Image

# .aider.tags.cache.v3\cache.db-wal

```db-wal

```

# .aider.tags.cache.v3\cache.db-shm

This is a binary file of the type: Binary

# .aider.tags.cache.v3\cache.db

This is a binary file of the type: Binary

# src\sections\WebDesignLandingpage.jsx

```jsx
"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../app/webdesign/components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { Montserrat } from "next/font/google";
import { useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const WebDesignLandingpage = () => {
  const parallaxRef = useRef(null);
  return (
    <section className={webstyle.webdesignLandingPage}>
      <div className={webstyle.vectorImagetop}>
        <Image src="/webdesign vector.png" fill />
      </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div
          className={`${webstyle.webdesignTextContainer} ${montserrat.className}`}
        >
          <div className={webstyle.headerContent}>
            <div className={webstyle.headerimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
          <h1>
            Driving Dealership Success Through <br />
            Digital Evolution
          </h1>
          <p>
            Welcome to Komosu Network, where we redefine automotive web design
            with a focus on digital transformation. Our services are crafted to
            elevate your dealership's online presence, enhance customer
            engagement, and streamline operations with integrated digital
            solutions
          </p>
          <LandingPageButtons />
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className={webstyle.webdesignImageContainer} ref={parallaxRef}>
            <div className={webstyle.webimage}>
              <Image src="/Frame 126.png" fill />
            </div>

            <div className={webstyle.webimage2}>
              <Image src="/New Macbook Pro Mockup Front View.png" fill />
            </div>
          </div>
        </ScrollParallax>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image src="/webdesign vector.png" fill />
      </div>
    </section>
  );
};

export default WebDesignLandingpage;

```

# src\sections\videoShowcase.jsx

```jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sections.module.css";
import Image from "next/image";

const VideoShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <video ref={videoRef} className={styles.video} controls>
          <source src="/Video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.buttonContainer}>
          {!isPlaying ? (
            <div className={styles.playContainer}>
              <button onClick={handlePlay} className={styles.playButton}>
                <Image src="/play-large-fill.svg" alt="Play" fill />
              </button>
            </div>
          ) : (
            <div className={styles.resetContainer}>
              <button onClick={handleReset} className={styles.resetButton}>
                <Image src="/pause-large-fill.svg" alt="Pause" fill />
              </button>
            </div>
          )}
        </div>
      </div>
      <p className={styles.videoContent}>
        Enjoy cutting edge advertising solution for the growth of your brand
      </p>
    </section>
  );
};

export default VideoShowcase;

```

# src\sections\testimonials.jsx

```jsx
"use client";
import { useState } from "react";
import TestimonialData from "@/clientTestimonialData/testimonialData";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const shadows_Font = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300); // duration of the transition
  };

  const prevTestimonial = () => {
    const newIndex =
      currentIndex === 0 ? TestimonialData.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex =
      currentIndex === TestimonialData.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const { avatar, company, data, username, role } =
    TestimonialData[currentIndex];

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.offerHeader}>
        HEAR WHAT OUR{" "}
        <span className={`${styles.offerSpan} ${shadows_Font.className}`}>
          CLIENTS{" "}
        </span>
        SAY ABOUT US
      </h2>
      <div
        className={`${styles.testimonialContainer} ${isTransitioning ? styles.fade : ""}`}
      >
        <div className={styles.testimonialContents}>
          <div className={styles.avatar}>
            <Image src={avatar} alt={`${company} testimonial`} layout="fill" />
          </div>
          <div className={styles.testimonialTextContent}>
            <h2 className={styles.clientCompany}>{company}</h2>
            <p className={styles.feedbacks}>"{data}"</p>
            <p className={styles.testifierName}>{username}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <div className={styles.groupImg}>
          <Image src="/triangle.png" alt="decorative" layout="fill" />
        </div>
      </div>
      <div className={styles.testimonialButtonDirection}>
        <div className={styles.btnPrev} onClick={prevTestimonial}>
          <Image
            src="/View plan button.png"
            alt="Previous testimonial"
            layout="fill"
          />
        </div>
        <div className={styles.btnNext} onClick={nextTestimonial}>
          <Image
            src="/View plan button (1).png"
            alt="Next testimonial"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

```

# src\sections\servicesflex.jsx

```jsx
import Image from "next/image";
import styles from "./sections.module.css";
const Servicesflex = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContainerContent}>
        <div className={styles.containerflex}>
          <div className={styles.containerFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (1).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Web Design</h5>
            <p className={styles.containerFlexp}>
              We revolutionize web design for dealerships. blending innovative
              techniques with strategic planning to elevate online presence and
              drive sales.
            </p>
          </div>
          <div className={styles.containerFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (2).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Virtual Finance Managers</h5>
            <p className={styles.containerFlexp}>
              We help eliminate paper-works and streamline processes with our
              chatbot, acting as financial managers helping simplify the
              financial journey.
            </p>
          </div>
        </div>
        <div className={styles.containerSubFlex}>
          <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (3).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>
              Sales & Appointment Assistants
            </h5>
            <p className={styles.containerFlexp}>
              Komosu Network innovates lead generation for dealerships,
              combining content marketing and chatbot to boost sales and
              conversions.
            </p>
          </div>

          <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (4).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Content that converts</h5>
            <p className={styles.containerFlexp}>
              Komosu Network transforms content marketing for dealership,
              merging innovative tactics with targeted campaigns to enhance car
              sales and optimize ad spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesflex;

```

# src\sections\services.jsx

```jsx
import Image from "next/image";
import styles from "./sections.module.css";
import Servicesflex from "./servicesflex";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.ServicesTextContainer}>
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>WHY KOMOSU?</p>
        </div>
        <div className={styles.servicesHeader}>
          <h2>
            {" "}
            WE GIVE YOUR{" "}
            <span className={`${styles.servicesSpan} ${shadows.className}`}>
              BUSINESS
            </span>{" "}
            THE PUSH IT NEEDS
          </h2>
        </div>
        <p className={styles.subContent}>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions. our dedicated team of experts
          focuses on building strong relationships with clients, ensuring that
          they have more time to concentrate on what truly matters to them.{" "}
        </p>
      </div>
      <Servicesflex />
      <div className={styles.servicesLastContentText}>
        <Link href="/about">
          <p>Learn more</p>
        </Link>

        <div className={styles.buttonImage}>
          <Image src="/View plan button (4).png" alt="vector" fill />
        </div>
      </div>
    </section>
  );
};

export default Services;

```

# src\sections\sections.module.css

```css
.section {
  height: 100%;
  width: 100%;
  font-family: var(--textFontRegular);
}

.heroSection {
  position: relative;
  max-width: 100%;
  height: 100%;
  margin-top: 5rem;
  margin-bottom: 6rem;
  overflow: hidden;
}

.heroContainer {
  position: absolute;
  bottom: 20%;
  /* border: 3px solid red; */
  width: 100%;
  z-index: 10;
}

.HeroTextContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.HeroText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--text);
  margin-left: 6rem;
  max-width: 614px;
}

.HeaderContent {
  color: #fff;
  /* z-index: 100; */
  max-width: 480px;
  margin-right: 6rem;
}

.heroSubText {
  color: var(--White, #fff);
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  text-align: right;
}

/* .heroImg {
  position: relative;
  width: 800px;
  object-fit: cover;
  height: 100vh;
} */
.herobg {
  width: 100%;
  height: 750px;
  position: relative;
  filter: grayscale(80%);
}

.herobg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.24) -1.53%,
    rgba(0, 0, 0, 0.6) 93.64%
  );
  z-index: 1;
}

.heroSub {
  color: var(--text);
  font-size: 1rem;
  font-weight: light;
  text-transform: uppercase;
}

.headerbtn {
  /* opacity: 0; */
  color: var(--text);
  background-color: #fff;
  border-radius: 32px;
  padding: 0.9rem 1.3rem;
  color: var(--btn);
  display: flex;
  height: 50px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  font-family: var(--text-Font-Bold);
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in;
}

.headerbtn:hover {
  background-color: rgba(117, 117, 240, 0.705);
  color: var(--text);
}

.buttonImageBg {
  position: relative;
  background-color: var(--btn);
  border-radius: 50px;
  padding: 0.4rem;
}

.buttonImage {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50px;
}

.heroHeader {
  color: var(--text);
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.36px;
  font-family: var(--text-Font-Black);
}

.heroSpan {
  color: var(--yellow);
}

@media (min-width: 1628px) {
  .herobg {
    height: 100vh;
  }
  .HeroText {
    margin-left: 12rem;
  }
  .HeaderContent {
    margin-right: 12rem;
  }
}

/* @media (max-width: 1279px) {
  .HeroText {
    left: 12%;
  }
  .heroHeader {
    font-size: 4.5rem;
  }
} */

@media (max-width: 900px) {
  .HeroText {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 30%;
    left: 1%;
  }

  .heroSub {
    font-size: 0.9rem;
    font-weight: 500;
  }
  .heroSection {
    line-height: 1.2;
  }
  .heroHeader {
    font-size: 4rem;
    text-align: center;
    line-height: 1;
  }
  .heroSubText {
    text-align: center;
    width: 100%;
    margin-top: 5rem;
    font-size: 0.8rem;
  }
  .heroHeader {
    font-size: 5.2rem;
    letter-spacing: 1px;
    font-style: normal;
    margin-top: 0.8rem;
  }
}

@media (max-width: 740px) {
  .heroSubText {
    width: 100%;
    line-height: 1.3;
    font-size: 0.8rem;
  }
  .HeaderContent {
    bottom: 15%;
    padding: 0 2rem;
  }
}

@media (max-width: 450px) {
  .headerbtn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .heroHeader {
    font-size: 2.3rem;
  }

  .HeroTextContainer {
    flex-direction: column;
    /* border: 2px solid #fff; */
    align-items: center;
    height: 77dvh;
  }
  .HeroText {
    align-items: center;
    color: var(--text);
    margin-left: 0;
    max-width: 614px;
    /* border: 3px solid red; */
  }
  .HeaderContent {
    /* border: 3px solid rgb(26, 222, 65); */
    margin-right: 0;
  }
  .heroContainer {
    top: 10%;
  }
  .herobg {
    width: 100%;
    height: 710px;
  }
}

/* SERVICES SECTION */

.serviceSection {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #000000;
  margin-top: 6rem;
}

.ServicesTextContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 1.3;
  color: var(--blueText);
}

.servicesSubTextContainer {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.blueBorder {
  background-color: var(--btn);
  width: 10px;
  height: 10px;
  border-radius: 50px;
}

.servicesSubText {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--blueText);
  position: relative;
}

.servicesHeader h2,
.offerHeader {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
  text-transform: capitalize;
  margin-top: 1.2rem;
  font-family: var(--text-Font-Bold);
}

.servicesSpan {
  color: var(--yellow);
  font-style: italic;
  font-size: 40px;
}

.subContent {
  width: 50%;
  text-align: center;
  line-height: 150%;
  margin-top: 1.5rem;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  font-family: var(--textFontRegular);
}

.servicesContainer {
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  margin-top: 5rem;
  color: var(--blueText);
  display: flex;
}

.servicesContainerContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  width: 100%;
  height: 100%;
}

.servicesLastContentText {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: var(--blueText);
  margin-top: 2.5rem;
  cursor: pointer;
  margin-bottom: 6rem;
}

.servicesLastContentText p {
  color: inherit;
  font-weight: 500;
  font-size: 18px;
  color: var(--btn);
}

.containerflex,
.containerSubFlex {
  position: relative;
  width: 100%;
  height: 50%;
  background-color: rgb(255, 255, 255);
  display: flex;
  gap: 32px;
}

.containerFlex1,
.containerSubFlex1 {
  /* overflow: hidden; */
  position: relative;
  border: 1px solid #dcdbdb;
  width: 544px;
  min-height: 245px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 0.5em;
  padding: 1.5rem;
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.containerFlex1:hover,
.containerSubFlex1:hover {
  border: 1px solid rgba(2, 2, 85, 0.242);
  transform: scale(1.01);
  background: linear-gradient(
    95deg,
    rgba(197, 196, 196, 0.171),
    rgba(151, 151, 255, 0.112)
  );
}

.containerFlexh5 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.containerFlexp {
  line-height: 150%;
  margin-top: 1.5rem;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  font-family: var(--textFontRegular);
}
.flexImgAbsolute {
  position: relative;
  overflow: hidden;
  width: 151px;
  height: 100px;
  object-fit: cover;
}
.flexabsoluteImg {
  position: absolute;
  top: 0;
  left: 20%;
}

.flexImgAbsolute2 {
  position: relative;
  overflow: hidden;
  width: 151px;
  height: 100px;
  object-fit: cover;
}
.flexabsoluteImg2 {
  position: absolute;
  top: 0;
  right: 0;
}
.containerFlex2 {
  border: 1px solid #dcdbdb;
  width: 688px;
  height: 100%;
  border-radius: 20px;
}

.flexImg {
  position: relative;
  width: 40px;
  height: 40px;
}

@media (max-width: 740px) {
  .containerflex,
  .containerSubFlex {
    flex-wrap: wrap;
    padding: 0 1rem;
  }
  .servicesHeader {
    margin-top: 1rem;
  }
  .servicesHeader h2 {
    font-size: 1.5rem;
    padding: 0 2rem;
    text-align: center;
  }
  .subContent {
    width: 100%;
    padding: 0 2rem;
    font-size: 0.9rem;
  }
  .servicesSpan {
    font-size: 1.7rem;
  }

  .containerFlexp {
    font-size: 0.8rem;
  }
}

@media (max-width: 450px) {
  .flexImg {
    width: 30px;
    height: 30px;
  }
}

/* Video Showcase Section */

.videoSection {
  position: relative;
  max-width: 100%;
  display: flex;
  height: 627.763px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  /* padding: 0 2rem; */
}

.videoContainer {
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
  border-radius: 7px;
}

.videoContent {
  background-color: #e6e6ff;
  border-radius: 36px;
  max-width: 1250px;
  min-width: fit-content;
  padding: 1rem 1.5rem;
  color: var(--blueText);
  font-size: 15.273px;
  font-weight: 500;
  text-align: center;
  position: absolute;
  top: -4%;
  font-family: var(--text-Font-Bold);
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
}

.buttonContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  z-index: 1;
}
.playContainer,
.resetContainer {
  position: relative;
  background: rgba(0, 0, 255, 0.564);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  mix-blend-mode: difference;
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.resetContainer {
  opacity: 0;
}
.resetContainer:hover {
  opacity: 1;
}
.playButton,
.resetButton {
  padding: 10px 20px;
  width: 100px;
  height: 50px;
  border: 0;
  background-color: transparent;
  /* color: white; */
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  /* box-shadow: 0 4px 6px rgba(143, 53, 53, 0.1); */
}

@media (max-width: 1040px) {
  .videoContainer {
    padding: 0 3rem;
    height: 50vh;
  }
}
@media (max-width: 900px) {
  .videoSection {
    height: 100%;
  }
  .videoContainer {
    padding: 0 3rem;
    height: 50vh;
  }
  .playContainer,
  .resetContainer {
    width: 100px;
    height: 50px;
  }
  .playButton,
  .resetButton {
    padding: 0;
    width: 50px;
    height: 20px;
  }
}

@media (max-width: 450px) {
  .videoContainer {
    height: 30vh;
    padding: 0 1rem;
  }
  .playContainer,
  .resetContainer {
    width: 50px;
    height: 30px;
  }

  .videoContent {
    font-size: 0.5rem;
  }
}
@media (max-width: 982px) {
  .videoContent {
    font-size: 0.8rem;
  }
}
.playContainer,
.resetContainer {
  display: none;
}

@media (max-width: 714px) {
  .videoContent {
    font-size: 0.7rem;
    padding: 0.7rem;
  }
}

@media (max-width: 593px) {
  .videoContent {
    padding: 0.6rem;
    font-size: 0.6rem;
  }
}

/* OFFER SECTION */

.OfferSection {
  max-width: 1250px;
  height: 100%;
  position: relative;
  margin-inline: auto;
  margin-top: 6rem;
}

.offerHeader {
  text-align: center;
  color: var(--blueText);
}
.offerSpan {
  color: var(--yellow);
  font-style: italic;
}

.offerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.offerSelectProps {
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  background-color: var(--blueText);
  color: var(--text);
  border-radius: 36px;
  max-width: 650px;
  padding: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 2rem;
  box-sizing: border-box;
}

.offerSelectProps li {
  cursor: pointer;
  font-size: 0.9rem;
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.3s;
  padding: 1rem; /* Ensure padding is applied to maintain consistent size */
  border-radius: 24px;
  box-sizing: border-box;
}

.offerSelectProps li:hover {
  background-color: #fff;
  color: var(--blueText);
  transform: scale(1.05); /* Slightly scale the item to give a hover effect */
}

.offerSelectProps .active {
  background-color: #fff;
  color: var(--blueText);
  padding: 1rem;
  border-radius: 36px;
  font-family: var(--text-Font-Bold);
}

.webDesignContainer {
  max-width: 1120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
  /* gap: 5em; */
  height: 100%;
  position: relative;
}

.aiSolution,
.leadGeneration {
  flex-direction: row-reverse;
}

.webDesignContent {
  max-width: 50%;
}

.webDesignCardContainer {
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.AisolutionContainer .webDesignCard {
  width: 435px;
  height: 549px;
  flex-shrink: 0;
}

.contentMarketingContainer .webDesignCard {
  width: 693px;
  height: 563.915px;
}

.webDesignCard {
  width: 485.237px;
  height: 272.976px;
  border-radius: 20px;
  position: relative;
  scale: 1;
}

.webDesignCardContainer1 .webDesignCard1::after {
  content: "";
  position: absolute;
  right: -85%;
  top: 10%;
  background-color: var(--hover1);
  width: 684px;
  height: 406px;
  z-index: -1;
  opacity: 0.6;
}

.webDesignCard2 {
  position: absolute;
  width: 200.438px;
  height: 330.293px;
  top: 60%;
}

.webDesignCard3 {
  width: 693px;
  height: 563.915px;
  position: relative;
  margin-right: 40px;
  /* scale: 1; */
  /* border: 3px solid red; */
}

.webDesignCardContainer1 .webDesignCard2::after {
  content: "";
  position: absolute;
  left: -16%;
  bottom: 5%;
  background-color: var(--hover1);
  width: 153px;
  height: 153px;
  border-radius: 189.677px;
  opacity: 0.6;
  z-index: -1;
}

.webDesignHeader {
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-bottom: 1rem;
}
.webDesignHeader h5 {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.webHeaderImgBg {
  background-color: var(--hover1);
  padding: 0.4rem;
  border-radius: 6px;
}

.webHeaderImg {
  position: relative;
  width: 16px;
  height: 16px;
}

.WebDesignBtn {
  display: flex;
  width: 184px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  background-color: var(--btn);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: 0.36px;
  font-family: var(--text-Font-Bold);
  border: none;
  color: #fff;
  margin-top: 1rem;
}

.WebBtnImg {
  position: relative;
  width: 20px;
  height: 20px;
}

.RoundBgCOlor {
  background-color: var(--btn);
  border-radius: 100px;
  padding: 0.5rem;
}

.webDesignh1 {
  width: 585px;
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.24px;
  font-family: var(--text-Font-Black);
}

.webFeaturesImgShadow {
  background-color: var(--blueText);
  border-radius: 50px;
  padding-right: 0.1rem;
}

.offerFeaturesImgShadow {
  background-color: var(--blueText);
  border-radius: 50px;
  padding-right: 0.2rem;
}

.webFeaturesImg,
.offerFeaturesImg {
  position: relative;
  width: 20px;
  height: 20px;
}

.WebDesignFeatures,
.offerAnimationFeatures {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.WebDesignFeaturesContent,
.offerFeaturesContent {
  display: flex;
  align-items: center;
  gap: 1em;
}
.WebDesignFeaturesContent {
  align-items: flex-start;
}

.WebDesignFeaturesContent p {
  color: var(--blueText);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  width: 558px;
}

.OfferOfferContentContainer {
  position: relative;
  height: 100%;
  /* overflow: hidden; */
}

.section {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.section.fadeIn {
  opacity: 1;
  visibility: visible;
}

.section.fadeOut {
  opacity: 0;
  visibility: hidden;
}

.webDesignContainer,
.aiSolution,
.contentMarketing,
.leadGeneration {
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.leadGeneration {
  gap: 3em;
}

.webDesignContainer.active,
.aiSolution.active,
.contentMarketing.active,
.leadGeneration.active {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 450px) {
  .OfferSection .offerHeader {
    font-size: 1.5rem;
    padding: 0 0.7rem;
  }

  .servicesSpan {
    font-size: 1.5rem;
  }

  .offerContainer {
    padding: 0 0.7rem;
  }

  .offerSelectProps {
    max-width: 100%;
    padding: 0.75rem;
    flex-wrap: nowrap;
    gap: 1em;
  }

  .offerSelectProps .active {
    padding: 0.5rem;
    border-radius: 50px;
  }

  .offerSelectProps li {
    text-align: center;
    font-size: 0.7rem;
    padding: 0.75rem;
    border-radius: 50px;
  }

  .webDesignContainer {
    flex-direction: column;
    align-items: center;
  }

  .WebDesignFeaturesContent {
    align-items: center;
  }

  .webDesignh1 {
    font-size: 1rem;
    width: 90vw;
  }

  .WebDesignBtn {
    display: flex;
    width: 150px;
    height: 45px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    background-color: var(--btn);
    font-size: 14px;
  }
  .WebDesignFeaturesContent,
  .offerFeaturesContent {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .WebDesignFeaturesContent p {
    font-size: 12px;
  }
  .webFeaturesImg,
  .offerFeaturesImg {
    position: relative;
    width: 15px;
    height: 15px;
  }

  /* .OfferOfferContentContainer {
    border: 2px solid red;
  }

  .webDesignCardContainer1 .webDesignCard1 {
    border: 2px solid blue;
  } */
}

/* OFFER ANIMATION SECTION */

.OfferAnimationSection {
  background-color: var(--blueText);
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
}

.offerAnimHeaderContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1250px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  margin-top: 2rem;
}
.offerAnimHeaderh2 {
  color: var(--text);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
  font-family: var(--text-Font-Bold);
  text-align: center;
  width: 60%;
  margin-top: 4rem;
}

.OfferHeaderButton {
  color: var(--text);
  background: var(--btn-Gradient);
  border-radius: 32px;
  padding: 0.9rem 1.3rem;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;
}

.OfferHeaderButton:hover {
  box-shadow: var(--btn-Hover);
}

.lineImg {
  position: relative;
  width: 120px;
  height: 6px;
}

.lineImg2 {
  position: relative;
  width: 120px;
  height: 6px;
  margin-left: 2rem;
}

.LineContainer {
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: absolute;
  top: 50%;
  left: 0;
}

.OfferAnimationContainer {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 5rem;
  padding-bottom: 3rem;
  max-width: 1120px;
  margin-inline: auto;
  min-height: 800px;
  position: relative;
  overflow: hidden;
}
.OfferAnimationContainerContent {
  max-width: 544px;
  background-color: var(--hover1);
  min-height: 683px;
  border-radius: 20px;
  padding: 40px 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* justify-content: space-evenly; */
}

.offerAnimTextContent {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.OfferAnimationContainerContent {
  transition: 0.3s ease;
}

.OfferAnimationContainerContent:first-child {
  position: absolute;
  bottom: -20%;
  left: 0;
  transition: 0.3s ease;
}

.OfferAnimationContainerContent:first-child:hover {
  position: absolute;
  transform: translateY(-30%);
}

.OfferAnimationContainerContent:last-child {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--hover2);
  transition: 0.3s ease;
}

.OfferAnimationContainerContent:first-child:hover
  ~ .OfferAnimationContainerContent:last-child {
  transform: translateY(40%);
  position: absolute;
}
.offerFeaturesImgShadows {
  background-color: var(--yellow);
  border-radius: 50px;
  padding-right: 0.2rem;
}

.OfferAnimationContainerContentSmallImage {
  position: relative;
  width: 20px;
  height: 20px;
}

.OfferAnimationContainerContentHeader {
  display: flex;
  align-items: center;
  gap: 0.5em;
  /* margin-bottom: 1rem; */
  /* margin-top: 3rem; */
  position: relative;
}

.OfferAnimationContainerContent:last-child {
  color: #534500;
}

.OfferAnimationContainerContent:last-child h3 {
  color: #534500;
}

.OfferAnimationContainerContent:last-child p {
  color: #534500;
}

.OfferAnimationContainerContent h3 {
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  font-family: var(--text-Font-Black);
}

.OfferAnimationContainerContentHeader .offerH6 {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.08px; /* 156% */
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.businessAnalytics {
  font-size: 1.1rem;
  color: #534500;
}

.offerFeaturesContent {
  align-items: flex-start;
}

.offerFeaturesContent p {
  color: var(--blueText);
  font-size: 1.1rem;
  line-height: 1.5;
}

.ImageBox1,
.ImageBox2 {
  position: relative;
  width: 388px;
  height: 336px;
  object-fit: contain;
  background-size: 100%;
}

.ImageBox1 {
  position: absolute;
  left: -12%;
}

.ImageBox2 {
  position: absolute;
  margin-top: 2rem;
  width: 225px;
  height: 210px;
}

.ImageBoxsec {
  width: 205px;
  height: 205px;
  position: absolute;
  left: 15%;
  z-index: 100;
}

.ImageBoxsec2 {
  position: absolute;
  right: -7%;
  top: -30%;
  width: 328px;
  height: 336px;
  object-fit: contain;
  background-size: 100%;
}

.OfferAnimationImageBoxContent {
  min-width: 300px;
  height: 200px;
  border-radius: 8px;
}

.OfferAnimationImageBoxContainer {
  display: flex;
  margin-top: 4rem;
  position: relative;
  width: 100%;
  padding: 0;
}

.ImageBox {
  width: 496px;
  height: 259px;
  position: relative;
}

.ImageBox img {
  border-radius: 8px;
}

/* TESTIMONIAL SECTION */

.tesimonialSection {
  position: relative;
  max-width: 100%;
  height: 100vh;
  margin-top: 5rem;
}

.tesimonialContainer {
  background-color: var(--SkyBlue);
  border-radius: 1px solid var(--btn);
  max-width: 1120px;
  min-height: 528px;
  margin-inline: auto;
  margin-top: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.clientCompany {
  color: #000000;
  font-size: 2rem;
}

.tesimonialContents {
  max-width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 2em;
  height: 100%;
  position: relative;
}
.avatar {
  position: relative;
  width: 340px;
  height: 400px;
}
.testimonialTextContent {
  max-width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;
  color: var(--blueText);
  font-size: 1.4rem;
}

.feedbacks {
  max-width: 730px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  font-weight: bold;
}

.testifierName {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}

.role {
  font-size: 0.8rem;
}

.groupImg {
  width: 136px;
  height: 136px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.btnprev,
.btnNext {
  position: relative;
  width: 64px;
  height: 64px;
  cursor: pointer;
}

.testimonialbuttonDirection {
  display: flex;
  align-items: center;
  gap: 2.5em;
  position: absolute;
  right: 8%;
  bottom: 0;
}

/* FAQ SECTION */
.FAQSection {
  margin-top: 6rem;
  width: 100%;
  height: 100%;
  position: relative;
}
.servicesSubTextContainer {
  justify-content: center;
  align-items: center;
}
.FAQHeaderContents {
  text-align: center;
}

.FAQHeaderContents h2 {
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.32px;
  text-transform: capitalize;
  margin-top: 1rem;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.FAQContainer {
  position: relative;
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;
  /* margin-top: 4rem; */
  display: flex;
  flex-direction: column;
  gap: 2em;
  /* border: 2px solid red; */
  padding: 4rem 0;
  color: var(--blueText);
}

.FAQContainer::before {
  content: "";
  position: absolute;
  /* background-image: url("public/Group 2.png"); */
  width: 150px;
  height: 30px;
}

.dropdownImg {
  width: 40px;
  height: 40px;
  position: relative;
}
.FAQContents {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  /* padding: 1rem 1.5rem; */
  height: 100%;
}

.FAQContainerContents {
  flex-direction: column;
  display: flex;
  cursor: pointer;
  border: 1px solid#DAD9FF;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  height: 100%;
}

.FAQAnswer {
  border-top: 1px solid#DAD9FF;
  margin-top: 1rem;
  padding: 0.5rem;
  /* display: none; */
}

.FAQAnswer {
  display: none;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.FAQAnswer.expanded {
  display: block;
  max-height: 200px; /* Adjust this value according to your content height */
  opacity: 1;
}

.FAQContents h4 {
  color: var(--blueText);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 24px */
  letter-spacing: -0.4px;
  font-family: var(--text-Font-Bold);
}

.FAQline {
  width: 150px;
  height: 20px;
  position: relative;
}

.FAQline:last-child {
  position: absolute;
  bottom: 0;
  right: 0;
  justify-self: end;
}

.testimonialSection {
  margin-top: 6rem;
  text-align: center;
}

.offerHeader {
  font-size: 2rem;
  margin-bottom: 40px;
}

.offerSpan {
  font-family: "Shadows Into Light", cursive;
}

.testimonialContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--btn);
  max-width: 1216px;
  margin-inline: auto;
  border-radius: 20px;
  border: 1px solid var(--btn);
  background: #e6e6ff;
  justify-content: center;
  padding: 40px;
  overflow: hidden;
  margin-bottom: 48px;
}

.testimonialContents {
  display: flex;
  margin: 20px 0;
  align-items: center;
  gap: 2em;
}

.testimonialTextContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.clientCompany {
  font-size: 1.5em;
  font-weight: bold;
  font-family: var(--text-Font-Black);
}

.feedbacks {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  margin: 24px 0;
  text-align: left;
  font-family: var(--text-Font-Bold);
}

.testifierName,
.role {
  font-size: 0.9em;
  color: var(--blueText);
}

.testifierName {
  font-family: var(--text-Font-Bold);
}

.groupImg {
  position: absolute;
  width: 100px;
  height: 100px;
  margin-top: 20px;
}

.testimonialButtonDirection {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btnPrev,
.btnNext {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 10px;
}

.testimonialContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}

.testimonialContainer.fade {
  opacity: 0;
}
/* 
.section {
  height: 100vh;
  padding: 2rem;
} */

.landingPage {
  background-color: rgba(0, 0, 0, 0.8);
}

.ServicesPage,
.VideoShowcasePage,
.OfferPage,
.OfferAnimationPage,
.TestimonialPage,
.FAQPage {
  background-color: white;
}

```

# src\sections\offerAmin.jsx

```jsx
import styles from "./sections.module.css";
import Image from "next/image";
import Link from "next/link";
const OfferAnimation = () => {
  return (
    <section className={styles.OfferAnimationSection}>
      <div className={styles.offerAnimHeaderContent}>
        <h2 className={styles.offerAnimHeaderh2}>
          Drive your automotive company forward with innovative and stunning web
          design
        </h2>
        <Link href="/request-demo">
          <button className={styles.OfferHeaderButton}>Book a Demo</button>
        </Link>
        <div className={styles.LineContainer}>
          <div className={styles.lineImg}>
            <Image src="/Rectangle 3.png" alt="offerAnimImg" fill />
          </div>
          <div className={styles.lineImg2}>
            <Image src="/Rectangle 4.png" alt="offerAnimImg" fill />
          </div>
        </div>
      </div>
      <div className={styles.OfferAnimationContainer}>
        <div className={styles.OfferAnimationContainerContent}>
          <div className={styles.offerAnimTextContent}>
            <div className={styles.OfferAnimationContainerContentHeader}>
              <div className={styles.OfferAnimationContainerContentSmallImage}>
                <Image src="/Vector (5).png" alt="offerAnimImg" fill />
              </div>
              <h6 className={styles.offerH6}>PROMOTIONAL VIDEOS</h6>
            </div>
            <h3>
              Capture attention with high-quality visuals and engaging content
              that keeps viewers interested.
            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Understand past performance through detailed analysis of
                historical data.
              </p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Provide data-driven recommendations to support strategic
                business decisions.
              </p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div className={styles.OfferAnimationImageBoxContent}>
              <div className={styles.ImageBox}>
                <Image
                  src="/Group 6324.png"
                  alt="offerAnimImg"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.OfferAnimationContainerContent}>
          <div className={styles.offerAnimTextContent}>
            <div className={styles.OfferAnimationContainerContentHeader}>
              <div className={styles.OfferAnimationContainerContentSmallImage}>
                <Image src="/Vector (7).png" alt="offerAnimImg" fill />
              </div>
              <h6 className={styles.businessAnalytics}>BUSINESS ANALYTICS</h6>
            </div>
            <h3>
              Transform your business with data-driven insight. Harness your
              social power with in-depth knowledge.
            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Understand past performance through detailed analysis of
                historical data.
              </p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Provide data-driven recommendations to support strategic
                business decisions.
              </p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox1} ${styles.ImageBoxsec}`}>
                <Image src="/Group 6322.png" alt="offerAnimImg" fill />
              </div>
            </div>
            <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox2} ${styles.ImageBoxsec2}`}>
                <Image src="/Group 6323.png" alt="offerAnimImg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferAnimation;

```

# src\sections\offer.jsx

```jsx
"use client";
import styles from "./sections.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Offer = () => {
  const [activeSection, setActiveSection] = useState("webDesign");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionClick = (section) => {
    if (section !== activeSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 300); // duration of the transition
    }
  };

  return (
    <section className={styles.OfferSection}>
      <h2 className={styles.offerHeader}>
        WHAT WE OFFER OUR{" "}
        <span className={`${styles.servicesSpan} ${shadowFont.className}`}>
          CLIENTS
        </span>
      </h2>
      <div className={styles.offerContainer}>
        <div className={styles.offerSelectProps}>
          <li
            className={activeSection === "webDesign" ? styles.active : ""}
            onClick={() => handleSectionClick("webDesign")}
          >
            Web Design
          </li>
          <li
            className={activeSection === "aiSolutions" ? styles.active : ""}
            onClick={() => handleSectionClick("aiSolutions")}
          >
            AI Solutions
          </li>
          <li
            className={
              activeSection === "contentMarketing" ? styles.active : ""
            }
            onClick={() => handleSectionClick("contentMarketing")}
          >
            Content Marketing
          </li>
          <li
            className={activeSection === "leadGeneration" ? styles.active : ""}
            onClick={() => handleSectionClick("leadGeneration")}
          >
            Lead Generation
          </li>
        </div>

        <div className={styles.OfferOfferContentContainer}>
          <div
            className={`${styles.section} ${activeSection === "webDesign" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "webDesign" && (
              <div className={styles.webDesignContainer}>
                <div className={styles.webDesignContent}>
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image src="/Vector (13).png" alt="offerImage" fill />
                      </div>
                    </div>
                    <h5>WEB DESIGN</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Drive your automotive company forward with innovative and
                    stunning web design
                  </h1>
                  <Link href="/webdesign">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Tailored website designs that reflect your brand's
                        identity and values.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Secure and efficient online booking and purchasing
                        systems.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Comprehensive SEO strategies to improve search engine
                        rankings.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Integration with CRM systems for better customer
                        relationship management.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>Virtual showrooms to display your vehicle lineup.</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.webDesignCardContainer} ${styles.webDesignCardContainer1}`}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/New Macbook Pro Mockup Front View.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard2}`}
                  >
                    <Image
                      src="/Pixel 8 Pro Mockup Obsidian.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "aiSolutions" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "aiSolutions" && (
              <div
                className={`${styles.webDesignContainer} ${styles.aiSolution}`}
              >
                <div className={styles.webDesignContent}>
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image src="/ai vector.png" alt="offerImage" fill />
                      </div>
                    </div>
                    <h5>AI SOLUTIONS</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Accelerate your business with auto-pilot efficiency
                    sponsored by our AI-powered Chatbot
                  </h1>
                  <Link href="/aisolution">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        24/7 Customer Support. Provide immediate answers to
                        customer queries, improving satisfaction and engagement.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Automatically qualify leads by asking pre-set questions
                        and directing them to the appropriate sales
                        representatives.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Facilitate easy scheduling of maintenance and service
                        appointments.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Inform customers about ongoing promotions, discounts,
                        and special events.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Provide real-time assistance on your dealership’s
                        website.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.webDesignCardContainer} ${styles.AisolutionContainer}`}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/Frame 1618868477.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "contentMarketing" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "contentMarketing" && (
              <div
                className={`${styles.webDesignContainer} ${styles.contentMarketing}`}
              >
                <div className={styles.webDesignContent}>
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image
                          src="/Vector (13).png"
                          alt="offerImage"
                          fill
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <h5>CONTENT MARKETING</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Expand your business reach through dynamic and engaging
                    content
                  </h1>
                  <Link href="/contentmarketing">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Create high-quality blog posts, articles, and
                        newsletters that captivate your audience.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Develop engaging social media content that promotes
                        interaction and brand loyalty.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Produce video content that showcases your products and
                        services.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Implement email marketing campaigns that nurture leads
                        and drive conversions.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Utilize SEO best practices to ensure your content
                        reaches the right audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.webDesignCardContainer} ${styles.contentMarketingContainer}`}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/content marketing girl.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "leadGeneration" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "leadGeneration" && (
              <div
                className={`${styles.webDesignContainer} ${styles.leadGeneration}`}
              >
                <div className={styles.webDesignContent}>
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image
                          src="/Vector (13).png"
                          alt="offerImage"
                          fill
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <h5>LEAD GENERATION</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Amplify your sales pipeline with effective lead generation
                    strategies
                  </h1>
                  <Link href="/leadgeneration">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Capture and nurture leads with targeted campaigns and
                        personalized messaging.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Utilize advanced analytics to track and optimize lead
                        generation efforts.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Implement CRM systems for seamless lead management and
                        follow-up.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Engage prospects through automated email marketing
                        campaigns.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Drive traffic and leads through effective social media
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.webDesignCardContainer}>
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard3}`}
                  >
                    <Image src="/Frame 1618868694.png" fill objectFit="cover" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

```

# src\sections\landingPage.jsx

```jsx
"use client";

import Image from "next/image";
import styles from "./sections.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";
const shadowFont = Shadows_Into_Light({
  subsets: ['latin'],
  weight:['400']
})

const LandingPage = () => {
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const navbarRef = useRef(null);
  const headerContentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(headerContentRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      heroTextRef.current,
      { x: -100, scale: 0.5 },
      { x: -0, scale: 1, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      heroSubRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.3, ease: "elastic.inOut", delay: 0.5 }
    );

    gsap.to(
      buttonRef.current,

      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "circ.inOut",
      }
    );
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.herobg}>
        {/* <Image src="/landing image.png" layout="fill" objectFit="cover" /> */}
        <video loop autoPlay muted>
          <source src="/Website Vid.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.HeroTextContainer}>
          <div className={styles.HeroText}>
          
            <h1 className={styles.heroHeader}>
            Transform your <span className={`${styles.heroSpan} ${shadowFont.className}`}> dealership </span> with Komosu Network
            </h1>
            <Link href="/about">
              <button className={styles.headerbtn}>
                Learn more
          
                  <div className={styles.buttonImage}>
                    <Image src="/View plan button (4).png" alt="vector" fill />
                  </div>
              </button>
            </Link>
          </div>
          <div className={styles.HeaderContent}>
            <p className={styles.heroSubText}>
              Our team of experts will help provide long lasting solutions for
              your business through web design, AI Solutions, and other high
              quality impressions through content marketing and lead generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

```

# src\sections\index.ts

```ts

```

# src\sections\faq.jsx

```jsx
'use client'
import { useState } from 'react';
import styles from './sections.module.css';
import { Shadows_Into_Light } from 'next/font/google';
import Image from 'next/image';

const shadow_Font = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
});

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.FAQSection}>
      <div className={styles.FAQHeaderContents}>
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>FAQs</p>
        </div>
        <h2>
          Got <span className={`${styles.servicesSpan} ${shadow_Font.className}`}>Questions?</span> we have the answers right
          <span className={`${styles.servicesSpan} ${shadow_Font.className}`}> Here</span>
        </h2>
      </div>
      <div className={styles.FAQContainer}>
        <div className={styles.FAQline}>
          <Image src="/Group 2.png" alt="lines" fill />
        </div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.FAQContainerContents}>
            <div className={styles.FAQContents} onClick={() => toggleFAQ(index)}>
              <h4>What Service Does Komosu Offer?</h4>
              <div className={styles.dropdownImg}>
                <Image src="/Frame 39.png" alt="Faq image" fill />
              </div>
            </div>
            <div className={`${styles.FAQAnswer} ${expandedIndex === index ? styles.expanded : ''}`}>
              <p>This is the answer to the question.</p>
            </div>
          </div>
        ))}
        <div className={styles.FAQline}>
          <Image src="/Group 3.png" alt="lines" fill />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

```

# src\lib\supabaseClient.js

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

```

# src\clientTestimonialData\testimonialData.tsx

```tsx
// TestimonialData.js
const TestimonialData = [
  {
    avatar: "/Subtract (1).png",
    company: "Jeep",
    data: "The team at Komosu Sales is incredibly knowledgeable and dedicated. Their real-time analytics and reporting tools have given us a deeper understanding of our sales performance and customer behavior. This has enabled us to make smarter, data-driven decisions, resulting in a noticeable boost in sales.",
    username: "David Allen",
    role: "MD. Jeep",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Tesla",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Elon Musk",
    role: "CEO. Tesla",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Ford",
    data: "Thanks to Komosu Sales, our sales process is now more efficient and effective. The team’s support and the platform’s features have played a crucial role in driving our sales growth.",
    username: "Jim Farley",
    role: "CEO. Ford",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Shell",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Mr shell",
    role: "CEO. Shell",
  },

  {
    avatar: "/Subtract (1).png",
    company: "Gareon",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Mr Gary",
    role: "CEO. Grareon",
  },
];

export default TestimonialData;

```

# src\clientTestimonialData\testimonialData.jsx

```jsx
// TestimonialData.js
const TestimonialData = [
  {
    avatar: "/Subtract (1).png",
    company: "Jeep",
    data: "The team at Komosu Sales is incredibly knowledgeable and dedicated. Their real-time analytics and reporting tools have given us a deeper understanding of our sales performance and customer behavior. This has enabled us to make smarter, data-driven decisions, resulting in a noticeable boost in sales.",
    username: "David Allen",
    role: "MD. Jeep",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Tesla",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Elon Musk",
    role: "CEO. Tesla",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Ford",
    data: "Thanks to Komosu Sales, our sales process is now more efficient and effective. The team’s support and the platform’s features have played a crucial role in driving our sales growth.",
    username: "Jim Farley",
    role: "CEO. Ford",
  },
  {
    avatar: "/Subtract (1).png",
    company: "Shell",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Mr shell",
    role: "CEO. Shell",
  },

  {
    avatar: "/Subtract (1).png",
    company: "Gareon",
    data: "Komosu Sales has revolutionized our approach to customer engagement. The insights provided have been invaluable in tailoring our strategies to meet customer needs. We’ve seen a significant increase in customer satisfaction and retention.",
    username: "Mr Gary",
    role: "CEO. Grareon",
  },
];

export default TestimonialData;

```

# src\app\page.module.css

```css
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--blueText);
  overflow: hidden;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  --color: hsl(0, 0%, 87%);
  --animation: 2s ease-in-out infinite;
}

.loader .circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25px;
  height: 25px;
  border: solid 2px var(--color);
  border-radius: 50%;
  margin: 0 10px;
  background-color: transparent;
  animation: circle-keys var(--animation);
}

.loader .circle .dot {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color);
  animation: dot-keys var(--animation);
}

.loader .circle .outline {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: outline-keys var(--animation);
}

.circle:nth-child(2) {
  animation-delay: 0.3s;
}

.circle:nth-child(3) {
  animation-delay: 0.6s;
}

.circle:nth-child(4) {
  animation-delay: 0.9s;
}

.circle:nth-child(5) {
  animation-delay: 1.2s;
}

.circle:nth-child(2) .dot {
  animation-delay: 0.3s;
}

.circle:nth-child(3) .dot {
  animation-delay: 0.6s;
}

.circle:nth-child(4) .dot {
  animation-delay: 0.9s;
}

.circle:nth-child(5) .dot {
  animation-delay: 1.2s;
}

.circle:nth-child(1) .outline {
  animation-delay: 0.9s;
}

.circle:nth-child(2) .outline {
  animation-delay: 1.2s;
}

.circle:nth-child(3) .outline {
  animation-delay: 1.5s;
}

.circle:nth-child(4) .outline {
  animation-delay: 1.8s;
}

.circle:nth-child(5) .outline {
  animation-delay: 2.1s;
}

@keyframes circle-keys {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dot-keys {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes outline-keys {
  0% {
    transform: scale(0);
    outline: solid 20px var(--color);
    outline-offset: 0;
    opacity: 1;
  }

  100% {
    transform: scale(1);
    outline: solid 0 transparent;
    outline-offset: 20px;
    opacity: 0;
  }
}

```

# src\app\page.js

```js
import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.landingPage}>
        <LandingPage />
      </section>
      <section className={styles.ServicesPage}>
        <Services />
        <section className={styles.Servisesflex}></section>
      </section>
      <section className={styles.VideoShowcasePage}>
        <VideoShowcase />
      </section>
      <section className={styles.OfferPage}>
        <Offer />
      </section>
      <section className={styles.OfferAnimationPage}>
        <OfferAnimation />
      </section>
      <section className={styles.TestimonialPage}>
        <Testimonials />
      </section>
      <section className={styles.FAQPage}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;

```

# src\app\loading.jsx

```jsx
import loadingtyles from "./page.module.css"
const Loading = () => {
  return <div className={loadingtyles.loading}>
      <div className={loadingtyles.loader}>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
</div>
  </div>;
};

export default Loading;

```

# src\app\layout.js

```js
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import { Montserrat } from "next/font/google";
// const montserrat = Montserrat({
//   subsets: ["latin"],
// });
// import satoshiFont from "@next/font/local";
export const metadata = {
  title: "Komosu Network",
  description:
    "Komosu Network is committed to revolutionizing the automotive industry by providing innovative solutions. our dedicated team of experts focuses on building strong relationships with clients, ensuring that they have more time to concentrate on what truly matters to them. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/935ec3d1-76db-4b99-ae26-db94d2a39025/webchat/config.js"
          defer
        ></script>
      </body>
    </html>
  );
}

```

# src\app\globals.css

```css
/* global.css */
@font-face {
  font-family: "SatoshiLight";
  src: url("/fonts/Satoshi-Light.otf") format("opentype");
}

@font-face {
  font-family: "SatoshiBold";
  src: url("/fonts/Satoshi-Bold.otf") format("opentype");
}

@font-face {
  font-family: "SatoshiRegular";
  src: url("/fonts/Satoshi-Regular.otf") format("opentype");
}

@font-face {
  font-family: "SatoshiBlack";
  src: url("/fonts/Satoshi-Black.otf") format("opentype");
}

@font-face {
  font-family: "Koulen";
  src: url("/fonts/AMOQz46as3KIBPeWgnA9kuYMUg.ttf") format("truetype");
}

@font-face {
  font-family: "ShadowsIntoLight";
  src: url("/fonts/ShadowsIntoLight.ttf") format("truetype");
}

:root {
  --navbar-bg: #131313;
  --text-Font-Light: satoshilight;
  --text-Font-Bold: satoshibold;
  --text-Font-Regular: satoshiregular;
  --text-Font-Black: satoshiblack;
  --Hero-Header: koulen;
  --custom-Font: shadowsintolight;
  --bg: #fff;
  --btn-Gradient: linear-gradient(45deg, #0500ff, #0500e6);
  --btn-Hover: 1px -2px 2px #ffffffa2, -1px -1px 1px #ffffffa2;
  --btn: #0500ff;
  --blueText: #020059;
  --text: white;

  /* Gradient color */
  --deepBlue: #3af3ff;
  --yellow: #ecc601;

  /* Hover color container*/
  --hover1: #dad9ff;
  --hover2: #f9edb0;
  --hover3: #534500;

  /* Testimonials container */
  --SkyBlue: #e6e6ff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  font-family: var(--text-Font-Light);
}
a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

textarea {
  font-family: var(--text-Font-Light);
  letter-spacing: 0.125ch;
}

textarea:focus {
  border-color: #007bff;
}
/* 
.container {
  background-color: var(--bg);
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */

/* Webkit-based browsers */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

```

# src\app\files.zip

This is a binary file of the type: Compressed Archive

# src\app\favicon.ico

This is a binary file of the type: Binary

# src\app\error.jsx

```jsx
"use client";
const error = () => {
  return <div>error</div>;
};

export default error;

```

# public\fonts\ShadowsIntoLight.ttf

This is a binary file of the type: Binary

# public\fonts\Satoshi-Regular.otf

This is a binary file of the type: Binary

# public\fonts\Satoshi-Light.otf

This is a binary file of the type: Binary

# public\fonts\Satoshi-Bold.otf

This is a binary file of the type: Binary

# public\fonts\Satoshi-Black.otf

This is a binary file of the type: Binary

# public\fonts\AMOQz46as3KIBPeWgnA9kuYMUg.ttf

This is a binary file of the type: Binary

# src\app\webdesign\webdesign.module.css

```css
.webdesignSection {
  margin-top: 5rem;
}

.webdesignLandingPage {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid#dad9ff;
  background: linear-gradient(269deg, #e6e6ff 1.83%, #fff 57.69%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  /* padding: 190px 96px; */
}

.webdesignLandingPageContainer {
  width: 1216px;
  position: relative;
  height: 90vh;
  margin-inline: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* margin-top: 3rem; */
}

@media (min-width: 1628px) {
  .webdesignLandingPageContainer {
    height: 80vh;
  }
}

.headerContent {
  color: var(--blueText);
  display: flex;
  align-items: center;
  gap: 1em;
}

.webdesignTextContainer {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  z-index: 66;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  top: 15%;
}

.webdesignTextContainer p {
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
  width: 544px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
}

.webdesignTextContainer h1 {
  margin: 1rem 0;
  color: var(--blueText);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  /* width: 40%; */
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.48px;
  /* width: 50%; */
}

.headerimg {
  position: relative;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.butttonBlue {
  background-color: var(--btn);
  padding: 0.5rem;
  border-radius: 50px;
}

.buttonImg {
  position: relative;
  width: 10px;
  height: 10px;
}

.buttonContainer {
  display: flex;
  align-items: center;
  gap: 1em;
  /* margin-top: 2rem; */
}

.buttonContainer .pricingbtn {
  display: flex;
  width: 184px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  background: var(--btn);
  border: none;
  color: #ffff;
  font-weight: 700;
  font-size: 1rem;
}

.buttonContainer .demobtn {
  display: flex;
  width: 184px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  background-color: #fff;
  border: 1px solid var(--btn);
  color: var(--btn);
  justify-content: space-around;
  font-weight: 700;
  font-size: 1rem;
}

.webdesignImageContainer {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  width: 700px;
  right: -7%;
  top: 8%;
}

.pricingBtn button {
  border: 3px solid red;
}

.webimage {
  position: relative;
  width: 282px;
  height: 80px;
  object-fit: cover;
  margin-left: 3rem;
}

.webimage2 {
  position: relative;
  width: 649px;
  height: 365.102px;
}

.vectorImagetop {
  right: 40%;
  top: 10%;
  width: 124px;
  height: 124px;
  position: absolute;
}

.vectorImagebottom {
  width: 124px;
  height: 124px;
  position: absolute;
  bottom: -10%;
  left: 0;
  transform: rotate(180deg);
}

/* WEB DESIGN SECTION */

.webWorksSection {
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
}

.webWorksContainer {
  max-width: 1300px;
  height: 100%;
  margin-inline: auto;
  margin-top: 2.5rem;
}

.webWorksSection .WebHeader {
  text-align: center;
  font-size: 40px;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
}

.headerSpan {
  color: var(--yellow);
}
.webWorksShowcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5em;
}

.webworkDesign1 {
  position: relative;
  width: 647px;
  height: 366px;
}

.webworkDesign2 {
  width: 633px;
  height: 366px;
  position: relative;
}

.webWorksShowcase2 {
  display: flex;
  justify-content: space-between;
  gap: 2.5em;
  margin-top: 2.5rem;
}

.webworkDesign3,
.webworkDesign4,
.webworkDesign5 {
  position: relative;
  width: 565px;
  height: 400px;
}

.webdesignContentsContainer {
  max-width: 1300px;
  min-height: 100vh;
  margin-inline: auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 6em;
}

.webdesignContents1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.webdesignTextContent,
.webdesignTextContent2 {
  width: 544px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-self: stretch; */
  gap: 1.5em;
  height: fit-content;
}

.webdesignTextContent {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}

.webdesignTextContent2 {
  align-items: flex-start;
}

.webdesignTextContent button,
.webdesignTextContent2 button {
  width: 160px;
  height: 55px;
  padding: 8px 12px;
  justify-content: center;
  border-radius: 36px;
  border: 1px solid var(--btn);
  color: var(--btn);
  background-color: transparent;
  font-weight: 600;
}

.webdesignContents1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.webdesignTextContent h2,
.webdesignTextContent2 h2 {
  font-size: 40px;
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.webdesignTextContent p,
.webdesignTextContent2 p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  font-family: var(--text-Font-Regular);
  color: var(--blueText);
}

.webdesignImg {
  position: relative;
  width: 562px;
  height: 400px;
}

.webdesignContent2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* .webdesignTextContent2 {
  width: 50%;
} */

/* WEB DESIGN PRICING SECTION */

.WebPricingSection {
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
}

.WebPricingSectionHeader {
  color: var(--blueText);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
}

.WebPricingSectionHeader p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
}

.WebPricingSectionHeader h2 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  text-transform: capitalize;
  margin-bottom: 6px;
  font-family: var(--text-Font-Bold);
}

.WebPricingContainer {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.webpricingSpan {
  color: var(--btn);
}

.AnnualPricingContainer {
  text-align: center;
  margin-top: 3rem;
  display: flex;
  padding: 10.5px 12px;
  justify-content: center;
  width: fit-content;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 48px;
  background-color: var(--blueText);
  color: #fff;
  gap: 1.5em;
}

.annualspan {
  color: var(--yellow);
}

.monthlybg {
  background-color: #fff;
  color: var(--blueText);
  padding: 1rem 1.5rem;
  border-radius: 48px;
  font-family: var(--text-Font-Bold);
}

.tickImg {
  position: relative;
  width: 20px;
  height: 20px;
}

.tickImgBg {
  background-color: var(--blueText);
  border-radius: 50px;
  padding-right: 0.2rem;
  padding-bottom: 0.2rem;
}
.webPricingContents {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 1em; */
  margin-top: 3rem;
}

.webBasicPlan {
  width: 424px;
  padding: 40px 20px;
  border-radius: 20px 0 0 20px;
  border: 1px solid var(--blueText);
  gap: 1em;
  display: flex;
  flex-direction: column;
}
.webBasicPlan h4 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.webBasicPlan p {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.18px;
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
}

.webBasicPlan h3 {
  color: var(--btn);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
  font-family: var(--text-Font-Bold);
}

.webBasicPlan h3 span {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.36px;
}

.webBasicPlan .lineThrough {
  color: #818185;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.48px;
  text-decoration: line-through;
  text-transform: capitalize;
}

.webBasicPlan button {
  height: 60px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--btn);
  background: #fff;
  color: var(--btn);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}

.webbasicplanfeatures {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}

.webbasicplanfeaturesContent {
  display: flex;
  align-items: flex-start;
  gap: 1.5em;
}

.webbasicplanfeaturesContent p {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  font-family: var(--text-Font-Light);
}

.webPremiumPlan {
  background-color: var(--btn);
  color: #fff;
  position: relative;
  border-radius: 20px;
}

.webPremiumPlan h4 {
  color: inherit;
}

.webPremiumPlan p {
  color: inherit;
}

.webPremiumPlan h3 {
  color: #fff;
}

.webPremiumPlan .lineThrough {
  color: #fff;
}

.webStandardPlan {
  position: relative;
  margin-top: 4rem;
  border-radius: 0px 20px 20px 0;
}

.webStandardPlan::before {
  content: "Most POPULAR";
  width: 167px;
  padding: 8px;
  position: absolute;
  top: -10%;
  right: 5%;
  border: 2px solid var(--btn);
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  text-transform: capitalize;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  color: var(--btn);
  font-family: "Shadows Into Light", cursive;
}

.enterprisePlan {
  background-color: var(--yellow);
  color: #000000;
}

.enterprisePlan h3 {
  color: #000000;
}

.enterprisePlan .lineThrough {
  color: #000000;
}

```

# src\app\webdesign\page.jsx

```jsx
import WebDesignLandingpage from "./webdesignlandingpage/WebDesignLandingpage";
import webstyle from "./webdesign.module.css";
import WebDesignWorks from "./webdesignworks/WebDesignWorks";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
const webdesign = () => {
  return (
    <section className={webstyle.webdesignSection}>
      <WebDesignLandingpage />
      <WebDesignWorks />
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default webdesign;

```

# src\app\request-demo\request-demo.module.css

```css
.requestDemosection {
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
}

.requestDemocontainer {
  max-width: 1120px;
  height: 100%;
  margin: 5rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 7rem;
}

.requestDemoTextcontainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
}

.textheader {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.headerimgbg {
  position: relative;
  background-color: var(--hover1);
  padding: 0.5rem;
  border-radius: 10px;
}

.textheader h4 {
  font-family: var(--text-Font-Black);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
}

.requestDemoTextcontainer h1 {
  max-width: 90%;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 60px */
  letter-spacing: -0.5px;
  color: var(--blueText);
}

.demospan {
  color: var(--yellow);
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.5px;
  text-transform: capitalize;
}

.headerimg {
  position: relative;
  width: 20px;
  height: 20px;
}

.TickImg {
  position: relative;
}

.demoFeaturesContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.demoFeatures {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.demoFeatures p {
  color: var(--blueText);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
}

.demoForm {
  width: 100%;
  position: relative;
  padding: 40px 24px;
  align-items: center;
  gap: 24px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(40, 40, 43, 0.2);
}

.inputflex {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}
.formGroup {
  display: flex;
  gap: 0.5em;
}
.name {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.name input {
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
}
.inputflex input {
  display: flex;
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
}

.companyName input {
  display: flex;
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
  width: 100%;
}

.demoForm button {
  display: flex;
  height: 50px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-top: 1.5rem;
  border-radius: 8px;
  background: var(--btn);
  color: #fff;
  border: none;
  width: 100%;
}

.demoForm h1 {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  color: var(--blueText);
  margin-top: 24px;
  margin-bottom: 8px;
}

.demoForm .formname {
  margin-top: 0;
}

.planContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
  position: relative;
  width: 100%;
}

.planContainer i {
  position: absolute;
  font-size: 2rem;
  right: 0;
}

```

# src\app\request-demo\page.jsx

```jsx
"use client";
import styles from "./request-demo.module.css";
import Image from "next/image";
import { Shadows_Into_Light, Montserrat } from "next/font/google";
import TickImg from "../webdesign/components/Tickimg";
import DemoForm from "../components/demoForm/demoForm";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "600"],
});
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const RequestDemoPages = () => {
  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  return (
    <section className={styles.requestDemosection}>
      <div className={styles.requestDemocontainer}>
        <div className={styles.demoTextwrapper}>
          <div className={styles.textheader}>
            <div className={styles.headerimgbg}>
              <div className={styles.headerimg}>
                <Image src="/Vector (5).png" fill alt="Header Image" />
              </div>
            </div>
            <h4>REQUEST DEMO</h4>
          </div>
          <div className={styles.requestDemoTextcontainer}>
            <h1 className={montserrat.className}>
              Discover how{" "}
              <span className={`${styles.demospan} ${shadowsFont.className}`}>
                Komosu
              </span>{" "}
              can accelerate your business
            </h1>
            <div className={styles.demoFeaturesContainer}>
              {[
                "Tailored website designs that reflect your brand’s identity and values.",
                "Comprehensive SEO strategies to improve search engine rankings.",
                "Secure and efficient online booking and purchasing systems.",
              ].map((feature, index) => (
                <div className={styles.demoFeatures} key={index}>
                  <div className={styles.TickImg}>
                    <TickImg />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.demoForm}>
          <DemoForm />
        </div>
      </div>
    </section>
  );
};

export default RequestDemoPages;

```

# src\app\pricing\pricing.module.css

```css
.pricingSection {
  margin-top: 8rem;
}

.pricingLandingPage {
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin-top: 6rem;
}

.pricingLandingPageContainer {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
}

.pricingHeaderContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.pricingHeaderContent h1 {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 60px */
  letter-spacing: -0.5px;
  color: var(--blueText);
}

.pricingHeaderContent p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
}

.pricingHeaderContent button {
  width: 160px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: var(--btn);
  border-radius: 36px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: 0.36px;
  border: none;
}

.pricingLandingPageContainer {
  margin-top: 6rem;
}

.pricingLandingPageContainerContent {
  margin-top: 3rem;
}

.pricingContentWrapper {
  display: flex;
}

.pricingLandingPageContainerHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.pricingLandingPageContainerHeader h4 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.pricingLandingPageContainerHeader p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
}

.pricingContentImg {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
}

.pricingContentHeader {
  display: flex;
  gap: 1.5em;
  align-items: flex-start;
}

.arrowWrapper {
  display: flex;
  align-items: center;
  gap: 1.5em;
}

.arrowWrapper h4 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.pricingContentImgBg {
  background-color: var(--btn);
  width: 24px;
  height: 24px;
  position: relative;
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricingContent {
  display: flex;
  width: 560px;
  padding: 24px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 20px 0px 0px 0px;
  border: 1px solid #dad9ff;
  color: var(--blueText);
  transition: 0.4s ease;
}

.pricingContent h3 {
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 27px */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.pricingContent:hover {
  border: 1px solid rgba(2, 2, 85, 0.242);
  background: linear-gradient(
    95deg,
    rgba(197, 196, 196, 0.171),
    rgba(151, 151, 255, 0.112)
  );
  transition: 0.3s ease-in;
}

.pricingContent:hover .pricingContentImgBg {
  background-color: #fff;
}

.pricingContent:hover .pricingContentImgBgblue {
  background-color: var(--btn);
}

.pricingContent h3 {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  padding-left: 5rem;
}

.arrowLeft {
  position: relative;
  width: 24px;
  height: 24px;
}

.pricingContent2 {
  border-radius: 0px 20px 0px 0px;
}

.pricingContent2 .pricingContentImgBg,
.pricingContent3 .pricingContentImgBg {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid var(--btn);
}

.pricingContent3 {
  border-radius: 0px 0px 0px 20px;
}

.pricingContentWrapper2 .pricingContent2 {
  border-radius: 0px 0px 20px 0px;
}

```

# src\app\pricing\page.jsx

```jsx
import Pricing from "./pricinglandingpage/pricing";
import pricingStyles from "./pricing.module.css"
const PricingPage = () => {
  return (
    <section className={pricingStyles.pricingSection}>
      <Pricing />
    </section>
  );
};

export default PricingPage;

```

# src\app\leadgeneration\page.jsx

```jsx
import leadStyles from "./leadgeneration.module.css";
import LeadgenLandingpage from "./leadgenlandingpage/LeadgenLandingpage";
import LeadGenServices from "./leadgenservices/leadGenServices";
const LeadGeneration = () => {
  return (
    <section className={leadStyles.LeadGenerationPage}>
      <LeadgenLandingpage />
      <LeadGenServices />
    </section>
  );
};

export default LeadGeneration;

```

# src\app\leadgeneration\leadgeneration.module.css

```css
.LeadGenerationPage {
  width: 100%;
  min-height: 100vh;
  /* border: 1px solid red; */
  margin-top: 5rem;
}

.LeadingGenSection {
  border-bottom: 1px solid var #fcf6d9;
  background: linear-gradient(269deg, #fdf9e6 44.62%, #fff 91.54%);
  position: relative;
  max-width: 100%;
  min-height: 80vh;
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
  background-color: var(--hover2);
}

.LeadGenContainer {
  position: relative;
  max-width: 100%;
  margin-inline: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.vectortopImg {
  position: absolute;
  width: 77px;
  height: 77px;
  top: 10%;
  right: 22%;
}

.leadGenTextContainer {
  padding-left: 98px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 540px;
}

.LeadGenContainer .leadtextheader {
  display: flex;
  gap: 1em;
  align-items: center;
}

.textheaderimg {
  position: relative;
  width: 20px;
  height: 20px;
}

.leadtextheader h4 {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: var(--blueText);
}

.leadGenTextContainer h1 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  color: var(--blueText);
}
.leadGenaImageContainer {
  position: relative;
}

.leadmanImg {
  position: relative;
  width: 914px;
  height: 674px;
}

.leadimgstat {
  position: absolute;
  width: 250px;
  height: 150px;
  right: 60%;
  top: 15%;
}

.leadimgstat2 {
  position: absolute;
  width: 280px;
  height: 200px;
  right: 45%;
  bottom: 7%;
}

/* LEAD GENERATION SERVICES SECTION */

.leadServicesSection {
  width: 100%;
  height: 100%;
  margin-top: 6rem;
}

.leadGenServicesContainer {
  /* padding: 6rem 0; */
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 96px;
}

.leadGenServicesContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.leadGenServicesContentText h4 {
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  /* width: 80%; */
  margin-bottom: 1rem;
  font-family: var(--text-Font-Bold);
}

.leadGenServicesContentText {
  width: 40%;
}

.leadImageWrapper {
  position: relative;
}

.leadImgabsolute {
  position: absolute;
  width: 200px;
  height: 150px;
  top: 0;
  left: -10%;
  z-index: 22;
}

.leadImgabsolutebottom {
  position: absolute;
  width: 250px;
  height: 150px;
  bottom: -10%;
  right: -10%;
  z-index: 22;
}
.leadservicesImg {
  position: relative;
  width: 497.683px;
  height: 340.879px;
}

.servicesContactSection {
  width: 100%;
  height: 70vh;
  background-color: var(--blueText);
  margin-top: 6rem;
}

.servicesContactContainer {
  position: relative;
  max-width: 1120px;
  margin-inline: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.servicesContactContainer h2 {
  width: 730px;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  margin-bottom: 1.5rem;
}

.servicesContactContainer button {
  width: 200px;
  height: 55px;
  padding: 8px;
  border-radius: 36px;
  background-color: var(--btn);
  color: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: 0.36px;
  border: none;
}

.servicesContactImgtop {
  position: absolute;
  width: 132px;
  height: 26px;
  top: 10%;
  right: 0;
  z-index: 22;
}

.servicesContactImgbottom {
  width: 194px;
  height: 36px;
  position: absolute;
  bottom: 40%;
  left: 0;
}

```

# src\app\contentmarketing\page.jsx

```jsx
import contentStyles from "./contentmarketing.module.css";
import ContentMarketingLandingPage from "./contentmarketinglandingpage/ContentMarketingLandingPage";
import ContentMarketingServices from "./contentmarketingservices/ContentMarketingServices";
import ContentPricing from "./contentpricing/ContentPricing";
const Contentmarketing = () => {
  return (
    <section className={contentStyles.Contentmarketingpage}>
      <ContentMarketingLandingPage />
      <ContentMarketingServices />
      <ContentPricing />
    </section>
  );
};

export default Contentmarketing;

```

# src\app\contentmarketing\contentmarketing.module.css

```css
.Contentmarketingpage {
  width: 100%;
  min-height: 100vh;
  margin-top: 5.6rem;
}

.contentSection {
  width: 100%;
  height: 100%;
  border-top: 2px solid #dad9ff;
  background: linear-gradient(269deg, #e6e6ff 1.83%, #fff 57.69%);
  position: relative;
  overflow-y: hidden;
  padding: 96px 0;
}

.contentContainer {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
}

.contentheaderImg {
  position: relative;
  width: 20px;
  height: 20px;
}

.contentheader {
  display: flex;
  align-items: center;
  gap: 1em;
}

.contentText {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.contentheader h4 {
  color: var(--blueText);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
}

.contentText h2 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  /* width: 80%; */
  color: var(--blueText);
}

.contentText p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
  width: 75%;
}
.contentImages {
  position: relative;
  width: 719px;
  height: 479px;
}

.vectorbottom {
  position: absolute;
  width: 108px;
  height: 108px;
  bottom: 0;
  left: 0;
}

/* CONTENT MARKETING SERVICES SECTION */

.contentservicessection {
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin: 6rem 0;
}

.contentservicescontainer {
  max-width: 1200px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 96px;
  /* padding: 4rem 0; */
}

.contentservicecontent {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
.contentservicecontent h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
  color: var(--blueText);
  margin-bottom: 1.5rem;
}

.contentServiceText p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  margin-bottom: 1.5rem;
}

.contentServiceText {
  width: 40%;
}
.contentservicesImg {
  width: 500px;
  height: 500px;
  position: relative;
}

.contentservicesImg2 {
  border-radius: 20px;
  width: 671.674px;
  height: 471px;
  /* background: var(--hover1); */
}

/* CONTENT MARKETING PRICING SECTION */

.contentpricingsection {
  width: 100%;
  min-height: 100vh;
  margin-top: 2rem;
}

.ContentPricingHeader {
  color: var(--blueText);
  text-align: center;
  margin-bottom: 1rem;
  line-height: 2;
}

.ContentPricingHeader h2 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  font-family: var(--text-Font-Bold);
}

.contentspan {
  color: var(--yellow);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.32px;
  text-transform: capitalize;
}

.contentpricingcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

```

# src\app\contact-us\page.jsx

```jsx
import ContactForm from "../components/contactForm/contactForm";
import { supabase } from "../../lib/supabaseClient.js";
import styles from "./contact.module.css";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.ContactText}>
        <div className={styles.contactHeader}>
          <h2>
            Get in{" "}
            <span className={`${styles.contactspan} ${shadows.className}`}>
              Touch{" "}
            </span>
            with us
          </h2>
          <p>Say hello to us - Let us know how we can be of help</p>
        </div>
        <div className={styles.contactLocations}>
          <div className={styles.phone}>
            <i className="ri-phone-line"></i>
            <a href="tel:+44-234-23-4568">+44-234-23-4568</a>
          </div>
          <div className={styles.mail}>
            <i className="ri-mail-line"></i>
            <a href="mailto:Komosunetwork@gmail.com">Komosunetwork@gmail.com</a>
          </div>
          <div className={styles.address}>
            <i className="ri-map-pin-line"></i>
            230 Pine View, Birmingham. UK
          </div>
        </div>
        <div className={styles.socialLink}>
          <a href="http://facebook.com">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="http://twitter.com">
            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="http://youtube.com">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;

```

# src\app\contact-us\contact.module.css

```css
.contactSection {
  max-width: 1300px;
  min-height: 100vh;
  margin-inline: auto;
  padding-top: 6rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3em;
  padding-bottom: 3rem;
}
.contactspan {
  color: var(--yellow);
}

.contactHeader {
  color: var(--blueText);
}

.contactHeader h2 {
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 76.8px */
  letter-spacing: -0.64px;
}

.contactLocations {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 1.5rem;
  color: var(--blueText);
}

.contactLocations div {
  display: flex;
  align-items: center;
  gap: 1em;
}

.contactLocations a,
.contactLocations address {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  font-family: var(--text-Font-Regular);
}

.socialLink {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2em;
}

.socialLink i {
  color: #fff;
  background-color: var(--btn);
  padding: 0.7rem;
  font-size: 1.3rem;
  border-radius: 10px;
  transition: 0.5s ease-in;
}

.contactForm {
  width: fit-content;
  position: relative;
  padding: 40px 24px;
  align-items: center;
  gap: 24px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(40, 40, 43, 0.2);
}

.socialLink i:hover {
  background-color: var(--blueText);
  color: var(--yellow);
}

.contactForm input {
  color: var(--blueText);
  display: flex;
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
}

.contactForm button {
  display: flex;
  width: 590px;
  height: 50px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  background-color: var(--btn);
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 1.12rem;
  font-weight: 700;
  transition: 0.3s ease-in;
  cursor: pointer;
}

.contactForm button:hover {
  background-color: var(--blueText);
  color: var(--yellow);
}

```

# src\app\components\supabaseClient.js

```js
// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

```

# src\app\case-study\page.jsx

```jsx
"use client";
import casestyles from "./casestudy.module.css";
import CaseStudyHeader from "./caseStudyHeader/CaseStudyHeader";
import DigitalTransformationSection from "./digitalTransformation/DigitalTransformationSection";
import CaseStudyContactLink from "./casestudycontact/CaseStudyContactLink";
const CaseStudyPage = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <CaseStudyHeader />
      <DigitalTransformationSection />
      <CaseStudyContactLink />
    </section>
  );
};

export default CaseStudyPage;

```

# src\app\case-study\casestudy.module.css

```css
.CaseStudyPage {
  margin-top: 6rem;
}

.CaseStudyHeader {
  max-width: 1216px;
  /* border: 2px solid blue; */
  margin-inline: auto;
  height: 100%;
  /* border: 2px solid red; */
  margin-top: 131px;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--yellow);
}

.CaseStudyHeader h5 {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  font-family: var(--text-Font-Bold);
  color: var(--btn);
}

.CaseStudyHeader h1 {
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.casespan {
  color: var(--yellow);
}

/* DIGITAL TRANSFORMATION SECTION */

.DigitalTransformationSection {
  max-width: 1216px;
  /* border: 2px solid blue; */
  margin-inline: auto;
  height: 100%;
  margin-top: 6rem;
}

.headingsection h5 {
  color: var(--btn);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  font-family: var(--text-Font-Bold);
  margin-bottom: 16px;
}

.headingsection h2 {
  color: var(--blueText);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  font-family: var(--text-Font-Bold);
}

.headingsection p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  margin-top: 24px;
}

/* SECOND HEADING SECTION */

.secondheadingsection {
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
}

.challanges {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.challangescontent {
  display: flex;
  align-items: center;
  gap: 1em;
}

.secondheadingsection h4 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.challangescontent {
  display: flex;
  align-items: flex-start;
}

.Tickimg {
  position: relative;
}
.challangescontent p {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
}

/* THIRD HEADING SECTION */

.thirdheadingsection {
  margin-top: 6rem;
}

.thirdsectionheader {
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
  text-align: center;
}

.textWrapper {
  /* border: 2px solid red; */
  margin-top: 1.5rem;
}

.textcontentflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.textconent {
  /* border: 3px solid blue; */
  max-width: 544px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.textconent h4 {
  color: var(--blueText);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: 0.48px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.textconent p {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
}

.lastheadingtext {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
  text-align: center;
  margin-top: 6rem;
  width: 1120px;
}

/* CASE STUDY CONTACT SECTION */

.contactLinksection {
  width: 100%;
  height: 400px;
  margin-top: 6rem;
  background: #e6e6ff;
}

.contactLinkContainer {
  position: relative;
  max-width: 1300px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.contactLinkContainer h4 {
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  font-family: var(--text-Font-Bold);
}

.contactLinkContainer button {
  color: #fff;
  font-family: var(--text-Font-Bold);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: 0.32px;
  display: flex;
  width: 200px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  background: var(--btn);
  border: none;
  cursor: pointer;
}

.topimgabsolute {
  position: absolute;
  width: 194px;
  height: 36px;
  left: 0;
  top: 50%;
}

.bottomimgabsolute {
  position: absolute;
  width: 194px;
  height: 36px;
  right: 0;
  top: 10%;
}

```

# src\app\blog\page.js

```js
const BlogPage = () => {
  return <div>BlogPage</div>;
};

export default BlogPage;

```

# src\app\aisolution\page.jsx

```jsx
import Aistyles from "./Aisolution.module.css";
import AiLandingpage from "./aisolutionlandingpage/AiLandingpage";
import AisolutionServices from "./aisolutionservices/AisolutionServices";
import Aipricing from "./aisolutionpricing/Aipricing";

const Aisolution = () => {
  return (
    <section className={Aistyles.AiSolutionSection}>
      <AiLandingpage />
      <AisolutionServices />
      <Aipricing />
    </section>
  );
};

export default Aisolution;

```

# src\app\aisolution\Aisolution.module.css

```css
.AiSolutionSection {
  width: 100%;
  min-height: 100vh;
  /* border: 2px solid red; */
  margin-top: 6rem;
}

/* AI SOLUTIONS LANDING PAGE SECTION */

.AiLandingPage {
  background-color: var(--hover2);
  border-bottom: 1px solid #fcf6d9;
  border-top: 2px solid #fcf6d9;
  background: linear-gradient(269deg, #fdf9e6 44.62%, #fff 91.54%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  overflow-y: hidden;
  padding: 0 6rem;
}

.ailandingpageContainerTextContent {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.ailandingpageContainerTextContent p {
  color: var(--blueText);
  font-family: var(--text-Font-Regular);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
}

.vectorImgtop {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
}

.vectorImgbottom {
  position: absolute;
  width: 108px;
  height: 108px;
  right: 35%;
  bottom: 15%;
}

.ailandingpageContainer {
  max-width: 1400px;
  height: 100%;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
}

.aiheaderImg {
  width: 20px;
  height: 20px;
  position: relative;
}

.AiLandingPageHeader {
  display: flex;
  gap: 1em;
}

.AiLandingPageHeader h4 {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  color: var(--blueText);
}

.ailandingpageContainer h2 {
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.48px;
  color: var(--blueText);
  width: fit-content;
}

.ailandingpageImage {
  position: relative;
}

.aigirlImg {
  position: relative;
  width: 700px;
  height: 700px;
}

.ailandingpageImagetop {
  position: absolute;
  width: 300px;
  height: 100px;
  object-fit: contain;
  top: 25%;
  left: 10%;
}

.ailandingpageImagebottom {
  position: absolute;
  width: 300px;
  height: 100px;
  object-fit: contain;
  bottom: 10%;
  left: 10%;
  z-index: 100;
}

/* AI SOLUTION SERVICES SECTION */

.AisolutionServicesSection {
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
}

.AisolutionServicesContainer {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.AisolutionServicesText h3 {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
  align-self: stretch;
  color: var(--blueText);
  margin-bottom: 1rem;
  font-family: var(--text-Font-Bold);
}

.aiservicesImg {
  position: relative;
  width: 478px;
  height: 403px;
}

.AisolutionServicesContent {
  display: flex;
  align-items: center;
}

.AisolutionServicesContent2 .AisolutionServicesText {
  width: 60%;
  margin-left: 6rem;
}

.AisolutionServicesContent2 {
  justify-content: space-between;
  display: flex;
  align-items: center;
}

/* AI SOLUTION PRICING SECTION */

.AipricingSection {
  width: 100%;
  min-height: 100vh;
}

.AipricingHeader {
  text-align: center;
}

.AipricingHeader h2 {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.48px;
  color: var(--blueText);
}

.AipricingHeader .Aispan {
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.48px;
  text-transform: capitalize;
  color: var(--yellow);
}

.AipricingHeader p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  color: var(--blueText);
  margin-top: 0.5rem;
}

.AipricingContainer {
  max-width: 1300px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

```

# src\app\admin\page.js

```js
import React from "react";

const AdminPage = () => {
  return <div>AdminPage</div>;
};

export default AdminPage;

```

# src\app\about\page.js

```js
"use client";
import Navbar from "../components/navbar/Navbar";
import AboutUsLandingPage from "./aboutSections/aboutUsLandingPage";
import WhoareweSection from "./whoareWeSection/whoarewe.jsx";
import aboutstyles from "./aboutSection.module.css";
import OurvisionSection from "./ourVisionSection/ourvision";
import VideoShowcase from "../../sections/videoShowcase";
import OurSolutionSection from "./ourSolutionSection/ourSolution";
import ServicesFlex from "../../sections/servicesflex.jsx";
import MeetOurTeam from "./meetOurTeamSection/meetOurTeam";

const AboutPage = () => {
  return (
    <section className={aboutstyles.aboutUsLandingPage}>
      <Navbar />
      <AboutUsLandingPage />
      <WhoareweSection />
      <OurvisionSection />
      <VideoShowcase />
      <OurSolutionSection />
      <ServicesFlex />
      <MeetOurTeam />
    </section>
  );
};

export default AboutPage;

```

# src\app\about\aboutSection.module.css

```css
.aboutUsLandingPage {
  /* border: 2px solid black; */
  width: 100%;
  min-height: 100vh;
  margin-top: 5rem;
}

.aboutUsLandingSection {
  max-width: 100%;
  min-height: 100%;
  padding-top: 6rem;
}

.aboutPageHeader {
  border-bottom: 2px solid var(--yellow);
  padding-bottom: 1.5rem;
  max-width: 1120px;
  height: 100%;
  position: relative;
  margin-inline: auto;
}

.aboutPageHeader h2 {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 60px */
  letter-spacing: -0.5px;
  color: var(--blueText);
  font-family: var(--text-Font-Bold);
}

.aboutPageHeader p {
  font-size: 1.13rem;
  color: var(--blueText);
}

.aboutUsSpan {
  color: var(--yellow);
}

/* WHO ARE WE SECTION */

.Whoarewesection {
  max-width: 1300px;
  min-height: 100vh;
  margin-inline: auto;
  margin-top: 6.125rem;
}

.whoareweHeader {
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin-inline: auto;
}

.whoareweHeader h4 {
  color: var(--btn);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 1rem;
  font-family: var(--text-Font-Bold);
}

.whoareweHeader h2 {
  color: var(--blueText);
  max-width: 858px;
  font-size: 3rem;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  font-family: var(--text-Font-Bold);
}

.whoareweHeader p {
  color: var(--blueText);
  max-width: 773px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  align-self: flex-end;
  margin-top: 2rem;
}

.whoareweImageContainer {
  max-width: 1120px;
  height: 100%;
  position: relative;
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
  margin-top: 6.125rem;
  margin-inline: auto;
  gap: 64px;
}

.whoareWeImg {
  position: relative;
  width: 640px;
  object-fit: cover;
  height: 443px;
  transition: transform 0.5s ease;
}

.whoareWeImg img {
  border-radius: 10px;
}

.whoareWeImg:hover,
.whoareWeImg2:hover {
  transform: scale(0.99);
}

.whoareWeImg::after,
.whoareWeImg2::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--btn);
  right: -2%;
  top: 2%;
  border-radius: 10px;
  z-index: -1;
  transition: transform 0.5s ease;
}

.whoareWeImg2::after {
  background-color: var(--yellow);
}

.whoareWeImg:hover::after,
.whoareWeImg2:hover::after {
  right: -2%;
  top: 2%;
  transform: scale(0.99);
}

.whoareWeImg2 {
  position: relative;
  width: 625.344px;
  object-fit: cover;
  height: 443px;
  margin-top: 5rem;
  transition: transform 0.5s ease;
}
.whoareWeImg2 img {
  border-radius: 10px;
}

/* OUR VISION SECTION */

.OurvisionSection {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  margin-top: 98px;
  margin-bottom: 6.125rem;
}

.OurvisionSection .whoareweHeader p {
  margin-top: 2rem;
}

/* OUR SOLUTION SECTION */

.OurSolutionSection {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

/* MEET OUR TEAM SECTION */

.MeetOurTeamSection {
  max-width: 100%;
  height: 100%;
  margin: 6.125rem 0;
}

.MeetOurTeamContainer {
  max-width: 1120px;
  height: 100%;
  margin-inline: auto;
}

.MeetOurTeamHeader {
  padding-bottom: 0;
  border: none;
  margin-top: 3rem;
}

.MeetOurTeamContainer .aboutPageHeader h2 {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.teamImage {
  position: relative;
  width: 266px;
  min-height: 241px;
  transform: rotate(-1deg);
  flex-shrink: 0;
  margin-top: 1.5rem;
  border-radius: 10px;
}

.team2 .teamImage {
  transform: rotate(0);
}

.teamContainer {
  margin-top: 6.125rem;
  display: flex;
  position: relative;
  max-width: 1100px;
  height: 100%;
}

.team {
  width: 330px;
  height: 469px;
  transform: rotate(-12deg);
  border-radius: 20px;
  background: var(--btn);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  transition: 0.3s ease-in;
}

.team1:hover {
  transform: rotate(0deg);
  z-index: 5;
}

.team2:hover {
  transform: rotate(0deg);
  z-index: 5;
}
.team3:hover {
  transform: rotate(0deg);
  z-index: 5;
}

.team2 {
  background: var(--yellow);
  color: #000000;
  transform: rotate(0);
}

.team3 {
  background: var(--hover1);
  color: var(--blueText);
  z-index: 3;
}

.team4 {
  background: var(--hover2);
  color: #534500;
  transform: rotate(-4deg);
}

.team4:hover {
  transform: rotate(0deg);
  z-index: 5;
}
.team::before {
  content: "Tyler";
  width: 123.051px;
  height: 60px;
  background-color: var(--btn);
  top: -8%;
  font-size: 1.5rem;
  left: 0;
  position: absolute;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--text-Font-Bold);
}
.team2::before {
  background: var(--yellow);
  content: "Sharon";
}

.team3::before {
  background: var(--hover1);
  color: var(--blueText);
  content: "Steve";
}
.team4::before {
  background: var(--hover2);
  color: #534500;
  content: "Sharon";
}
.TeamRole {
  margin-top: 1rem;
  align-self: flex-start;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.18px;
  text-transform: capitalize;
}

.teamcontent {
  font-weight: 300;
  align-self: flex-start;
  margin-top: 1rem;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

```

# src\app\webdesign\webdesignworks\WebDesignWorks.jsx

```jsx
import webstyle from "../webdesign.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
import WebDesignPricingPlans from "../webdesignpricing/WebDesignPricingPlans";
import Link from "next/link";
import GetStarted from "../components/GetStarted";

const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const WebDesignWorks = () => {
  return (
    <section className={webstyle.webWorksSection}>
      {/* <h2 className={webstyle.WebHeader}>
        Our{" "}
        <span className={`${webstyle.headerSpan} ${shadowsFont.className}`}>
          Past
        </span>{" "}
        Works
      </h2>
      <div className={webstyle.webWorksContainer}>
        <div className={webstyle.webWorksShowcase}>
          <div className={webstyle.webworkDesign1}>
            <Image src="/Rectangle 61.png" fill />
          </div>
          <div className={webstyle.webworkDesign2}>
            <Image src="/Rectangle 62.png" fill />
          </div>
        </div>
      </div>
      <div className={webstyle.webWorksShowcase2}>
        <div className={webstyle.webworkDesign3}>
          <Image src="/Rectangle 30.png" fill />
        </div>
        <div className={webstyle.webworkDesign4}>
          <Image src="/Rectangle 29.png" fill />
        </div>
        <div className={webstyle.webworkDesign5}>
          <Image src="/Rectangle 30.png" fill />
        </div>
      </div> */}
      <div className={webstyle.webdesignContentsContainer}>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Frame 1618868702.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2>Digital Interaction Enhancements</h2>
            <p>
              Redefine customer interactions with innovative digital solutions.
              From virtual showrooms to online vehicle reservations with
              refundable fees, we empower your customers while reducing reliance
              on physical contact.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={webstyle.webdesignContents1}>
          <div className={webstyle.webdesignTextContent}>
            <h2>Integrated Payment Solutions</h2>

            <p>
              Seamlessly integrate secure payment gateways into your
              dealership's website. Enable customers to make online purchases,
              deposits, or reservations, transforming the transaction
              experience.
            </p>
            <GetStarted />
          </div>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/card.png" fill />
            </div>
          </div>
        </div>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Frame 1618868705.png" fill />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2>Customized User Experience</h2>
            <p>
              Tailor-made web interfaces designed for intuitive navigation and
              engagement. Whether browsing inventory, scheduling services, or
              seeking information, our designs prioritize user-friendliness.
            </p>
            <GetStarted />
          </div>
        </div>
      </div>
      <WebDesignPricingPlans />
    </section>
  );
};

export default WebDesignWorks;

```

# src\app\webdesign\webdesignpricing\WebDesignPricingPlans.jsx

```jsx
import webstyle from "../webdesign.module.css";
import { Shadows_Into_Light } from "next/font/google";
import AnnualLink from "../components/AnnualLink";
import Image from "next/image";

const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const WebDesignPricingPlans = () => {
  return (
    <section className={webstyle.WebPricingSection}>
      <div className={webstyle.WebPricingSectionHeader}>
        <h2>
          PRICING{" "}
          <span
            className={`${webstyle.webpricingSpan} ${shadowsFont.className}`}
          >
            PLANS
          </span>
        </h2>
        <p>Choose a Komosu Plan that suits your business needs and goals</p>
      </div>
      <div className={webstyle.WebPricingContainer}>
        <AnnualLink />
        <div className={webstyle.webPricingContents}>
          <div className={webstyle.webBasicPlan}>
            <h4>BASIC PLAN</h4>
            <p>
              Get your business up and running with our starter plan tailored
              for your needs
            </p>
            <h3>
              $2,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$3,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 5 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>1-month post-launch support for bug fixes</p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webPremiumPlan}`}
          >
            <h4>PREMIUM PLAN</h4>
            <p>
              Expand your brand offerings and get the best package to grow your
              audience
            </p>
            <h3>
              $10,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$12,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 20 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive SEO setup and optimization</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Blog setup with custom design</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>E-commerce functionality (up to 10 products)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  Extensive training on how to update content and manage
                  features
                </p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced analytics setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Newsletter signup integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  6 months post-launch support for bug fixes, updates, and
                  content changes
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webStandardPlan}`}
          >
            <h4>STANDARD PLAN</h4>
            <p>
              Get your business up and running with our Standard plan tailored
              for your needs
            </p>
            <h3>
              $5,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$6,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 10 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic Analytics setup (Google Analytics)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.tickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  3 months post-launch support for bug fixes and minor updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignPricingPlans;

```

# src\app\webdesign\webdesignlandingpage\WebDesignLandingpage.jsx

```jsx
"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { Montserrat } from "next/font/google";
import { useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const WebDesignLandingpage = () => {
  const parallaxRef = useRef(null);
  return (
    <section className={webstyle.webdesignLandingPage}>
      <div className={webstyle.vectorImagetop}>
        <Image src="/webdesign vector.png" fill />
      </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div
          className={`${webstyle.webdesignTextContainer} ${montserrat.className}`}
        >
          <div className={webstyle.headerContent}>
            <div className={webstyle.headerimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
          <h1>Driving Dealership Success Through <br />Digital Evolution</h1>
          <p>Welcome to Komosu Network, where we redefine automotive web design with a focus on digital transformation. Our services are crafted to elevate your dealership's online presence, enhance customer engagement, and streamline operations with integrated digital solutions</p>
          <LandingPageButtons />
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className={webstyle.webdesignImageContainer} ref={parallaxRef}>
            <div className={webstyle.webimage}>
              <Image src="/Frame 126.png" fill />
            </div>

            <div className={webstyle.webimage2}>
              <Image src="/New Macbook Pro Mockup Front View.png" fill />
            </div>
          </div>
        </ScrollParallax>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image src="/webdesign vector.png" fill />
      </div>
    </section>
  );
};

export default WebDesignLandingpage;

```

# src\app\webdesign\components\Tickimg.jsx

```jsx
import styles from "@/sections/sections.module.css";
import Image from "next/image";

const Tickimg = () => {
  return (
    <div className={styles.offerFeaturesImgShadow}>
      <div className={styles.offerFeaturesImg}>
        <Image src="/Vector (6).png" alt="offerAnimImg" fill />
      </div>
    </div>
  );
};

export default Tickimg;

```

# src\app\webdesign\components\LandingPageButtons.jsx

```jsx
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import Link from "next/link";
const LandingPageButtons = () => {
  return (
    <div className={webstyle.buttonContainer}>
      {/* <Link href="/pricing">
        <button className={webstyle.pricingbtn}>See Pricing</button>
      </Link> */}

      <Link href="/request-demo">
        <button className={webstyle.demobtn}>
          Get Demo
          <div className={webstyle.butttonBlue}>
            <div className={webstyle.buttonImg}>
              <Image src="/Vector.png" fill />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LandingPageButtons;

```

# src\app\webdesign\components\GetStarted.jsx

```jsx
import webstyle from "../webdesign.module.css";
import Link from "next/link";
const GetStarted = () => {
  return (
    <div className={webstyle.webdesignTextContent}>
      <Link href="/request-demo">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default GetStarted;

```

# src\app\webdesign\components\AnnualLink.jsx

```jsx
import webstyle from "../webdesign.module.css";
const AnnualLink = () => {
  return (
    <div className={webstyle.AnnualPricingContainer}>
      <p className={webstyle.annualtextcontent}>
        Annual Pricing <span className={webstyle.annualspan}>(20% Off)</span>
      </p>
      <p className={webstyle.monthlybg}> Monthly</p>
    </div>
  );
};

export default AnnualLink;

```

# src\app\pricing\pricinglandingpage\pricing.jsx

```jsx
import pricingStyles from "../pricing.module.css"
import Image from "next/image";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const Pricing = () => {
  return <section className={pricingStyles.pricingLandingPage}>
            <div className={pricingStyles.pricingHeaderContent}>
                <h1 className={montserrat.className}>Komosu All-In-One Services</h1>
                <p>Get the best deal for your business with our all in one plan. Send us a message to get the best price</p>
                <Link href="/contact"><button>Contact Us</button></Link>
            </div>
        <div className={pricingStyles.pricingLandingPageContainer}>
            <div className={pricingStyles.pricingLandingPageContainerHeader}>
                <h4>Trusted by 1,000 automotive businesses</h4>
                <p>Here is what you get with our all in one plan</p>
            </div>
            <div className={pricingStyles.pricingLandingPageContainerContent}>
                <div className={pricingStyles.pricingContentWrapper}>
                <Link href="/webdesign">
                    <div className={pricingStyles.pricingContent}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={`${pricingStyles.pricingContentImgBg} ${pricingStyles.pricingContentImgBgblue}`}>
                                <div className={pricingStyles.pricingContentImg}>
                                    <Image src="/Vector.svg" fill objectFit="contain"/>
                                </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>WEB DESIGN</h4>
                                <div className={pricingStyles.arrowLeft}>
                                    <Image src="/Arrow 1.svg" fill/>
                                </div>
                            </div>
                        </div>
                        <h3>We revolutionize web design for dealerships. blending innovative techniques with strategic planning to elevate online presence and drive sales.</h3>
                    </div>
                </Link>
                <Link href="/aisolution">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                  <Image src="/vector Ai big.png" fill objectFit="contain"/>
                         </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>AI SOLUTIONS</h4>
                            </div>
                        </div>
                        <h3>Accelerate your business and get real time assistance  on your website and platforms with auto-pilot efficiency sponsored by our AI-powered Chatbot</h3>
                    </div>
                </Link>
                </div>
                <div className={`${pricingStyles.pricingContentWrapper} ${pricingStyles.pricingContentWrapper2}`}>
                <Link href="/contentmarketing">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent3}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                    <Image src="/Vector (4).png" fill objectFit="contain"/>
                                </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>CONTENT MARKETING</h4>
                            </div>
                        </div>
                        <h3>Fuel your brand success with tailored content marketing services championed by us. Develop engaging promotional videos that helps you drive sales.  </h3>
                    </div>
                </Link>
                <Link href="/leadgeneration">
                    <div className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2}`}>
                        <div className={pricingStyles.pricingContentHeader}>
                            <div className={pricingStyles.pricingContentImgBg}>
                                <div className={pricingStyles.pricingContentImg}>
                                  <Image src="/Vector (2).png" fill objectFit="contain"/>
                         </div>
                            </div>
                            <div className={pricingStyles.arrowWrapper}>
                                <h4>LEAD GENERATION</h4>
                            </div>
                        </div>
                        <h3>Drive more leads and transform your dealership growth with our expert solutions. Seamlessly integrate our AI with your CRM system to manage and track leads.</h3>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        <Testimonials/>
        <FAQ/>
  </section>;
};

export default Pricing;

```

# src\app\leadgeneration\leadgenlandingpage\LeadgenLandingpage.jsx

```jsx
"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const LeadgenLandingpage = () => {
  return (
    <section className={leadStyles.LeadingGenSection}>
      <div className={leadStyles.LeadGenContainer}>
        {/* <div className={leadStyles.vectortopImg}>
        <Image src="/yellow vector.png" fill/>
      </div> */}
        <div
          className={`${leadStyles.leadGenTextContainer} ${montserrat.className}`}
        >
          <div className={leadStyles.leadtextheader}>
            <div className={leadStyles.textheaderimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>LEAD GENERATION</h4>
          </div>
          <h1>
            Drive more leads and transform your dealership growth with our
            expert solutions
          </h1>
          <LandingPageButtons />
        </div>
        <div className={leadStyles.leadGenaImageContainer}>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat}>
              <Image src="/Stat (4).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
          <div className={leadStyles.leadmanImg}>
            <Image src="/leadgen man.png" fill objectFit="contain" />
          </div>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat2}>
              <Image src="/Stat (3).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default LeadgenLandingpage;

```

# src\app\leadgeneration\leadgenservices\leadGenServices.jsx

```jsx
"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Testimonials from "@/sections/testimonials";
import { ScrollParallax } from "react-just-parallax";
import FAQ from "@/sections/faq";
import Link from "next/link";
const leadGenServices = () => {
  return (
    <section className={leadStyles.leadServicesSection}>
      <div className={leadStyles.leadGenServicesContainer}>
        <div className={leadStyles.leadGenServicesContent}>
          <div className={leadStyles.leadGenServicesContentText}>
            <h4>
              Seamlessly integrate our AI with your CRM system to manage and
              track leads.
            </h4>
            <GetStarted />
          </div>
          <div className={leadStyles.leadGenServicesContentImage}>
            <div className={leadStyles.leadImageWrapper}>
              <div className={leadStyles.leadImgabsolute}>
                <Image src="/Stat (4).png" fill objectFit="contain" />
              </div>

              <div className={leadStyles.leadservicesImg}>
                <Image src="/Rectangle 63 (2).png" fill objectFit="contain" />
              </div>
              <ScrollParallax isAbsolutelyPositioned shouldPause>
                <div className={leadStyles.leadImgabsolutebottom}>
                  <Image src="/Frame 24.png" fill objectFit="contain" />
                </div>
              </ScrollParallax>
            </div>
          </div>
        </div>
        <div className={leadStyles.leadGenServicesContent}>
          <div className={leadStyles.leadGenServicesContentImage}>
            <div className={leadStyles.leadservicesImg}>
              <Image src="/Frame 1618868497.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={leadStyles.leadGenServicesContentText}>
            <h4>Provide real-time assistance on your dealership’s website.</h4>
            <GetStarted />
          </div>
        </div>
      </div>
      <section className={leadStyles.servicesContactSection}>
        <div className={leadStyles.servicesContactContainer}>
          <div className={leadStyles.servicesContactImgtop}>
            <Image src="/Group 6327.svg" fill />
          </div>
          <h2>
            Transform Your Sales with Our Proven Lead Generation Solutions
          </h2>
          <Link href="/contact">
            <button>Contact us</button>
          </Link>
          <div className={leadStyles.servicesContactImgbottom}>
            <Image src="/Group 2.png" fill />
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default leadGenServices;

```

# src\app\contentmarketing\contentpricing\ContentPricing.jsx

```jsx
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import AnnualLink from "@/app/webdesign/components/AnnualLink";
import webstyle from "@/app/webdesign/webdesign.module.css";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const ContentPricing = () => {
  return (
    <section className={contentStyles.contentpricingsection}>
      <div className={contentStyles.ContentPricingHeader}>
        <h2>
          Pricing{" "}
          <span
            className={`${contentStyles.contentspan} ${shadowsFont.className}`}
          >
            Plans
          </span>
        </h2>
        <p>Choose a Komosu Plan that suits your business needs and goals</p>
      </div>
      <div className={webstyle.WebPricingContainer}>
        <AnnualLink />
        <div className={webstyle.webPricingContents}>
          <div className={webstyle.webBasicPlan}>
            <h4>BASIC PLAN</h4>
            <p>
              Get your business up and running with our starter plan tailored
              for your needs
            </p>
            <h3>
              $2,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$3,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 5 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>1-month post-launch support for bug fixes</p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webPremiumPlan}`}
          >
            <h4>PREMIUM PLAN</h4>
            <p>
              Expand your brand offerings and get the best package to grow your
              audience
            </p>
            <h3>
              $10,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$12,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 20 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive SEO setup and optimization</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Blog setup with custom design</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>E-commerce functionality (up to 10 products)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  Extensive training on how to update content and manage
                  features
                </p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced analytics setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Newsletter signup integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  6 months post-launch support for bug fixes, updates, and
                  content changes
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webStandardPlan}`}
          >
            <h4>STANDARD PLAN</h4>
            <p>
              Get your business up and running with our Standard plan tailored
              for your needs
            </p>
            <h3>
              $5,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$6,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 10 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic Analytics setup (Google Analytics)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  3 months post-launch support for bug fixes and minor updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default ContentPricing;

```

# src\app\contentmarketing\contentmarketingservices\ContentMarketingServices.jsx

```jsx
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";

const ContentMarketingServices = () => {
  return (
    <section className={contentStyles.contentservicessection}>
      <div className={contentStyles.contentservicescontainer}>
        <div className={contentStyles.contentservicecontent}>
          <div className={contentStyles.contentServiceText}>
            <h3>Virtual Content Creator </h3>
            <p>At Komosu Network, we empower dealerships with a cutting-edge virtual content creator who works tirelessly on your dealership's behalf. This innovative tool transforms your content into compelling narratives that enhance the inherent appeal of each vehicle, making it stand out in the competitive market.</p>
            <GetStarted />
          </div>
          <div className={contentStyles.contentservicesImg}>
            <Image src="/Group 6324.png" fill objectFit="contain" />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div
            className={`${contentStyles.contentservicesImg} ${contentStyles.contentservicesImg2}`}
          >
            <Image
              src="/social campaign image.png"
              fill
              objectFit="contain"
            />
          </div>
          <div className={contentStyles.contentServiceText}>
            <h3>
            Social Media Campaigns
            </h3>
            <p>
            Coupled with targeted social media campaigns and strategic advertisements, our solutions are tailored to elevate your dealership's online presence and drive customer engagement.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div className={contentStyles.contentServiceText}>
            <h3>Next-Generation Landing Pages</h3>
            <p>Our expertise extends to creating next-generation landing pages meticulously designed to maximize sales and conversions. We ensure improved performance and increased conversions by transforming your advertisements from low to high content ratings.</p>
            <GetStarted />
          </div>
          <div className={contentStyles.contentservicesImg}>
            <Image src="/nextgen landingpage img.png" fill objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingServices;

```

# src\app\contentmarketing\contentmarketinglandingpage\ContentMarketingLandingPage.jsx

```jsx
"use client";
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const ContentMarketingLandingPage = () => {
  return (
    <section className={contentStyles.contentSection}>
      {/* <div className={contentStyles.vectorbottom}>
        <Image src="/triangle.png" layout="fill" alt="Triangle"/>
      </div> */}
      <div className={contentStyles.contentContainer}>
        <div className={`${contentStyles.contentText} ${montserrat.className}`}>
          <div className={contentStyles.contentheader}>
            <div className={contentStyles.contentheaderImg}>
              <Image
                src="/Vector (5).png"
                layout="fill"
                objectFit="contain"
                alt="Vector"
              />
            </div>
            <h4>CONTENT MARKETING</h4>
          </div>
          <h2>Next-Gen Content Marketing Solutions</h2>

          <p>
            Transform your dealership&apos;s online presence with Komosu
            Network&apos;s next-generation content marketing services
          </p>
          <LandingPageButtons />
        </div>
        <div className={contentStyles.contentImages}>
          <Image
            src="/content marketing girl.png"
            layout="fill"
            objectFit="contain"
            alt="Content Marketing Girl"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingLandingPage;

```

# src\app\components\navbar\specialNavBar.module.css

```css
.specialNavbar {
  opacity: 0.8;
  background: var(--Black, #131313);
}

```

# src\app\components\navbar\NavbarContext.jsx

```jsx
"use client";
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarBg, setNavbarBg] = useState("white");
  const [navbarVisible, setNavbarVisible] = useState(true);

  return (
    <NavbarContext.Provider
      value={{ navbarBg, setNavbarBg, navbarVisible, setNavbarVisible }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);

```

# src\app\components\navbar\navbar.module.css

```css
/* components/navbar.module.css */

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1512px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.2rem;
  /* border: 3px solid blue; */
}

.parentContainer {
  background: rgb(255, 255, 255);
  z-index: 50;
  width: 100vw;
  left: 0;
  top: 0;
  position: fixed;
  transition: top 0.3s;
  height: 90px;
  /* border: 2px solid red; */
}

.hidden {
  top: -100px;
}

.logo {
  font-size: 1.6rem;
  font-weight: 900;
}

.logoContainer {
  position: relative;
  width: 90px;
  height: 90px;
}

.navbar {
  display: flex;
  gap: 1rem;
}

```

# src\app\components\navbar\Navbar.jsx

```jsx
"use client";
import Link from "next/link";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Koulen } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${NavBarstyles.parentContainer} ${plus_Jakarta_Sans.className} ${!isVisible ? NavBarstyles.hidden : ""}`}
    >
      <div className={NavBarstyles.container}>
        <Link href="/" className={NavBarstyles.logo}>
          <div className={NavBarstyles.logoContainer}>
            <Image src="/logo.png" alt="logo" fill />
          </div>
        </Link>
        <div className={NavBarstyles.navbar}>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

```

# src\app\components\footer\footer.module.css

```css
.FooterSection {
  max-width: 100%;
  height: 100%;
  position: relative;
  margin-top: 6rem;
  background-color: var(--blueText);
}

.FooterContainer {
  max-width: 1316px;
  height: 100%;
  margin-inline: auto;

  border-radius: 36px;
  padding: 6rem 2.8rem;
  position: relative;
  color: white;
  font-size: 18px;
}

.footerContentContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  max-width: 100%;
  /* gap: 3em; */
}

.footerHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  background: #020073;
  color: #fff;
}

.footerHeader h1 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  width: 716px;
  font-family: var(--text-Font-Bold);
}

.buttonImage {
  position: relative;
}
.footerBtn {
  display: flex;
  align-items: center;
  gap: 2em;
}

.footerBtn button {
  width: 170px;
  height: 55px;
  padding: 8px;
  border-radius: 36px;
  background-color: var(--btn);
  border: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: 0.36px;
}

.footerBtn .footerbtn2 {
  display: flex;
  height: 55px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  text-align: center;
  background-color: #fff;
  color: var(--btn);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: 0.36px;
  border: 1px solid var(--btn);
  position: relative;
}

.buttonImageBg {
  background-color: var(--btn);
  border-radius: 100px;
  padding: 0.5rem;
}

.buttonImage {
  width: 24px;
  height: 24px;
}

.footerLinks,
.TermsCondition,
.FooterSocialLink {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  font-weight: 500;
  font-family: var(--text-Font-Bold);
  font-size: 18px;
}

.footerLink {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.36px;
  text-transform: capitalize;
  font-family: var(--text-Font-Bold);
}

.FooterContentContainer {
  display: flex;
  justify-content: space-between;
}

.FooterContentContainer h1 {
  font-family: var(--Hero-Header);
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.72px;
}

.SocialLink {
  display: flex;
  align-items: center;
  gap: 1em;
}

.FooterSocialLink p {
  width: 80%;
}

```

# src\app\components\footer\Footer.jsx

```jsx
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.footerHeader}>
        <h1>Ready to scale up your business growth?</h1>
        <div className={styles.footerBtn}>
          <Link href="/request-demo">
            <button className={styles.footerbtn1}>Get Demo</button>
          </Link>
          <Link href="/about">
            <button className={styles.footerbtn2}>
              Learn more
              <div className={styles.buttonImage}>
                <Image
                  src="/View plan button (4).png"
                  alt="vector"
                  fill
                  objectFit="contain"
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.FooterContainer}>
        <div className={styles.footerContentContainer}>
          <div className={styles.FooterContentContainer}>
            <h1>KOMOSU NETWORK</h1>
            <div className={styles.footerLinks}>
              <Link href="/about">About us</Link>
              <Link href="/case-study">Case Study</Link>
              {/* <Link href="/servicesLink">Services</Link> */}
              {/* <Link href="/pricing">Pricing</Link> */}
              <Link href="/contact">Contact</Link>
              <Link href="/request-demo">Get Demo</Link>
            </div>
            <div className={styles.TermsCondition}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className={styles.FooterSocialLink}>
              <p>Reach out on our Social handles</p>
              <div className={styles.SocialLink}>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-tiktok-fill"></i>
                <i className="ri-youtube-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

```

# src\app\components\Fields\SelectField.tsx

```tsx
// SelectField.js
import React from "react";
import styles from "./field.module.css";

const SelectField = ({ label, name, register, errors, options }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      {...register(name)}
      className={errors[name] ? styles.errorInput : ""}
    >
      <option value="">Select a Plan</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default SelectField;

```

# src\app\components\Fields\SelectField.jsx

```jsx
// SelectField.js
import React from "react";
import styles from "./field.module.css";

const SelectField = ({ label, name, register, errors, options }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      {...register(name)}
      className={errors[name] ? styles.errorInput : ""}
    >
      <option value="">Select a Plan</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default SelectField;

```

# src\app\components\Fields\InputField.tsx

```tsx
// InputField.js
import React from "react";
import styles from "./field.module.css";

const InputField = ({ label, name, register, errors, ...rest }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      {...register(name)}
      {...rest}
      className={errors[name] ? styles.errorInput : ""}
    />
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default InputField;

```

# src\app\components\Fields\InputField.jsx

```jsx
// InputField.js
import React from "react";
import styles from "./field.module.css";

const InputField = ({ label, name, register, errors, ...rest }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      {...register(name)}
      {...rest}
      className={errors[name] ? styles.errorInput : ""}
    />
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default InputField;

```

# src\app\components\Fields\field.module.css

```css
.formGroup {
  width: 100%;
  display: flex;
  gap: 0.4em;
  flex-direction: column;
}

.formGroup input {
  color: var(--blueText);
  display: flex;
  height: 50px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #bcbcbc;
}

.formGroup label {
  color: var(--blueText);
}

.formGroup::placeholder {
  text-align: center;
  align-items: center;
}

.formGroup select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.formGroup select:focus,
.formGroup input:focus {
  border-color: #007bff;
  outline: none;
}
.formGroup select option:last-child {
  display: flex;
}
.errorText {
  color: rgb(252, 5, 5);
  letter-spacing: 0.04ch;
  font-size: 14px;
  margin: 6px 0 0 6px;
}

```

# src\app\components\demoForm\validationSchema.jsx

```jsx
// validationSchema.js
import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  numberOfEmployees: z
    .string()
    .min(1, "Number of employees is required")
    .refine((val) => !isNaN(val), "Must be a number"),
  workEmail: z
    .string()
    .min("Work email is required")
    .email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{11}$/, "Invalid phone number format"),
  plan: z.string().min(1, "Plan is required"),
  message: z.string().optional(),
});

```

# src\app\components\demoForm\demoForm.module.css

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 1.75em;
}

.fullname {
  width: 100%;
  display: flex;
  flex: 1 0 0;
  gap: 0.7em;
}

.errorText {
  color: red;
  font-size: 12px;
  margin: 6px 0 0 6px;
}

```

# src\app\components\demoForm\demoForm.jsx

```jsx
"use client";
import styles from "./demoForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { schema } from "./validationSchema";
import InputField from "../Fields/InputField";
import SelectField from "../Fields/SelectField";
const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const {
        firstName,
        lastName,
        companyName,
        workEmail,
        phoneNumber,
        numberOfEmployees,
        plan,
        message,
      } = formData;

      const { data, error } = await supabase.from("demo_form").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: workEmail,
          company_name: companyName,
          phone_number: phoneNumber,
          num_employees: numberOfEmployees,
          plan_choice: plan,
          message: message,
        },
      ]);

      if (error) throw error;
      console.log("Data inserted successfully: ", data);
      reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Error inserting data into table: ", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.fullname}>
          <InputField
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="First Name"
          />
          <InputField
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Last Name"
          />
        </div>
        <InputField
          label="Company Name"
          name="companyName"
          register={register}
          errors={errors}
          placeholder="e.g. Workstation Inc"
        />
        <InputField
          label="Number of Employees"
          name="numberOfEmployees"
          register={register}
          errors={errors}
          placeholder="e.g. 100"
        />
        <InputField
          label="Work Email"
          name="workEmail"
          register={register}
          errors={errors}
          placeholder="Work Email"
          type="email"
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="Phone Number"
          type="tel"
        />
        <SelectField
          label="What plan do you need?"
          name="plan"
          register={register}
          errors={errors}
          options={plans}
        />
        <InputField
          label="Additional Note"
          name="message"
          register={register}
          errors={errors}
          placeholder="Additional Note"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
      {submissionStatus === "success" && <p>Form submitted successfully!</p>}
      {submissionStatus === "error" && (
        <p>There was an error submitting the form.</p>
      )}
    </div>
  );
};

export default DemoForm;

```

# src\app\case-study\digitalTransformation\DigitalTransformationSection.jsx

```jsx
import casestyles from "../casestudy.module.css";
// import Image from "next/image";
import TickImg from "@/app/webdesign/components/Tickimg";
const DigitalTransformationSection = () => {
  return (
    <section className={casestyles.DigitalTransformationSection}>
      <div className={casestyles.headingsection}>
        <h5>Digital Transformation with Komosu Network</h5>
        <h2>
          Envisioning the Full Digital Transformation: <br />A Comprehensive
          Look at Marshall Group
        </h2>
        <p>
          Marshall Group, a renowned automotive dealership, has begun their
          digital transformation journey but has yet to realize its full <br />
          potential. Here’s how Komosu Network can elevate their operations with
          a complete suite of digital solutions.
        </p>
      </div>
      <div className={casestyles.secondheadingsection}>
        <h4>
          "Marshall Group currently faces several <br />
          challenges:
        </h4>
        <div className={casestyles.challanges}>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Outdated website design that does not cater to modern <br />
              user expectations.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Inefficient customer service processes leading to lost <br />{" "}
              leads.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Lack of integrated digital solutions for customer <br />{" "}
              engagement and transactions.
            </p>
          </div>
        </div>
      </div>

      <div className={casestyles.thirdheadingsection}>
        <h4 className={casestyles.thirdsectionheader}>
          To address these challenges, Komosu Network would implement the
          following solutions:
        </h4>
        <div className={casestyles.textWrapper}>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Web Design</h4>
              <p>
                Revamping Marshall Group’s website with a modern, responsive
                design that offers intuitive navigation and optimized user
                experience. This would result in a significant increase in
                online engagement and lead conversion.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>AI Chatbot</h4>
              <p>
                Integrating AI-powered chatbots to provide 24/7 customer
                support, book appointments, and facilitate vehicle reservations
                with a fully refundable fee. This innovation would streamline
                customer service and ensure every lead is noticed.
              </p>
            </div>
          </div>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Content Marketing</h4>
              <p>
                Developing a robust content marketing strategy, including a
                virtual content creator that generates dynamic, self-marketing
                content, social media campaigns, and targeted advertisements to
                drive more traffic to their website and enhance their online
                visibility.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>Lead Generation & CRM Integration</h4>
              <p>
                Implementing advanced lead generation tools and integrating them
                with their CRM system to manage and nurture leads more
                effectively.
              </p>
            </div>
          </div>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Digital Contracting and E-Signature Implementation</h4>
              <p>
                Introducing digital contracting and e-signature solutions to
                minimize paperwork, making the sales process faster and more
                efficient.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>Online Forms & Application Development</h4>
              <p>
                Creating online forms for applications and inquiries to simplify
                customer interactions and data collection
              </p>
            </div>
          </div>

          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Mobile Solution Deployment</h4>
              <p>
                Ensuring that all digital tools are mobile-friendly, allowing
                customers and staff to access them on-the-go."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={casestyles.secondheadingsection}>
        <h4>
          With these comprehensive digital solutions, <br /> Marshall Group
          could expect
        </h4>
        <div className={casestyles.challanges}>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              A significant increase in website traffic and lead <br />{" "}
              conversion rates.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Enhanced customer satisfaction due to round-the-clock <br />{" "}
              support and seamless transaction processes.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              A streamlined sales process with reduced paperwork and <br />{" "}
              faster closing times.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>Improved brand visibility and a stronger online presence.</p>
          </div>
        </div>
      </div>
      <p className={casestyles.lastheadingtext}>
        Through our comprehensive digital solutions, Marshall Group could fully
        realize their digital transformation, leading to increased sales and a
        stronger market presence. Let Komosu Network help you unlock your
        dealership’s full potential."
      </p>
    </section>
  );
};

export default DigitalTransformationSection;

```

# src\app\components\contactForm\validationSchema.tsx

```tsx
import * as z from "zod";

export const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  workEmail: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  message: z.string().min(1, "Message is required"),
});

```

# src\app\components\contactForm\contactForm.tsx

```tsx
"use client";

import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validationSchema";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import InputField from "../Fields/InputField";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    console.log("click");
    setIsSubmitting(true);
    try {
      console.log("Form Data: ", formData);
      const { firstName, lastName, workEmail, message, phoneNumber } = formData;

      const { data, error } = await supabase.from("contact_form").insert([
        {
          phone_number: phoneNumber,
          first_name: firstName,
          last_name: lastName,
          email: workEmail,
          message: message,
        },
      ]);

      if (error) throw error;
      console.log("Data inserted successfully: ", data);
      reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Error inserting data into table: ", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.fullname}>
          <InputField
            label="First Name *"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="First Name"
          />
          <InputField
            label="Last Name *"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Last Name"
          />
        </div>
        <InputField
          label="Email"
          name="workEmail"
          register={register}
          errors={errors}
          placeholder="Work Email"
          type="email"
        />
        <InputField
          label="Phone Number *"
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="Phone Number"
          type="tel"
        />
        <div className={styles.inputContainer}>
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Ask Your Question"
            className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
            {...register("message")}
          ></textarea>
          {errors.message && (
            //@ts-ignore
            <p className={styles.errorText}>{errors.message.message}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
      {submissionStatus === "success" && <p>Form submitted successfully!</p>}
      {submissionStatus === "error" && (
        <p>There was an error submitting the form.</p>
      )}
    </div>
  );
};

export default ContactForm;

```

# src\app\components\contactForm\contactForm.module.css

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.fullname {
  display: flex;
  flex-grow: 1;
  gap: 0.7em;
}

.textarea {
  width: 590px;
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--blueText);
  outline: none;
}

.textarea::placeholder {
  color: var(--blueText);
}

.form input {
  outline: none;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}

.fullname:focus {
  border-color: #007bff;
  outline: none;
}
.errorText {
  color: rgb(252, 5, 5);
  letter-spacing: 0.04ch;
  font-size: 14px;
  margin: 6px 0 0 6px;
}

```

# src\app\components\contactForm\contactForm.jsx

```jsx
"use client";

import { supabase } from "@/app/components/supabaseClient";
import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    // Validate field on change
    switch (e.target.name) {
      case "firstName":
        validateFirstName(e.target.value);
        break;
      case "lastName":
        validateLastName(e.target.value);
        break;
      case "email":
        validateEmail(e.target.value);
        break;
      case "phoneNumber":
        validatePhoneNumber(e.target.value);
        break;
      case "message":
        validateMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateFirstName = (firstName) => {
    if (!firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
  };

  const validateLastName = (lastName) => {
    if (!lastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex as per your requirements
    if (!phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is required.",
      }));
    } else if (!phoneRegex.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter a valid phone number.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }
  };

  const validateMessage = (message) => {
    if (!message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = formState;

    // Validate all fields before submitting
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validatePhoneNumber(phoneNumber);
    validateMessage(message);

    if (Object.values(errors).some((error) => error)) {
      console.error(
        "Form is not valid. Please fill all required fields correctly."
      );
      return;
    }

    // Insert data into the Supabase database
    const { data, error } = await supabase.from("contact_form").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: message,
      },
    ]);

    if (error) {
      console.error("Error inserting data into table:", error);
    } else {
      console.log("Data inserted successfully");

      // Reset form state
    }
  };
  // useEffect(() => {
  //   setErrors({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //     message: "",
  //   });
  // }, [formState]);
  return (
    <form className={styles.form}>
      <div className={styles.fullname}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formState.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <small className={styles.errorText}>{errors.firstName}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formState.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && formState.lastName !== "" && (
            <small className={styles.errorText}>{errors.lastName}</small>
          )}
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small className={styles.errorText}>{errors.email}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formState.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <small className={styles.errorText}>{errors.phoneNumber}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Ask your question"
            value={formState.message}
            className={styles.textarea}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <small className={styles.errorText}>{errors.message}</small>
          )}
        </div>
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;

```

# src\app\case-study\caseStudyHeader\CaseStudyHeader.jsx

```jsx
import casestyles from "../casestudy.module.css"
import { Shadows_Into_Light } from "next/font/google";
const shadowFont = Shadows_Into_Light ({
  subsets: ['latin'],
  weight:['400']
})
const CaseStudyHeader = () => {
  return <section className={casestyles.CaseStudyHeader}>
    <h5>Case study</h5>
    <h1>Digital Transformation with  <span className={`${casestyles.casespan} ${shadowFont.className}`}>Komosu Network</span></h1>
  </section>;
};

export default CaseStudyHeader;

```

# src\app\case-study\casestudycontact\CaseStudyContactLink.jsx

```jsx
import casestyles from "../casestudy.module.css";
import Link from "next/link";
import Image from "next/image";
const CaseStudyContactLink = () => {
  return <section className={casestyles.contactLinksection}>
        <div className={casestyles.contactLinkContainer}>
        <div className={casestyles.topimgabsolute}>
            <Image src="/Group 2.png" fill/>
        </div>
            <h4>Transform Your Sales with Our Proven Lead <br /> Generation Solutions</h4>
            <Link href="/contact"><button>Contact us</button></Link>
            <div className={casestyles.bottomimgabsolute}>
            <Image src="/Group 2.png" fill/>
        </div>
        </div>
  </section>;

};

export default CaseStudyContactLink;

```

# src\app\blog\[slug]\Page.tsx

```tsx
import React from "react";

const SinglePostPage = () => {
  return <div>SinglePostPage</div>;
};

export default SinglePostPage;

```

# src\app\aisolution\aisolutionpricing\Aipricing.jsx

```jsx
import Aistyles from "../Aisolution.module.css";
import webstyle from "@/app/webdesign/webdesign.module.css";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import AnnualLink from "@/app/webdesign/components/AnnualLink";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const Aipricing = () => {
  return (
    <section className={Aistyles.AipricingSection}>
      <div className={Aistyles.AipricingHeader}>
        <h2>
          Pricing{" "}
          <span className={`${Aistyles.Aispan} ${shadowsFont.className}`}>
            Plans
          </span>
        </h2>
        <p>Choose a Komosu Plan that suits your business needs and goals</p>
      </div>
      <div className={webstyle.WebPricingContainer}>
        <AnnualLink />
        <div className={webstyle.webPricingContents}>
          <div className={webstyle.webBasicPlan}>
            <h4>BASIC PLAN</h4>
            <p>
              Get your business up and running with our starter plan tailored
              for your needs
            </p>
            <h3>
              $2,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$3,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 5 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>1-month post-launch support for bug fixes</p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webPremiumPlan} ${webstyle.enterprisePlan}`}
          >
            <h4>ENTERPRISE PLAN</h4>
            <p>
              Expand your brand offerings and get the best package to grow your
              audience
            </p>
            <h3>
              $10,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$12,000/month</span>
            <button>GET DEMO</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 20 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive SEO setup and optimization</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Blog setup with custom design</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>E-commerce functionality (up to 10 products)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  Extensive training on how to update content and manage
                  features
                </p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced analytics setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Newsletter signup integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  6 months post-launch support for bug fixes, updates, and
                  content changes
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${webstyle.webBasicPlan} ${webstyle.webStandardPlan}`}
          >
            <h4>STANDARD PLAN</h4>
            <p>
              Get your business up and running with our Standard plan tailored
              for your needs
            </p>
            <h3>
              $5,000<span>/month</span>
            </h3>
            <span className={webstyle.lineThrough}>$6,000/month</span>
            <button>GET STARTED</button>
            <div className={webstyle.webbasicplanfeatures}>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Custom website design with up to 10 pages</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Responsive design for mobile and tablet</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Advanced SEO setup</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Contact form and social media integration</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Integration with a user-friendly CMS</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Comprehensive training on how to update content</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Image gallery or portfolio</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>Basic Analytics setup (Google Analytics)</p>
              </div>
              <div className={webstyle.webbasicplanfeaturesContent}>
                <div className={webstyle.tickImgBg}>
                  <div className={webstyle.TickImg}>
                    <Image src="/Vector (6).png" fill />
                  </div>
                </div>
                <p>
                  3 months post-launch support for bug fixes and minor updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default Aipricing;

```

# src\app\aisolution\aisolutionservices\AisolutionServices.jsx

```jsx
import Aistyles from "../Aisolution.module.css";
import GetStarted from "@/app/webdesign/components/GetStarted";
import Image from "next/image";
const AisolutionServices = () => {
  return (
    <section className={Aistyles.AisolutionServicesSection}>
      <div className={Aistyles.AisolutionServicesContainer}>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>Provide real-time assistance on your dealership’s website.</h3>
            <GetStarted />
          </div>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868477.png" fill objectFit="contain" />
            </div>
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent2}>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868493.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>
              Elevate sales by guiding your customers to the best product that
              suits their needs
            </h3>
            <GetStarted />
          </div>
        </div>
        <div className={Aistyles.AisolutionServicesContent}>
          <div className={Aistyles.AisolutionServicesText}>
            <h3>Provide real-time assistance on your dealership’s website.</h3>
            <GetStarted />
          </div>
          <div className={Aistyles.AisolutionServicesImage}>
            <div className={Aistyles.aiservicesImg}>
              <Image src="/Frame 1618868477.png" fill objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AisolutionServices;

```

# src\app\aisolution\aisolutionlandingpage\AiLandingpage.jsx

```jsx
"use client";
import Aistyles from "../Aisolution.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const AiLandingpage = () => {
  return (
    <section className={Aistyles.AiLandingPage}>
      <div className={Aistyles.vectorImgtop}>
        <Image src="/yellow vector.png" fill />
      </div>
      <div
        className={`${Aistyles.ailandingpageContainer} ${montserrat.className}`}
      >
        <div className={Aistyles.ailandingpageContainerTextContent}>
          <div className={Aistyles.AiLandingPageHeader}>
            <div className={Aistyles.aiheaderImg}>
              <Image src="/ai vector.png" fill />
            </div>
            <h4>AI SOLUTIONS</h4>
          </div>
          <h2>Revolutionize Your Dealership's Success</h2>
          <p>At Komosu Network, we're combining the power of AI and lead generation to transform your dealership's performance. Our innovative solutions ensure your dealership stands out, engages customers, and drives sales like never before</p>
          <LandingPageButtons />
        </div>
        <div className={Aistyles.ailandingpageImage}>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagetop}>
              <Image src="/Bot.png" fill objectFit="contain" />
            </div>
          </ScrollParallax>

          <div className={Aistyles.aigirlImg}>
            <Image src="/Ai girl.png" fill objectFit="contain" />
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagebottom}>
              <Image src="/Frame 126 (1).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default AiLandingpage;

```

# src\app\about\whoareWeSection\whoarewe.jsx

```jsx
import aboutstyles from "../aboutSection.module.css";
import Image from "next/image";
const WhoareweSection = () => {
  return (
    <section className={aboutstyles.Whoarewesection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4>Who are we?</h4>
        <h2>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions.{" "}
        </h2>
        <p>
          our dedicated team of experts focuses on building strong relationships
          with clients, ensuring that they have more time to concentrate on what
          truly matters to them. We value hearing about their experiences and
          strive to support their journey every step of the way.
        </p>
      </div>
      <div className={aboutstyles.whoareweImageContainer}>
        <div className={aboutstyles.whoareWeImg}>
          <Image
            src="/Rectangle 14 (1).png"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
        <div className={aboutstyles.whoareWeImg2}>
          <Image
            src="/Rectangle 16 (1).png"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoareweSection;

```

# src\app\about\ourVisionSection\ourvision.jsx

```jsx
import aboutstyles from "../aboutSection.module.css";

const OurvisionSection = () => {
  return (
    <section className={aboutstyles.OurvisionSection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4>Our Vision</h4>
        <h2>
          Our vision is to transform car dealerships into a thrivig hub of
          customer engagement and operational excellence{" "}
        </h2>
        <p>
          By leverage on our expertise and top notch services. we aim to create
          a dynamic and competitive terrain where every dealership can achieve
          its full potential, by ensuring sustained growth and aan exceptional
          buying experience for every customer.
        </p>
      </div>
    </section>
  );
};

export default OurvisionSection;

```

# src\app\about\ourSolutionSection\ourSolution.jsx

```jsx
import aboutstyles from "../aboutSection.module.css";

const OurSolutionSection = () => {
  return (
    <section className={aboutstyles.OurSolutionSection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4>Our Solution</h4>
        <h2>
          At Komosu, we offer a wide range of service that is targeted to
          leverage your company’s performances{" "}
        </h2>
        <p>
          Komosu Network innovates lead generation for dealerships, combining
          content marketing and chatbot to boost sales and conversions. we
          enhance your online presence with content marketing , in-depth
          analysis of marketing trend all in a bid to keep you ahead.
        </p>
      </div>
    </section>
  );
};

export default OurSolutionSection;

```

# src\app\about\meetOurTeamSection\meetOurTeam.jsx

```jsx
import aboutstyles from "../aboutSection.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const MeetOurTeamSection = () => {
  return (
    <section className={aboutstyles.MeetOurTeamSection}>
      <div className={aboutstyles.MeetOurTeamContainer}>
        <div
          className={`${aboutstyles.aboutPageHeader} ${aboutstyles.MeetOurTeamHeader}`}
        >
          <h2>
            {" "}
            Meet our{" "}
            <span className={`${aboutstyles.aboutUsSpan} ${shadows.className}`}>
              team
            </span>{" "}
          </h2>
          <p>Discover the brains behind our success - Get to know them</p>
        </div>
        <div className={aboutstyles.teamContainer}>
          <div className={`${aboutstyles.team} ${aboutstyles.team1}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team1.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team2}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team2.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              HEAD OF MARKETING
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team3}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team3.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
          <div className={`${aboutstyles.team} ${aboutstyles.team4}`}>
            <div className={aboutstyles.teamImage}>
              <Image
                src="/team4.png"
                fill
                style={{ borderRadius: "10px" }}
                objectFit="cover"
              />
            </div>
            <span className={`${aboutstyles.TeamRole} ${shadows.className}`}>
              CEO + FOUNDER
            </span>
            <p className={aboutstyles.teamcontent}>
              Tyler is a seasoned professional with over 10 years experience in
              business management. He is always ready and available to lend a
              helping hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;

```

# src\app\about\aboutSections\aboutUsLandingPage.jsx

```jsx
// import aboutstyles from "./aboutSection.module.css";
// import aboutstyles from "@/app/about/aboutSections/aboutSection.module.css";
// import NavBarstyles from "@/app/components/navbar/navbar.module.css";
import { Shadows_Into_Light } from "next/font/google";
import aboutstyles from "../aboutSection.module.css";
const shadows = Shadows_Into_Light ({
  subsets: ['latin'],
  weight: ['400']
})
const AboutUsLandingPage = () => {
  return <section className={aboutstyles.aboutUsLandingSection}>
    <div className={aboutstyles.aboutPageHeader}>
    <h2>
            {" "}
            Get to know us{" "}
            <span className={`${aboutstyles.aboutUsSpan} ${shadows.className}`}>
             Better
            </span>{" "}
        
          </h2>
      <p>We give your business the push it needs</p>
    </div>
  </section>;
};

export default AboutUsLandingPage;

```

# src\app\(auth)\login\page.js

```js
const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;

```

# src\app\servicesLink\ServicesSubLink\WebDesign\pages.tsx

```tsx
const Webdesign = () => {
  return <div>Webdesign</div>;
};

export default Webdesign;

```

# src\app\servicesLink\ServicesSubLink\WebDesign\pages.jsx

```jsx

```

# src\app\components\navbar\links\links.module.css

```css
.links {
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 0 10px;
  font-size: 0.9rem;
}

.mobileLinks {
  display: none;
}
.menuButton {
  display: none;
}

.linkItem {
  position: relative;
}

.servicesContainer {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.subLinks {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  width: 260px;
  padding: 16px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 0 20px 20px 20px;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.4s ease-in,
    visibility 0.4s ease-in;
  font-family: var(--text-Font-Light);
  z-index: 55;
}

.subLinks::before {
  content: "";
  position: absolute;
  top: -14%;
  left: 0;
  width: 70px;
  height: 30px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* transform: rotate(200deg); */
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: -1;
}

.customLinkItem:hover .subLinks {
  opacity: 1;
  visibility: visible;
}

.subLinks a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;
}

.dropdownButton img {
  width: 16px;
  height: 16px;
}

.requestDemoLink {
  display: flex;
  width: 160px;
  height: 55px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  z-index: -1;
  background: var(--btn);
  cursor: pointer;
  z-index: 9;
}

.requestDemoLink:hover {
  box-shadow: var(--btn-Hover);
}

.requestDemoLink a {
  color: white;
}
/* .mobileLinks {
  color: #fff;
} */

@media (max-width: 768px) {
  .links {
    display: none;
    color: #fff;
  }
  .menuButton {
    background-color: transparent;
    border: none;
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    font-size: 30px;
  }
  .mobileLinks {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    height: calc(100vh - 100px);
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    color: #fff;
  }
}

```

# src\app\components\navbar\links\Links.jsx

```jsx
"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/servicesLink",
    subLinks: [
      { title: "Web Design", path: "/webdesign" },
      {
        title: "AI Solution",
        path: "/aisolution",
      },
      {
        title: "Content Marketing",
        path: "/contentmarketing",
      },
      {
        title: "Lead Generation",
        path: "/leadgeneration",
      },
    ],
  },

  // {
  //   title: "Pricing",
  //   path: "/pricing",
  // },

  {
    title: "Case Study",
    path: "/case-study",
  },

  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Get Demo",
    path: "/request-demo",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServiceClick = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <div
            key={link.title}
            className={`${styles.linkItem} ${link.title === "Services" ? styles.customLinkItem : ""}  ${link.title === "Get Demo" ? styles.requestDemoLink : ""}`}
          >
            {link.subLinks ? (
              <>
                <div className={styles.servicesContainer}>
                  <NavLink item={link} />
                  {/* <button className={styles.dropdownButton}>
                    <Image
                      src="/arrow-drop-down-line.svg"
                      alt="dropdown"
                      width={20}
                      height={20}
                    />
                  </button> */}
                </div>
                {
                  <div className={styles.subLinks}>
                    {link.subLinks.map((subLink) => (
                      <NavLink item={subLink} key={subLink.title} />
                    ))}
                  </div>
                }
              </>
            ) : (
              <NavLink item={link} />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        <Image src="/menu-3-fill.svg" alt="menu" width={24} height={24} />
      </button>
      {open && (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <div key={link.title} className={styles.linkItem}>
                {link.title === "Services" ? (
                  <>
                    <div
                      className={styles.servicesContainer}
                      onClick={handleServiceClick}
                    >
                      <NavLink item={link} />
                      <button className={styles.dropdownButton}>
                        <Image
                          src="/arrow-drop-down-line.svg"
                          alt="dropdown"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                    {servicesOpen && (
                      <div className={styles.subLinks}>
                        {link.subLinks.map((subLink) => (
                          <NavLink item={subLink} key={subLink.title} />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink item={link} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;

```

# src\app\servicesLink\ServicesSubLink\LeadGeneration\pages.tsx

```tsx
import React from "react";

const LeadGeneration = () => {
  return <div>LeadGeneration</div>;
};

export default LeadGeneration;

```

# src\app\servicesLink\ServicesSubLink\LeadGeneration\pages.jsx

```jsx

```

# src\app\servicesLink\ServicesSubLink\ContentMarketing\pages.tsx

```tsx
import React from "react";

const ContentMarketing = () => {
  return <div>ContentMarketing</div>;
};

export default ContentMarketing;

```

# src\app\servicesLink\ServicesSubLink\ContentMarketing\pages.jsx

```jsx

```

# src\app\servicesLink\ServicesSubLink\AiSolution\pages.tsx

```tsx
const AiSolution = () => {
  return <div>AiSolution</div>;
};

export default AiSolution;

```

# src\app\servicesLink\ServicesSubLink\AiSolution\pages.jsx

```jsx

```

# src\app\components\navbar\links\navLink\navLink.module.css

```css
.container {
  color: black;
}

.container:hover {
  position: relative;
}

.container::after {
  content: "";
  background-color: var(--btn);
  height: 1px;
  width: 0;
  border-radius: 10px;
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  left: 0;
}

.container:hover::after {
  width: 100%;
  transition: 0.3s;
}

/* .container:last-of-type {
  background-color: var(--btn);
  padding: 0.5rem;
  border-radius: 10px;
  border-radius: 36px;
  transition: 0.1s ease-in;
} */
.active::before {
  content: "";
  background-color: var(--btn);
  width: 100%;
  height: 1px;
  border-radius: 10px;
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  left: 0;
}
/* 
.container:last-child:hover::after {
  content: "";
  background-color: transparent;
  height: 1px;
  width: 0;
  border-radius: 10px;
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  left: 0;
} */
/* 
.container:last-child:hover {
  box-shadow: var(--btn-Hover);
}

.container:last-child::before {
  content: "";
  background-color: transparent;
  height: 1px;
  width: 0;
  border-radius: 10px;
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  left: 0;
} */
.active {
  position: relative;
  font-family: var(--text-Font-Bold);
}

@media (max-width: 768px) {
  .container {
    color: rgb(255, 255, 255);
  }
}

```

# src\app\components\navbar\links\navLink\navLink.jsx

```jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
const NavLink = ({ item, onClick }) => {
  const handleClick = (e) => {
    if (item.subLinks) {
      e.preventDefault();
    }
  };
  const pathName = usePathname();
  return (
    <div>
      {/* <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link> */}
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
        onClick={handleClick}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;

```

