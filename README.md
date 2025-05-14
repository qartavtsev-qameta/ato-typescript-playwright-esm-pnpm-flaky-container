# Example – TypeScript / Playwright

This project contains example tests for verifying the documentation at https://docs.qameta.io

- **Language:** TypeScript  
- **Framework:** Playwright  
- **Module Type:** ESM  
- **Package Manager:** PNPM

## Project Structure

- `.github/workflows` — Directory with GitHub CI pipeline configuration
- `tests/` — Directory with test files
- `package.json` —  Project dependencies and scripts
- `playwright.config.ts` — Playwright configuration
- `pnpm-lock.yaml` — Locked dependency versions
- `README.md` — Project description
- `tsconfig.json` — TypeScript configuration


## ⚙️ Parameters in `playwright.config.ts`

### Detailed Reporting

```ts
detail: true,
```

`true`: Provides detailed steps and hooks:
- Playwright test steps
- Before/After hooks
- Worker cleanup steps

`false`: Provides only high-level information

---

### Screenshot, Video, and Tracing

```ts
use: {
  screenshot: "on",
  video: "on",
  trace: "on",
}
```

- screenshot:
  - `"on"`: Capture on test failure or when explicitly triggered
  - `"only-on-failure"`: Capture only on test failure
  - `"off"`: Disable
- video:
  - `"on"`: Always record
  - `"retain-on-failure"`: Record only on test failure
  - `"off"`: Disable
- trace:
  - `"on"`: Always capture
  - `"retain-on-failure"`: Capture only on test failure
  - `"off"`: Disable

---

### Multi-Browser Testing

```ts
projects: [
  {
    name: "Google Chrome",
    use: {
      ...devices["Desktop Chrome"],
    },
  },
  {
    name: "Mozilla Firefox",
    use: {
      ...devices["Desktop Firefox"],
    },
  },
]
```

Defines the browsers for test execution:
- `Google Chrome`
- `Mozilla Firefox`
