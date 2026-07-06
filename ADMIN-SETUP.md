# Content editor setup

The site now reads its text/images/testimonials/videos from `content/site.json`, and there's a visual editor at `/admin` (Decap CMS) so Michael can update that file without touching code. This still needs a few one-time manual steps — most require a GitHub or Vercel login, so they can't be automated from here.

## 1. Deploy to Vercel

Connect the `AdamFogel09/michael-lurie-site` GitHub repo to a new Vercel project (Vercel dashboard → Add New → Project → import the repo). Accept the defaults — it's a static site, no build command needed.

Note the domain Vercel assigns (e.g. `michael-lurie-site.vercel.app`, or a custom domain if you attach one).

## 2. Update the CMS backend URL

Open [admin/config.yml](admin/config.yml) and set `base_url` to the real deployed domain from step 1:

```yaml
base_url: https://<your-actual-domain>
```

Commit and push this change (redeploy will pick it up automatically).

## 3. Create a GitHub OAuth App

This lets the `/admin` login work — GitHub, not us, verifies who's allowed to edit.

1. Go to https://github.com/settings/developers → **New OAuth App**
2. **Application name:** anything, e.g. "Michael Lurie Site CMS"
3. **Homepage URL:** `https://<your-actual-domain>`
4. **Authorization callback URL:** `https://<your-actual-domain>/api/callback`
5. Create it, then generate a **Client Secret**. Copy both the **Client ID** and **Client Secret**.

## 4. Add environment variables in Vercel

In the Vercel project → Settings → Environment Variables, add:

- `OAUTH_GITHUB_CLIENT_ID` → the Client ID from step 3
- `OAUTH_GITHUB_CLIENT_SECRET` → the Client Secret from step 3

Redeploy the project after adding these (env var changes only take effect on a fresh deploy).

## 5. Give Michael GitHub access

Decap CMS commits changes straight to the repo using the GitHub account that logs in at `/admin`. That account needs **write access** to `AdamFogel09/michael-lurie-site`:

- Add Michael as a collaborator on the repo (Settings → Collaborators), and have him create a free GitHub account if he doesn't have one — or
- He can log in through your account/session if you're doing edits together, and you push changes on his behalf.

## 6. Try it

Visit `https://<your-actual-domain>/admin`, click **Login with GitHub**, authorize the app, and confirm the content editor loads with the current site content. Edit a field and hit **Publish** — it commits to `main`, and Vercel auto-redeploys the live site within about a minute.

## What's editable vs. code-only

Editable through `/admin`: hero subheadline/background, about text/photo, gallery photos, video embed links, testimonials, contact info and social links.

Everything else (layout, fonts, colors, animations, section order) stays in `index.html` and needs a code change to update.
