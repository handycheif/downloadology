export default {
  async fetch(request, env) {
    // Serve static assets (index.html, covers, etc)
    return env.ASSETS.fetch(request);
  }
}
