import { Home, Users, CreditCard, FileText, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen flex flex-col shadow-lg justify-between bg-sidebarBgColor flex-shrink-0">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-300">
          Logoo
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
              <Home className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              General
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="group flex items-center gap-2 cursor-pointer justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                  <span className="text-sm font-medium">Teams</span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">▼</span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                    Banned Users
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
              <CreditCard className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              Billing
            </a>
          </li>

          <li>
            <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
              <FileText className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              Invoices
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="group flex items-center gap-2 cursor-pointer justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                <div className="flex items-center gap-2">
                  <Settings className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                  <span className="text-sm font-medium">Account</span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">▼</span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                    Details
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                    Security
                  </a>
                </li>
                <li>
                  <form action="#">
                    <button type="submit" className="group flex items-center gap-2 w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                      <LogOut className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-800">
        <a href="#" className="group flex items-center gap-2 bg-sidebarBgColor p-4 hover:bg-gray-50 hover:text-gray-800">
          image
          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>
              <span>eric@frusciante.com</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
