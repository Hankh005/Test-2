export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = "Hankh005/Test-2";
  const BRANCH = "main";

  if (!GITHUB_TOKEN) {
    return { statusCode: 500, body: JSON.stringify({ error: "GITHUB_TOKEN not set in environment variables." }) };
  }

  let filename, content;
  try {
    ({ filename, content } = JSON.parse(event.body));
    if (!filename || !content) throw new Error("Missing fields");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Request body must include 'filename' and 'content'." }) };
  }

  // Sanitize filename — only allow .md files with safe names
  if (!/^[\w\-]+\.md$/.test(filename)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid filename. Must be a .md file with no path separators." }) };
  }

  const path = `skills/${filename}`;
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${path}`;

  // Check if file already exists
  const checkRes = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (checkRes.ok) {
    // File exists — reject
    return {
      statusCode: 409,
      body: JSON.stringify({
        error: `A skill named '${filename}' already exists in /skills. Rename the file or remove the existing one first.`,
      }),
    };
  } else if (checkRes.status !== 404) {
    // Unexpected GitHub error
    const err = await checkRes.json();
    return { statusCode: 502, body: JSON.stringify({ error: "GitHub API error during existence check.", detail: err }) };
  }

  // File does not exist — commit it
  const encoded = btoa(unescape(encodeURIComponent(content)));

  const commitRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Add approved skill: ${filename}`,
      content: encoded,
      branch: BRANCH,
    }),
  });

  if (!commitRes.ok) {
    const err = await commitRes.json();
    return { statusCode: 502, body: JSON.stringify({ error: "Failed to commit to GitHub.", detail: err }) };
  }

  const result = await commitRes.json();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `✅ '${filename}' successfully committed to /skills.`,
      url: result.content.html_url,
    }),
  };
}
