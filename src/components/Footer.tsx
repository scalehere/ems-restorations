export function Footer() {
  return (
    <footer className="bg-navy text-white pb-14 lg:pb-0">
      <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/70">
        <p>© {new Date().getFullYear()} EMS Restoration. All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          <li><a href="https://emsrestorations.nebulabrandgroup.com/privacy" className="hover:text-cyan transition">Privacy Policy</a></li>
          <li><a href="https://emsrestorations.nebulabrandgroup.com/terms" className="hover:text-cyan transition">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}
