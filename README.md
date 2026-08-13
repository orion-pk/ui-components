# @orion-pk/ui-components

> Shared Design System & Reusable UI Component Library for Orion Apps (Academy, Medicare, POS).

## 🚀 Installation

```bash
npm install @orion-pk/ui-components
```

## 📦 Exported Components

| Category | Component | Description |
|---|---|---|
| **Badges & Pills** | `StatusPill` | Status pill (Pending/Unregistered 🔴, Completed/Registered 🟢, In Consultation 🟠) |
| | `SeverityPill` | Severity pill (Minor 🟢, Moderate 🔵, Major 🔴) |
| **Cards** | `StatCard` | Metric analytics card with trend percentage and icon |
| | `CounterCard` | Compact count indicator card |
| | `UserDetailsCard` | Profile overview card with avatar, role, and actions |
| **Feedback** | `CustomLoader` | Custom branded spinner or full-page loader |
| | `AlertDialog` | Standardized confirmation modal |
| **Navigation** | `ProfileDropdown` | Header profile avatar dropdown with sign-out |
| | `VersionBadge` | App version pill badge |
| | `UpdateDialog` | Side-by-side version upgrade modal dialogue |
| | `UpdateProgressBar` | Live 0-100% download progress bar |
| **Data Display** | `DataGrid` | Responsive table grid with sorting & custom column renderers |
| | `Pagination` | Pagination controls with items-per-page selector |
| **Forms** | `Button` | Primary (`#02658b`), Secondary, Danger, and Loading buttons |
| | `SearchBar` | Search input with clear button |
| | `FilterButton` | Filter button with active count badge |
| | `PhoneInput` | Phone input with digit length limits and character filtering |
| | `FormSelect` | Form select dropdown |
| | `UserDialogModal` | Add/Edit modal dialog container |
| | `LoginForm` | Standardized authentication form container |

## 🛠️ Usage Example

```jsx
import { Button, StatusPill, StatCard, SearchBar, DataGrid } from '@orion-pk/ui-components';
import '@orion-pk/ui-components/dist/style.css';

function Dashboard() {
  return (
    <div>
      <StatCard title="Active Users" value="1,280" trend="+12%" />
      <SearchBar placeholder="Search patients..." onChange={handleSearch} />
      <StatusPill status="in_consultation" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```
