# Canary Prototype Foundation

A comprehensive React component library built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This foundation provides pre-built Canary UI components for creating high-fidelity prototypes that match the Canary design system.

## Features

- ✨ **Complete Component Library** - 30+ pre-built components matching Canary UI
- 🎨 **Design System** - Extracted design tokens (colors, typography, spacing)
- 🚀 **Modern Stack** - Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4
- 📱 **Responsive** - Mobile-first design with responsive components
- 🎯 **Type-Safe** - Full TypeScript support with proper interfaces
- 🔧 **Figma MCP Ready** - Designed to work seamlessly with Figma MCP
- 🚢 **Vercel Optimized** - Ready for instant deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand (for complex state needs)
- **Icons**: @mdi/react
- **Package Manager**: pnpm

## Quick Start

### 1. Clone this repository

```bash
cd /Users/miguelsantana/Documents/Claude-Projects
cp -r canary-prototype-foundation my-new-prototype
cd my-new-prototype
```

### 2. Remove git history and start fresh

```bash
rm -rf .git
git init
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

### 5. Start building your prototype

Edit `app/page.tsx` or create new pages in the `app` directory.

## Component Categories

### Buttons
- `CanaryButton` - Full-featured button with types, sizes, icons, loading states

### Forms
- `CanaryInput` - Text input with validation and helper text
- `CanaryTextArea` - Multi-line text input
- `CanarySelect` - Dropdown select with custom options
- `CanaryCheckbox` - Checkbox with label support
- `CanaryRadio` - Radio button
- `CanaryRadioGroup` - Radio button group container

### Data Display
- `CanaryTag` - Status tags with color variants
- `CanaryTable` - Data table with sorting and custom renderers
- `CanaryCard` - Card container with header and footer

### Layout
- `CanaryContainer` - Responsive container with max-width options
- `CanaryGrid` - Responsive grid system
- `CanaryModal` - Modal dialog with overlay

### Navigation
- `CanaryTabs` - Tabbed navigation
- `CanarySidebar` - Sidebar navigation with icons and badges
- `CanaryHeader` - Application header with logo and actions

### Feedback
- `CanaryAlert` - Inline alert messages
- `CanaryToast` - Toast notifications
- `CanaryLoading` - Loading spinner

## Usage Example

```tsx
import {
  CanaryButton,
  CanaryInput,
  CanaryCard,
  ButtonType,
} from "@/components/canary-ui";

export default function MyPage() {
  return (
    <CanaryCard title="Sign Up">
      <CanaryInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <CanaryButton type={ButtonType.PRIMARY}>
        Submit
      </CanaryButton>
    </CanaryCard>
  );
}
```

## Design Tokens

All design tokens are centralized in `components/canary-ui/design-tokens.ts`:

```typescript
import { colors, typography, spacing } from "@/components/canary-ui/design-tokens";

// Use in your custom components
const myStyle = {
  color: colors.blueDark1,
  fontSize: typography.fontSize.body,
  padding: spacing[4],
};
```

## Working with Figma MCP

This foundation is optimized for use with Figma MCP:

1. **Open your Figma design** in the Figma desktop app
2. **Get the node ID** from the Figma URL (e.g., `node-id=123-456`)
3. **Use Claude Code with Figma MCP** to generate components

Example prompt for Claude:
```
Using the Figma design at node 123:456, build a survey creation page using the Canary UI components from this foundation.
```

## Project Structure

```
canary-prototype-foundation/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Component showcase
├── components/
│   └── canary-ui/           # Component library
│       ├── design-tokens.ts # Design system tokens
│       ├── buttons/         # Button components
│       ├── forms/           # Form components
│       ├── data-display/    # Data display components
│       ├── layout/          # Layout components
│       ├── navigation/      # Navigation components
│       ├── feedback/        # Feedback components
│       ├── loading/         # Loading components
│       └── index.ts         # Main export
├── public/                  # Static assets
└── package.json
```

## Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use Vercel CLI:

```bash
npx vercel
```

## Component Documentation

Each component is fully typed with TypeScript. Use your IDE's IntelliSense to see available props:

```tsx
<CanaryButton
  type={ButtonType.PRIMARY}     // Button style variant
  size={ButtonSize.NORMAL}      // Button size
  isLoading={false}             // Show loading state
  isDisabled={false}            // Disable button
  onClick={() => {}}            // Click handler
>
  Click me
</CanaryButton>
```

## Customization

### Extending Components

Create custom components that use Canary UI:

```tsx
import { CanaryButton, colors } from "@/components/canary-ui";

export function MyCustomButton({ children, ...props }) {
  return (
    <CanaryButton
      className="custom-class"
      style={{ backgroundColor: colors.pink1 }}
      {...props}
    >
      {children}
    </CanaryButton>
  );
}
```

### Adding New Components

1. Create component in appropriate category folder
2. Export from category `index.ts`
3. Re-export from `components/canary-ui/index.ts`

## Maintenance

### Updating the Foundation

To pull updates from the foundation repository:

```bash
# Add foundation as remote (one time)
git remote add foundation /path/to/canary-prototype-foundation

# Pull updates
git fetch foundation
git merge foundation/main
```

## Tips & Best Practices

1. **Keep components pure** - Use props for all configuration
2. **Use design tokens** - Always reference `design-tokens.ts` for colors, spacing
3. **Maintain type safety** - Let TypeScript guide you
4. **Mock data early** - Create realistic sample data for demos
5. **Test responsive** - Check mobile, tablet, and desktop views
6. **Deploy frequently** - Share Vercel URLs with stakeholders

## Troubleshooting

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Type errors

```bash
# Check TypeScript
pnpm typecheck
```

## Support

For questions or issues:
- Check the component showcase at `/` for examples
- Review component source code in `components/canary-ui/`
- Refer to the original Canary UI in `/Documents/Canary/`

## License

Private - Internal use only

---

**Ready to build?** Start by editing `app/page.tsx` or create a new page in the `app` directory.
