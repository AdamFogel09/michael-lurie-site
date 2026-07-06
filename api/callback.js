module.exports = async function handler(req, res) {
  const { code, error } = req.query;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (error) {
    res.status(400).send(renderMessage('error', { message: error }));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      res.status(400).send(renderMessage('error', { message: tokenData.error_description || tokenData.error }));
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.send(renderMessage('success', { token: tokenData.access_token, provider: 'github' }));
  } catch (err) {
    res.status(500).send(renderMessage('error', { message: 'OAuth exchange failed' }));
  }
};

function renderMessage(status, payload) {
  return `<!doctype html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(payload)}',
      e.origin
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`;
}
