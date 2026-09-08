// Shared dark mode for ALL pages - page 1,2,3,4,5...
(function(){
  const getTheme = () => {
    const ls = localStorage?.getItem("theme") ?? '';
    if (['dark','light'].includes(ls)) return ls;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  };
  const theme = getTheme();
  if (theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', theme);

  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("themeToggle")?.addEventListener("click", () => {
      const el = document.documentElement;
      el.classList.toggle("dark");
      const isDark = el.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
})();
