Read `AGENTS.md` before starting.

We're adding the design system and UI primitive coponents.

Install and configure `shadcn/ui`.

Add these shadcn components:

- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Do not modify the generated `components/ui/*` files after installation.

Also install `lucide-react`.

Create a `lib/utils.ts` with a reusable `cn()` helper for merging Tailwing classes.

Ensure that all the components match the existing dark theme in `global.css`.

### Check when done

- All components import without errors.
- `cn()` works propely.
- No default light styling appears.